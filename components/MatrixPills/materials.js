import * as THREE from './vendor/three.module.min.js';

const RED = '#D71920';
const BLUE = '#176CFF';

export function createPillMaterial(color, lowQuality = false) {
  // Keep the surface almost clear; the saturated color comes from light travelling
  // through the volume. This creates a bright center and naturally darker edges.
  const shellTint = new THREE.Color(color).lerp(new THREE.Color('#ffffff'), 0.68);
  const volumeColor = new THREE.Color(color).multiplyScalar(0.82);

  const material = new THREE.MeshPhysicalMaterial({
    color: shellTint,
    metalness: 0,
    roughness: lowQuality ? 0.065 : 0.035,
    clearcoat: 1,
    clearcoatRoughness: 0.018,
    transmission: lowQuality ? 0.88 : 0.98,
    thickness: lowQuality ? 0.66 : 0.94,
    ior: 1.5,
    specularIntensity: 1,
    specularColor: '#ffffff',
    envMapIntensity: lowQuality ? 1.25 : 1.7,
    attenuationDistance: lowQuality ? 0.5 : 0.34,
    attenuationColor: volumeColor,
  });

  // Shade the complete capsule as one transmissive mesh so transparent triangle
  // sorting stays stable. The local Y coordinate creates the two resin densities.
  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('void main() {', 'varying float vPillLocalY;\nvoid main() {\n  vPillLocalY = position.y;');
    shader.fragmentShader = shader.fragmentShader
      .replace('void main() {', 'varying float vPillLocalY;\nvoid main() {')
      .replace(
        '#include <opaque_fragment>',
        `
          float pillSection = smoothstep(-0.045, 0.045, vPillLocalY);
          float sectionBrightness = mix(0.56, 1.04, pillSection);
          outgoingLight *= sectionBrightness;
          #include <opaque_fragment>
        `,
      );
  };
  material.customProgramCacheKey = () => 'two-tone-transmissive-pill-v1';

  return material;
}

export function createRimMaterial(color) {
  return new THREE.ShaderMaterial({
    uniforms: {
      upperRimColor: { value: new THREE.Color(color).multiplyScalar(0.42) },
      lowerRimColor: { value: new THREE.Color(color).multiplyScalar(0.22) },
      rimStrength: { value: 0.9 },
    },
    vertexShader: `
      varying vec3 vViewNormal;
      varying vec3 vViewPosition;
      varying float vLocalY;

      void main() {
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = viewPosition.xyz;
        vViewNormal = normalize(normalMatrix * normal);
        vLocalY = position.y;
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 upperRimColor;
      uniform vec3 lowerRimColor;
      uniform float rimStrength;
      varying vec3 vViewNormal;
      varying vec3 vViewPosition;
      varying float vLocalY;

      void main() {
        vec3 viewDirection = normalize(-vViewPosition);
        vec3 surfaceNormal = normalize(vViewNormal);
        float fresnel = pow(1.0 - abs(dot(surfaceNormal, viewDirection)), 2.15);
        float sectionMix = smoothstep(-0.035, 0.035, vLocalY);
        vec3 rimColor = mix(lowerRimColor, upperRimColor, sectionMix);

        // The reflection is calculated in view space against a fixed studio light.
        // It therefore slides across the resin while the capsule rotates instead
        // of behaving like geometry glued to the model.
        vec3 studioLightDirection = normalize(vec3(-0.72, 0.2, 0.68));
        vec3 halfVector = normalize(studioLightDirection + viewDirection);
        float studioHighlight = pow(max(dot(surfaceNormal, halfVector), 0.0), 92.0);
        float highlightBlend = smoothstep(0.015, 0.72, studioHighlight);
        vec3 reflectedColor = mix(rimColor, vec3(1.0), highlightBlend);
        float reflectedAlpha = max(fresnel * rimStrength, studioHighlight * 0.82);

        gl_FragColor = vec4(reflectedColor, reflectedAlpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    toneMapped: false,
  });
}

export function createSeamMaterial(color) {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color).multiplyScalar(0.34),
    metalness: 0.05,
    roughness: 0.12,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
  });
}

export function createStudioEnvironment(renderer, lowQuality = false) {
  const canvas = document.createElement('canvas');
  canvas.width = lowQuality ? 256 : 512;
  canvas.height = lowQuality ? 128 : 256;

  const context = canvas.getContext('2d');
  if (!context) return null;

  const { width, height } = canvas;
  const background = context.createLinearGradient(0, 0, 0, height);
  background.addColorStop(0, '#f8f9fa');
  background.addColorStop(0.48, '#aeb5bd');
  background.addColorStop(1, '#424b56');
  context.fillStyle = background;
  context.fillRect(0, 0, width, height);

  const paintPanel = (x, y, radius, color, intensity) => {
    const glow = context.createRadialGradient(x, y, 0, x, y, radius);
    glow.addColorStop(0, `rgba(${color}, ${intensity})`);
    glow.addColorStop(0.28, `rgba(${color}, ${intensity * 0.72})`);
    glow.addColorStop(1, `rgba(${color}, 0)`);
    context.fillStyle = glow;
    context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  };

  // Large soft boxes, plus restrained red/blue kickers, mimic a product studio IBL.
  paintPanel(width * 0.73, height * 0.18, width * 0.32, '255, 255, 255', 1);
  paintPanel(width * 0.12, height * 0.48, width * 0.2, '255, 35, 42', 0.42);
  paintPanel(width * 0.9, height * 0.58, width * 0.2, '35, 104, 255', 0.46);
  paintPanel(width * 0.5, height * 0.95, width * 0.34, '225, 234, 242', 0.36);

  const environmentSource = new THREE.CanvasTexture(canvas);
  environmentSource.mapping = THREE.EquirectangularReflectionMapping;
  environmentSource.colorSpace = THREE.SRGBColorSpace;

  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const environment = pmrem.fromEquirectangular(environmentSource).texture;

  environmentSource.dispose();
  pmrem.dispose();
  return environment;
}

export const PILL_COLORS = { red: RED, blue: BLUE };
