import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {
  texture,
  sun,
  pTexture,
  milkyWay,
  glow,
} from '../components/solarsystem/threeJSmods/textures';

class SolarSystem extends React.Component {
  componentDidMount() {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500,
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableKeys = false;
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // LOAD MODELS
    const loader = new GLTFLoader();
    let ship;
    loader.load(
      'assets/spaceship/scene.gltf',
      (gltf) => {
        ship = gltf.scene;
        gltf.scene.scale.set(5, 5, 5);
        gltf.scene.position.set(-40, 30, -300);
        scene.add(gltf.scene);
      },
      undefined,
      (error) => error,
    );
    const satellites = new THREE.Group();

    let satellite;
    let satellite2;

    loader.load(
      'assets/old_satellite/scene.gltf',
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
      (error) => error,
    );

    scene.add(satellites);
    // add ambient light
    const light = new THREE.AmbientLight({ color: 0x160202 });
    scene.add(light);
    const directionalLight = new THREE.DirectionalLight({ intensity: 100 });
    directionalLight.position.set(-100, 0, 0);
    scene.add(directionalLight);

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
    for (let i = 0; i < particleCount; i += 1) {
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

    // single line
    const points = [];
    points.push(new THREE.Vector3(-100, 0, 0));
    points.push(new THREE.Vector3(100, 0, 0));

    // sphere Geometry
    const sphereGeometry = new THREE.SphereBufferGeometry(5, 64, 64);
    const spriteMaterial = new THREE.SpriteMaterial({
      map: glow,
      color: 0xffa500,
      transparent: false,
      blending: THREE.AdditiveBlending,
    });

    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(35, 35, 1);
    const sphereMaterial = new THREE.MeshLambertMaterial({
      map: texture,
    });
    const sunMaterial = new THREE.MeshLambertMaterial({
      map: sun,
      blending: THREE.AdditiveBlending,
    });
    const ceresMaterial = new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load('assets/4k_ceres_fictional.jpg'),
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
    const erisMaterial = new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load('assets/4k_eris_fictional.jpg'),
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
    const haumeaMaterial = new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load('assets/4k_haumea_fictional.jpg'),
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
    const makeMaterial = new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load('assets/4k_makemake_fictional.jpg'),
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    const ceres = new THREE.Mesh(sphereGeometry, ceresMaterial);
    const eris = new THREE.Mesh(sphereGeometry, erisMaterial);
    const haumea = new THREE.Mesh(sphereGeometry, haumeaMaterial);
    const makeMake = new THREE.Mesh(sphereGeometry, makeMaterial);

    ceres.position.set(50, 90, -300);
    eris.position.set(150, 90, -300);
    haumea.position.set(-50, 90, -300);
    makeMake.position.set(-150, 90, -300);

    const fictionalPlanets = new THREE.Group();
    fictionalPlanets.add(ceres, eris, haumea, makeMake);
    scene.add(fictionalPlanets);
    const sphere2 = new THREE.Mesh(sphereGeometry, sunMaterial);
    sphere2.position.set(-50, 0, -350);
    sphere2.scale.set(10, 10, 10);
    sphere2.add(sprite);
    scene.add(sphere);

    // fog - can also do fogexp2 to get something closer to reality
    // https://threejsfundamentals.org/threejs/lessons/threejs-fog.html
    // scene.fog = new THREE.Fog()

    const group = new THREE.Group();
    group.add(particleSystem, sphere2);
    scene.add(group);

    // RAYCASTER
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    if (mouse.x === 0 && mouse.y === 0) {
      mouse.x = 10000000;
      mouse.y = 10000000;
    }
    let INTERSECTED;
    function onMouseMove(event) {
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    function render() {
      // render receives mouse data from addEventListener
      // make it so that the particles xare exempt from the color change
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      for (let i = 0; i < intersects.length; i += 1) {
        if (
          intersects[i].object === particleSystem
          || intersects[i].object === sphere2
          || intersects[i].object === sprite
        ) {
          return;
        }
      }
      if (intersects.length > 0) {
        if (INTERSECTED !== intersects[0].object) {
          // if intersected is not equal to an object set
          if (INTERSECTED) {
            INTERSECTED.scale.set(
              INTERSECTED.currentScale[0],
              INTERSECTED.currentScale[1],
              INTERSECTED.currentScale[2],
            );
            // INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
          }

          INTERSECTED = intersects[0].object;
          // INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
          // INTERSECTED.material.color.setHex(0xff0000);
          INTERSECTED.currentScale = [
            INTERSECTED.scale.x,
            INTERSECTED.scale.y,
            INTERSECTED.scale.z,
          ];
          INTERSECTED.scale.set(3, 3, 3);
        }
      } else {
        if (INTERSECTED) {
          INTERSECTED.scale.set(
            INTERSECTED.currentScale[0],
            INTERSECTED.currentScale[1],
            INTERSECTED.currentScale[2],
          );
          // INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
        }
        INTERSECTED = null;
      }
      // renderer.render(scene, camera);
    }

    // USE KEYBOARD
    const xSpeed = 1;
    const ySpeed = 1;

    function onDocumentKeyDown(event) {
      const keyCode = event.which;
      if (keyCode === 38) {
        ship.position.y += ySpeed;
      } else if (keyCode === 40) {
        ship.position.y -= ySpeed;
      } else if (keyCode === 37) {
        ship.position.x -= xSpeed;
      } else if (keyCode === 39) {
        ship.position.x += xSpeed;
      }
    }
    document.addEventListener('keydown', onDocumentKeyDown, false);

    scene.background = milkyWay;
    // AUDIO
    const listener = new THREE.AudioListener();
    camera.add(listener);
    const sound = new THREE.Audio(listener);
    scene.add(sound);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(
      'assets/Interstellar Main Theme - Extra Extended - Soundtrack by Hans Zimmer.mp3',
      (buffer) => {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
        // sound.play();
      },
    );
    this.animate = () => {
      requestAnimationFrame(this.animate);
      renderer.render(scene, camera);

      group.rotation.y += 0.01;
      sphere.rotation.y += 0.005;
      // satellite.rotation.y += 0.01;
      // satellite.rotation.x += 0.01;
      // satellite2.rotation.y += 0.01;
      // satellite2.rotation.x += 0.01;
      ceres.rotation.y += 0.05;
      eris.rotation.y += 0.01;
      haumea.rotation.y += 0.03;
      makeMake.rotation.y += 0.09;
      window.addEventListener('mousemove', onMouseMove, false);
      window.addEventListener('keydown', onDocumentKeyDown, false);

      render();
    };
    this.animate();
  }

  componentWillUnmount() {
    this.animate = null;
  }

  render() {
    return (
      <div ref={(ref) => {
        this.mount = ref;
      }}
      />
    );
  }

  // return renderer.domElement;
  // ? loaded : <LoadingScreen />;
}

export default SolarSystem;
