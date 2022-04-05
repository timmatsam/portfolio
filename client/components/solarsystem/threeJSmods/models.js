const loader = new GLTFLoader();
let ship;
loader.load(
  'spaceship/scene.gltf',
  (gltf) => {
    ship = gltf.scene;
    gltf.scene.scale.set(5, 5, 5);
    gltf.scene.position.set(-40, 30, -300);
    scene.add(gltf.scene);
  },
  undefined,
  (error) => {
    console.error(error);
  },
);
const satellites = new THREE.Group();

let satellite;
let satellite2;

async function loading() {
  await loader.load(
    'old_satellite/scene.gltf',
    (gltf) => {
      satellite = gltf.scene;
      satellite2 = satellite.clone();
      satellites.add(satellite, satellite2);
      satellite.scale.set(5, 5, 5);
      satellite.position.set(20, 10, 0);
      satellite2.scale.set(5, 5, 5);
      satellite2.position.set(-20, -5, 0);

      scene.add(satellite, satellite2);
    },
    undefined,
    (error) => {
      console.error(error);
    },
  );
}

loading();
