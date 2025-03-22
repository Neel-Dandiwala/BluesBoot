<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

const canvasRef = ref(null);
let scene, camera, renderer, particles;
let spheres = [];
let rings = [];
let animationId = null;

// Animation properties
const particleCount = 40;
const particleColors = [
  new THREE.Color(0x00bffe), // Main brand color
  new THREE.Color(0xaae5ff), // Lighter shade
  new THREE.Color(0xddf3ff)  // Even lighter shade
];

// Initialize Three.js scene
function initThree() {
  // Scene setup
  scene = new THREE.Scene();
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 30;
  
  // Renderer setup
  renderer = new THREE.WebGLRenderer({ 
    canvas: canvasRef.value,
    alpha: true,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 0);
  
  // Create particles
  createParticles();
  
  // Create floating spheres and rings
  createFloatingGeometries();
  
  // Add window resize handler
  window.addEventListener('resize', onWindowResize);
  
  // Start animation loop
  animate();
}

// Create floating particles
function createParticles() {
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const colors = [];
  const sizes = [];
  
  // Generate random positions, colors, and sizes
  for (let i = 0; i < particleCount; i++) {
    // Position particles in a spherical area
    const x = (Math.random() - 0.5) * 60;
    const y = (Math.random() - 0.5) * 60;
    const z = (Math.random() - 0.5) * 60 - 10;
    
    positions.push(x, y, z);
    
    // Randomly select a color from our brand palette
    const color = particleColors[Math.floor(Math.random() * particleColors.length)];
    colors.push(color.r, color.g, color.b);
    
    // Randomize particle sizes
    sizes.push(Math.random() * 1.5 + 0.5);
  }
  
  // Create buffer attributes
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
  
  // Create shader material for particles
  const material = new THREE.PointsMaterial({
    size: 0.8,
    transparent: true,
    opacity: 0.3,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
  });
  
  // Create the particle system
  particles = new THREE.Points(geometry, material);
  scene.add(particles);
}

// Create floating spheres and rings
function createFloatingGeometries() {
  // Create floating spheres
  for (let i = 0; i < 4; i++) {
    const radius = Math.random() * 1.5 + 0.5;
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    
    // Create gradient material for spheres
    const material = new THREE.MeshBasicMaterial({
      color: 0x00bffe,
      transparent: true,
      opacity: 0.2,
      wireframe: Math.random() > 0.5
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    
    // Position spheres randomly
    sphere.position.x = (Math.random() - 0.5) * 40;
    sphere.position.y = (Math.random() - 0.5) * 40;
    sphere.position.z = (Math.random() - 0.5) * 40 - 10;
    
    // Store initial position for animation
    sphere.userData = {
      initialY: sphere.position.y,
      speed: Math.random() * 0.001 + 0.0005,
      rotationSpeed: {
        x: Math.random() * 0.001 - 0.0005,
        y: Math.random() * 0.001 - 0.0005,
        z: Math.random() * 0.001 - 0.0005
      }
    };
    
    scene.add(sphere);
    spheres.push(sphere);
  }
  
  // Create rings
  for (let i = 0; i < 3; i++) {
    const radius = Math.random() * 4 + 2;
    const tubeRadius = 0.05;
    const geometry = new THREE.TorusGeometry(radius, tubeRadius, 16, 100);
    
    // Create material for rings
    const material = new THREE.MeshBasicMaterial({
      color: 0x00bffe,
      transparent: true,
      opacity: 0.15
    });
    
    const ring = new THREE.Mesh(geometry, material);
    
    // Position rings randomly
    ring.position.x = (Math.random() - 0.5) * 50;
    ring.position.y = (Math.random() - 0.5) * 50;
    ring.position.z = (Math.random() - 0.5) * 50 - 15;
    
    // Random rotation
    ring.rotation.x = Math.random() * Math.PI;
    ring.rotation.y = Math.random() * Math.PI;
    
    // Store initial values for animation
    ring.userData = {
      initialRotation: {
        x: ring.rotation.x,
        y: ring.rotation.y,
        z: ring.rotation.z
      },
      rotationSpeed: {
        x: Math.random() * 0.0005 - 0.00025,
        y: Math.random() * 0.0005 - 0.00025,
        z: Math.random() * 0.0005 - 0.00025
      }
    };
    
    scene.add(ring);
    rings.push(ring);
  }
  
  // Add a soft ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add subtle directional light
  const directionalLight = new THREE.DirectionalLight(0x00bffe, 0.3);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
}

// Animation loop
function animate() {
  animationId = requestAnimationFrame(animate);
  
  // Slowly rotate particles
  if (particles) {
    particles.rotation.x += 0.0001;
    particles.rotation.y += 0.0002;
    
    // Gently move particles' vertices
    const positions = particles.geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      // Apply more subtle sine wave movement
      positions[i] += Math.sin(Date.now() * 0.0003 + i) * 0.003;
      positions[i+1] += Math.cos(Date.now() * 0.0002 + i) * 0.003;
    }
    
    particles.geometry.attributes.position.needsUpdate = true;
  }
  
  // Animate floating spheres
  spheres.forEach(sphere => {
    // Gentle floating motion
    sphere.position.y = sphere.userData.initialY + Math.sin(Date.now() * sphere.userData.speed) * 2;
    
    // Subtle rotation
    sphere.rotation.x += sphere.userData.rotationSpeed.x;
    sphere.rotation.y += sphere.userData.rotationSpeed.y;
    sphere.rotation.z += sphere.userData.rotationSpeed.z;
  });
  
  // Animate rings
  rings.forEach(ring => {
    // Gentle rotation
    ring.rotation.x += ring.userData.rotationSpeed.x;
    ring.rotation.y += ring.userData.rotationSpeed.y;
    ring.rotation.z += ring.userData.rotationSpeed.z;
  });
  
  // Add subtle camera movement for parallax effect
  const mouseX = (window.innerWidth / 2 - (window.scrollY * 0.05)) * 0.0005;
  const mouseY = (window.innerHeight / 2) * 0.0005;
  
  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (mouseY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);
  
  renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Handle scroll events to update camera
function handleScroll() {
  // Parallax effect based on scroll position
  const scrollY = window.scrollY;
  if (camera) {
    camera.position.y = -scrollY * 0.005;
  }
}

// Initialize Three.js when component is mounted
onMounted(() => {
  if (canvasRef.value) {
    initThree();
    window.addEventListener('scroll', handleScroll);
  }
});

// Clean up when component is unmounted
onBeforeUnmount(() => {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
  }
  
  window.removeEventListener('resize', onWindowResize);
  window.removeEventListener('scroll', handleScroll);
  
  if (scene) {
    // Dispose of resources
    scene.traverse(object => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        if (object.material.dispose) {
          object.material.dispose();
        }
      }
    });
    
    if (particles) {
      particles.geometry.dispose();
      particles.material.dispose();
    }
    
    scene = null;
    camera = null;
    renderer = null;
    particles = null;
    spheres = [];
    rings = [];
  }
});
</script>

<template>
  <canvas ref="canvasRef" class="background-canvas"></canvas>
</template>

<style scoped>
.background-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style> 