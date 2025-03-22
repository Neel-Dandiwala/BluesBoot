<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
  // Animation type: fade, slide-up, slide-left, slide-right, scale, rotate
  animation: {
    type: String,
    default: 'fade'
  },
  // Delay before animation starts (in ms)
  delay: {
    type: Number,
    default: 0
  },
  // Duration of the animation (in ms)
  duration: {
    type: Number,
    default: 800
  },
  // Whether to trigger on scroll or immediately
  triggerOnScroll: {
    type: Boolean,
    default: true
  },
  // Threshold for triggering scroll animation (0-1)
  threshold: {
    type: Number,
    default: 0.2
  },
  // Whether to add hover effects
  hover: {
    type: Boolean,
    default: false
  },
  // Custom hover effect: 'lift', 'glow', 'pulse', 'tilt'
  hoverEffect: {
    type: String,
    default: 'lift'
  }
});

// Element reference and state
const element = ref(null);
const isVisible = ref(!props.triggerOnScroll);
const isHovering = ref(false);

// Animation styles based on props
const animationStyle = computed(() => {
  return {
    '--animation-delay': `${props.delay}ms`,
    '--animation-duration': `${props.duration}ms`
  };
});

// Initial animation class based on type
const animationClass = computed(() => {
  if (isVisible.value) return '';
  
  return `initial-${props.animation}`;
});

// Setup hover effect class
const hoverClass = computed(() => {
  if (!props.hover) return '';
  
  return `hover-${props.hoverEffect}`;
});

// Set up intersection observer for scroll animations
onMounted(() => {
  if (props.triggerOnScroll && element.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: props.threshold,
        rootMargin: '0px'
      }
    );
    
    observer.observe(element.value);
  }
});

// Hover event handlers
const handleMouseEnter = () => {
  if (props.hover) {
    isHovering.value = true;
  }
};

const handleMouseLeave = () => {
  if (props.hover) {
    isHovering.value = false;
  }
};
</script>

<template>
  <div 
    ref="element" 
    class="animated-element" 
    :class="[
      isVisible ? 'animate-in' : '', 
      animation, 
      hoverClass,
      isHovering ? 'hovering' : '',
      animationClass
    ]" 
    :style="animationStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Simplified slot usage to prevent null errors -->
    <slot />
  </div>
</template>

<style scoped>
.animated-element {
  transition-property: opacity, transform;
  transition-duration: var(--animation-duration, 800ms);
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--animation-delay, 0ms);
  will-change: opacity, transform;
}

/* Initial states */
.initial-fade {
  opacity: 0;
}

.initial-slide-up {
  opacity: 0;
  transform: translateY(30px);
}

.initial-slide-left {
  opacity: 0;
  transform: translateX(-30px);
}

.initial-slide-right {
  opacity: 0;
  transform: translateX(30px);
}

.initial-scale {
  opacity: 0;
  transform: scale(0.9);
}

.initial-rotate {
  opacity: 0;
  transform: rotate(-5deg) scale(0.95);
}

.animate-in {
  opacity: 1 !important;
  transform: none !important;
}

/* Hover effects */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift.hovering {
  transform: translateY(-6px) !important;
  box-shadow: 0 12px 30px rgba(0, 191, 254, 0.1);
}

.hover-glow {
  transition: box-shadow 0.3s ease;
}
.hover-glow.hovering {
  box-shadow: 0 0 20px rgba(0, 191, 254, 0.2);
}

.hover-pulse {
  transition: transform 0.3s ease;
}
.hover-pulse.hovering {
  animation: pulse 1.5s infinite ease-in-out;
}

.hover-tilt {
  transition: transform 0.3s ease;
}
.hover-tilt.hovering {
  transform: perspective(1000px) rotateX(2deg) rotateY(2deg) !important;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
</style> 