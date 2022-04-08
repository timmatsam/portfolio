/* eslint-disable */
import * as THREE from 'three';

const texture = new THREE.TextureLoader().load('assets/1_earth_8k.jpg');
const sun = new THREE.TextureLoader().load('assets/2k_sun.jpg');
const pTexture = new THREE.TextureLoader().load('assets/particle.jpg');
const andromedaGalaxy = new THREE.TextureLoader().load(
  'assets/andromeda_galaxy_with_h-alpha.jpg',
);
const milkyWay = new THREE.TextureLoader().load(
  'assets/2k_stars_milky_way.jpg',
);
const glow = new THREE.TextureLoader().load('assets/glow.png');

export {
  texture, sun, pTexture, andromedaGalaxy, milkyWay, glow,
};
