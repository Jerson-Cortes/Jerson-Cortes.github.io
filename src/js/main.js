import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

let stats = new Stats();
document.body.appendChild( stats.dom );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

// Creates a 12 by 12 grid helper.
//const gridHelper = new THREE.GridHelper(12, 12);
//scene.add(gridHelper);

// Creates an axes helper with an axis length of 4.
//const axesHelper = new THREE.AxesHelper(4);
//scene.add(axesHelper);

let obj = {
  count: 10000000,
};

const material = new THREE.MeshBasicMaterial( { color: 0xffff00} );
const geometry = new THREE.SphereGeometry( 1, 2, 1 );

const lod = new THREE.LOD();
const mesh = new THREE.InstancedMesh(geometry, material, obj.count);

const dummy = new THREE.Object3D();
for (let i = 0; i < obj.count; i++) {
  dummy.position.x = Math.random() * 1000 - 1000;
  dummy.position.y = Math.random() * 1000 - 1000;
  dummy.position.z = Math.random() * 1000 - 1000;

  dummy.scale.x = dummy.scale.y = dummy.scale.z = Math.random();

  dummy.updateMatrix();
  mesh.setColorAt(i, new THREE.Color(Math.random() * 0xFFFFFF));
  mesh.setMatrixAt(i, dummy.matrix);
}

scene.add( mesh );

camera.position.x = 500;
camera.position.z = 500;
controls.update();

function animate() {

  controls.update();
  renderer.render( scene, camera );

  stats.update();
}

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
