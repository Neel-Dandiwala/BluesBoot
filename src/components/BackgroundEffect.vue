<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const canvasRef = ref(null);
let scene, camera, renderer, logoModel;
let animationId = null;

// Initialize Three.js scene
function initThree() {
  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff); // Solid white background
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 8;
  camera.position.y = 0; // Center view
  
  // Renderer setup
  renderer = new THREE.WebGLRenderer({ 
    canvas: canvasRef.value,
    antialias: true,
    alpha: false // No transparency needed with white background
  });
  
  // Size to parent container instead of window
  const container = canvasRef.value.parentElement;
  const width = container.clientWidth;
  const height = container.clientHeight;
  
  // Fix aspect ratio
  const aspect = width / height;
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
  
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
  renderer.shadowMap.enabled = false; // Disable shadows
  
  // Add lights
  addLights();
  
  // Load the logo model
  loadLogoModel();
  
  // Add window resize handler
  window.addEventListener('resize', onWindowResize);
  
  // Start animation loop
  animate();
}

// Add lights to the scene
function addLights() {
  // Clean ambient light for overall illumination
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);
  
  // Just two simple point lights
  const mainLight = new THREE.PointLight(0xffffff, 1.0, 30);
  mainLight.position.set(0, 0, 8);
  scene.add(mainLight);
  
  const fillLight = new THREE.PointLight(0xffffff, 1.0, 30);
  fillLight.position.set(5, 3, 5);
  scene.add(fillLight);
}

// Load the logo GLTF model
function loadLogoModel() {
  const loader = new GLTFLoader();
  
  loader.load('models/logo.gltf', (gltf) => {
    logoModel = gltf.scene;
    
    // Center the model
    const box = new THREE.Box3().setFromObject(logoModel);
    const center = box.getCenter(new THREE.Vector3());
    logoModel.position.x = -center.x;
    logoModel.position.y = -center.y;
    logoModel.position.z = -center.z;
    
    // Scale model to fit nicely in the scene
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3 / maxDim; // Larger scale to fill the container
    logoModel.scale.set(scale, scale, scale);
    
    // Set the initial rotation
    logoModel.rotation.x = Math.PI * 0.05; // Slight tilt forward
    logoModel.rotation.y = Math.PI * 0.1; // Slight initial rotation
    
    // Apply the exact color to all materials
    logoModel.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = false;
        node.receiveShadow = false;
        
        // Set the material to exact blue color
        if (node.material) {
          // Create new material with exact color
          const newMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0x00bffe)
          });
          
          node.material = newMaterial;
        }
      }
    });
    
    // Store initial position for animation
    logoModel.userData = {
      initialY: logoModel.position.y,
      initialRotationY: logoModel.rotation.y
    };
    
    scene.add(logoModel);
  }, 
  // Progress callback
  (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  // Error callback
  (error) => {
    console.error('Error loading model:', error);
  });
}

// Animation loop
function animate() {
  animationId = requestAnimationFrame(animate);
  
  if (logoModel) {
    // Gentle floating motion
    logoModel.position.y = logoModel.userData.initialY + Math.sin(Date.now() * 0.0006) * 0.15;
    
    // Slow smooth rotation
    logoModel.rotation.y += 0.003;
    
    // Slight tilt variation
    logoModel.rotation.x = Math.PI * 0.05 + Math.sin(Date.now() * 0.0003) * 0.03;
  }
  
  renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
  const container = canvasRef.value.parentElement;
  
  if (!container) return;
  
  const width = container.clientWidth;
  const height = container.clientHeight;
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

// Cleanup function
function cleanup() {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  
  window.removeEventListener('resize', onWindowResize);
  
  // Dispose of Three.js resources
  if (scene) {
    scene.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose();
      }
      
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
    
    renderer?.dispose();
  }
}

onMounted(() => {
  initThree();
});

onBeforeUnmount(() => {
  cleanup();
});
</script>

<template>
  <canvas ref="canvasRef" class="background-canvas"></canvas>
</template>

<style scoped>
.background-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: block;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: none; /* Remove shadow */
}
</style> 