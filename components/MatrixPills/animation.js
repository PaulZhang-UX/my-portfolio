const damp = (current, target, smoothing, delta) =>
  current + (target - current) * (1 - Math.exp(-smoothing * delta));

export function updatePill({
  group,
  material,
  kind,
  hovered,
  pointer,
  elapsed,
  delta,
  reducedMotion,
}) {
  const isActive = hovered === kind;
  const otherIsActive = hovered !== null && !isActive;
  const phase = kind === 'red' ? 0 : Math.PI * 0.83;
  const floatAmount = reducedMotion ? 0.025 : 0.12;
  const floatSpeed = reducedMotion ? 0.3 : kind === 'red' ? 0.72 : 0.61;
  const baseY = group.userData.baseY;

  group.position.y = damp(
    group.position.y,
    baseY + Math.sin(elapsed * floatSpeed + phase) * floatAmount,
    4,
    delta,
  );
  group.position.z = damp(group.position.z, isActive ? 0.42 : otherIsActive ? -0.42 : 0, 5.5, delta);

  const targetScale = isActive ? 1.075 : otherIsActive ? 0.965 : 1;
  const nextScale = damp(group.scale.x, targetScale, 6, delta);
  group.scale.setScalar(nextScale);

  const rotationDirection = kind === 'red' ? 1 : -1;
  if (!reducedMotion) {
    group.rotation.y += delta * 0.075 * rotationDirection;
  }
  group.rotation.x = damp(group.rotation.x, pointer.y * 0.07, 2.6, delta);
  group.rotation.z = damp(
    group.rotation.z,
    group.userData.baseRotationZ + pointer.x * 0.035,
    2.6,
    delta,
  );

  const materials = Array.isArray(material) ? material : [material];
  materials.forEach((sectionMaterial) => {
    sectionMaterial.roughness = damp(
      sectionMaterial.roughness,
      isActive ? 0.022 : 0.035,
      5,
      delta,
    );
    sectionMaterial.clearcoatRoughness = damp(
      sectionMaterial.clearcoatRoughness,
      isActive ? 0.008 : 0.018,
      5,
      delta,
    );
  });
}

export function updateSceneRig(rig, pointer, delta, reducedMotion) {
  const strength = reducedMotion ? 0.025 : 0.12;
  rig.rotation.y = damp(rig.rotation.y, pointer.x * strength, 2.4, delta);
  rig.rotation.x = damp(rig.rotation.x, -pointer.y * strength * 0.52, 2.4, delta);
  rig.position.x = damp(rig.position.x, pointer.x * 0.14, 2.2, delta);
  rig.position.y = damp(rig.position.y, pointer.y * 0.08, 2.2, delta);
}
