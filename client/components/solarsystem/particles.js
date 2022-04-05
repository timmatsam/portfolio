// particles
const arrOfParticles = [];
const particleCount = 1800;
const pMaterial = new THREE.PointsMaterial({
  size: 1,
  blending: THREE.AdditiveBlending,
  transparent: true,
  map: pTexture,
  color: 0x319bd3,
});
for (let i = 0; i < particleCount; i++) {
  // let pY = 0 - (Math.random() * 1 - .5)
  const pX = Math.random() * 200 - 100;
  const pY = Math.random() * 100 - 50;
  const pZ = Math.random() * 200 - 100;
  const particle = new THREE.Vector3(pX, pY, pZ); // represents a point in space
  arrOfParticles.push(particle);
}
const geometryP = new THREE.BufferGeometry().setFromPoints(arrOfParticles);
const particleSystem = new THREE.Points(geometryP, pMaterial);
scene.add(particleSystem);
