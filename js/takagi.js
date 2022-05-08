import * as THREE from 'three';
import { OrbitControls } from 'controls';
import { GLTFLoader } from 'loader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const box = document.querySelector('.box');
box.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = true;
controls.target.set(0, 1.5, 0);

camera.position.z = 3;
camera.position.y = 1.5;

const loader = new GLTFLoader();
let object;

loader.load('object/takagi/scene.gltf', function (gltf) {
    object = gltf.scene;
    scene.add(object);
});

function animate() {
    requestAnimationFrame(animate);

    if (object) {
        object.rotation.y += 0.001;
    }

    renderer.render(scene, camera);
}
animate();
