'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from './vendor/three.module.min.js';
import {
  createPillMaterial,
  createRimMaterial,
  createSeamMaterial,
  createStudioEnvironment,
  PILL_COLORS,
} from './materials';
import { updatePill, updateSceneRig } from './animation';
import styles from './MatrixPills.module.css';

function getPerformanceProfile() {
  const memory = navigator.deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency ?? 8;
  const compactViewport = window.matchMedia('(max-width: 720px)').matches;

  return {
    lowQuality: compactViewport || memory <= 4 || cores <= 4,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  };
}

function createPill(kind, lowQuality) {
  const color = PILL_COLORS[kind];
  const group = new THREE.Group();
  const geometry = new THREE.CapsuleGeometry(
    0.58,
    2.04,
    10,
    28,
  );
  const material = createPillMaterial(color, lowQuality);
  const body = new THREE.Mesh(geometry, material);
  const rim = new THREE.Mesh(geometry, createRimMaterial(color));
  rim.renderOrder = 1;

  // A restrained center seam adds industrial-design scale without an external model.
  const seamGeometry = new THREE.TorusGeometry(0.584, 0.016, 5, lowQuality ? 20 : 36);
  const seam = new THREE.Mesh(seamGeometry, createSeamMaterial(color));
  seam.rotation.x = Math.PI / 2;

  const model = new THREE.Group();
  model.scale.setScalar(0.86);
  model.add(body, rim, seam);
  group.add(model);
  group.userData.body = body;
  group.userData.material = material;
  group.userData.disposables = [
    geometry,
    material,
    rim.material,
    seamGeometry,
    seam.material,
  ];
  return group;
}

export function MatrixPills({
  onRedPillClick,
  onBluePillClick,
  onHoverChange,
}) {
  const mountRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const hoveredRef = useRef(null);
  const [fallback, setFallback] = useState(false);

  const setHovered = (kind) => {
    hoveredRef.current = kind;
    onHoverChange?.(kind);
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const { lowQuality, reducedMotion } = getPerformanceProfile();
    let renderer;
    let frameId = 0;
    let environment = null;
    let running = true;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: lowQuality ? 'default' : 'high-performance',
      });
    } catch {
      // Keep the effect itself limited to external-system setup; React updates on the next frame.
      const fallbackFrame = requestAnimationFrame(() => setFallback(true));
      return () => cancelAnimationFrame(fallbackFrame);
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight, false);
    renderer.setClearColor(0xffffff, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
    camera.position.set(0, 0.1, 9.2);

    environment = createStudioEnvironment(renderer, lowQuality);
    scene.environment = environment;

    const rig = new THREE.Group();
    const red = createPill('red', lowQuality);
    const blue = createPill('blue', lowQuality);
    const separation = lowQuality ? 0.92 : 1.12;

    red.position.set(-separation, 0, 0);
    red.rotation.set(0, -0.22, 0.115);
    red.userData.baseY = 0;
    red.userData.baseRotationZ = 0.115;

    blue.position.set(separation, 0, 0);
    blue.rotation.set(0, 0.19, -0.095);
    blue.userData.baseY = 0;
    blue.userData.baseRotationZ = -0.095;

    rig.add(red, blue);
    scene.add(rig);

    const ambient = new THREE.HemisphereLight(0xbfd6ff, 0x08090d, 0.72);
    const key = new THREE.RectAreaLight(0xffffff, 9.5, 4.8, 5.4);
    key.position.set(3.8, 4.7, 5.2);
    key.lookAt(0, 0, 0);

    const redRim = new THREE.PointLight(0xff2430, 11, 9, 1.7);
    redRim.position.set(-3.6, 1.2, -1.3);
    const blueRim = new THREE.PointLight(0x2478ff, 12, 9, 1.7);
    blueRim.position.set(3.7, -0.2, -1.1);
    const frontFill = new THREE.PointLight(0xd9efff, 4.4, 10, 1.7);
    frontFill.position.set(0, -3.5, 4.7);
    scene.add(ambient, key, redRim, blueRim, frontFill);

    const clock = new THREE.Clock();
    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    const frameInterval = 1000 / (reducedMotion ? 20 : lowQuality ? 30 : 45);
    let lastFrameTime = 0;

    const render = (timestamp = performance.now()) => {
      if (!running) return;
      frameId = requestAnimationFrame(render);
      if (timestamp - lastFrameTime < frameInterval) return;

      const delta = Math.min((timestamp - lastFrameTime) / 1000 || frameInterval / 1000, 0.05);
      lastFrameTime = timestamp;
      const elapsed = clock.getElapsedTime();
      const common = {
        hovered: hoveredRef.current,
        pointer: pointerRef.current,
        elapsed,
        delta,
        reducedMotion,
      };

      updatePill({ group: red, material: red.userData.material, kind: 'red', ...common });
      updatePill({ group: blue, material: blue.userData.material, kind: 'blue', ...common });
      updateSceneRig(rig, pointerRef.current, delta, reducedMotion);
      renderer.render(scene, camera);
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frameId);
      } else if (!running) {
        running = true;
        lastFrameTime = 0;
        render();
      }
    };

    const onContextLost = (event) => {
      event.preventDefault();
      running = false;
      cancelAnimationFrame(frameId);
      setFallback(true);
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    renderer.domElement.addEventListener('webglcontextlost', onContextLost);
    render();

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
      red.userData.disposables.forEach((item) => item.dispose());
      blue.userData.disposables.forEach((item) => item.dispose());
      environment?.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  const onPointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerRef.current.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    pointerRef.current.y = -(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
  };

  const resetPointer = () => {
    pointerRef.current = { x: 0, y: 0 };
    setHovered(null);
  };

  return (
    <div
      className={styles.stage}
      onPointerMove={onPointerMove}
      onPointerLeave={resetPointer}
    >
      <div ref={mountRef} className={styles.canvasMount} aria-hidden="true" />

      {fallback && (
        <div className={styles.fallback} aria-hidden="true">
          <span className={`${styles.fallbackPill} ${styles.fallbackRed}`} />
          <span className={`${styles.fallbackPill} ${styles.fallbackBlue}`} />
        </div>
      )}

      <button
        type="button"
        className={`${styles.hitTarget} ${styles.redTarget}`}
        onPointerEnter={() => setHovered('red')}
        onPointerLeave={() => setHovered(null)}
        onFocus={() => setHovered('red')}
        onBlur={() => setHovered(null)}
        onClick={onRedPillClick}
        aria-label="选择红色胶囊，进入作品探索模式"
      />
      <button
        type="button"
        className={`${styles.hitTarget} ${styles.blueTarget}`}
        onPointerEnter={() => setHovered('blue')}
        onPointerLeave={() => setHovered(null)}
        onFocus={() => setHovered('blue')}
        onBlur={() => setHovered(null)}
        onClick={onBluePillClick}
        aria-label="选择蓝色胶囊，进入个人介绍模式"
      />
    </div>
  );
}
