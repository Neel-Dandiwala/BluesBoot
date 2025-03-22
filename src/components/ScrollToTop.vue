<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

// State to track when to show the button
const isVisible = ref(false);
let scrollThreshold = 600; // Show button after scrolling this much

// Update visibility based on scroll position
const updateButtonVisibility = () => {
  isVisible.value = window.scrollY > scrollThreshold;
};

// Scroll to top with smooth animation
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Set up scroll listener
onMounted(() => {
  window.addEventListener('scroll', updateButtonVisibility);
  updateButtonVisibility(); // Initial check
});

// Clean up scroll listener
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateButtonVisibility);
});

// Dynamic button styles
const buttonStyle = computed(() => {
  return {
    opacity: isVisible.value ? '1' : '0',
    transform: isVisible.value ? 'translateY(0)' : 'translateY(20px)',
    pointerEvents: isVisible.value ? 'auto' : 'none'
  };
});
</script>

<template>
  <button 
    class="scroll-to-top" 
    :style="buttonStyle"
    @click="scrollToTop"
    aria-label="Scroll to top"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 191, 254, 0.25);
  transition: all 0.3s ease, opacity 0.5s ease, transform 0.5s ease;
  z-index: 100;
}

.scroll-to-top:hover {
  background-color: #00a5e0;
  transform: scale(1.05) translateY(-2px) !important;
  box-shadow: 0 6px 16px rgba(0, 191, 254, 0.3);
}

.scroll-to-top:active {
  transform: scale(0.95) !important;
}

@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}
</style> 