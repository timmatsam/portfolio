//particles
const arrOfParticles = [];
const particleCount = 1800;
let pMaterial = new THREE.PointsMaterial({
  size: 1,
  blending: THREE.AdditiveBlending,
  transparent: true,
  map: pTexture,
  color: 0x319bd3,
});
for (let i = 0; i < particleCount; i++) {
  // let pY = 0 - (Math.random() * 1 - .5)
  let pX = Math.random() * 200 - 100;
  let pY = Math.random() * 100 - 50;
  let pZ = Math.random() * 200 - 100;
  let particle = new THREE.Vector3(pX, pY, pZ); //represents a point in space
  arrOfParticles.push(particle);
}
let geometryP = new THREE.BufferGeometry().setFromPoints(arrOfParticles);
let particleSystem = new THREE.Points(geometryP, pMaterial);
scene.add(particleSystem);
