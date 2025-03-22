<script setup>
import { onMounted, ref, onBeforeUnmount, computed } from 'vue'
import BackgroundEffect from './components/BackgroundEffect.vue';
import AnimatedElement from './components/AnimatedElement.vue';
import ScrollToTop from './components/ScrollToTop.vue';

// Scroll position reactive reference
const scrollY = ref(0);
let ticking = false;

// Update scroll position with throttling
const updateScrollPosition = () => {
  scrollY.value = window.scrollY;
  ticking = false;
};

// Scroll event handler with requestAnimationFrame for performance
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollPosition);
    ticking = true;
  }
};

// Smooth scroll to anchor
const scrollToAnchor = (event, targetId) => {
  event.preventDefault();
  const target = document.getElementById(targetId);
  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offset = 80; // Header height + some padding
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth'
    });
  }
};

// Set up and clean up scroll listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  // Legacy animation support
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all elements with the animate class
  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Computed header style with parallax effect
const headerStyle = computed(() => {
  return {
    backgroundColor: scrollY.value > 50 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
    backdropFilter: `blur(${Math.min(8, scrollY.value / 10)}px)`,
    borderBottom: scrollY.value > 20 ? '1px solid var(--border-light)' : 'none',
    boxShadow: scrollY.value > 50 ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none'
  };
});
</script>

<template>
  <div class="app">
    <ScrollToTop />
    
    <header :style="headerStyle">
      <div class="container">
        <div class="nav-container">
          <AnimatedElement animation="slide-right" :delay="200" :triggerOnScroll="false">
            <div class="logo-container">
              <div class="logo">
                <img src="/blues_boot_blue.png" alt="Blues Boot" />
              </div>
              <div class="logo-text">Blues Boot</div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-left" :delay="400" :triggerOnScroll="false">
            <nav>
              <a href="#features" @click="(e) => scrollToAnchor(e, 'features')">Features</a>
              <a href="#benefits" @click="(e) => scrollToAnchor(e, 'benefits')">Benefits</a>
              <a href="#subscribe" @click="(e) => scrollToAnchor(e, 'subscribe')">Subscribe</a>
            </nav>
          </AnimatedElement>
        </div>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-text">
              <AnimatedElement animation="slide-right" :delay="600">
                <h1>Inspiration to <span class="accent">boot up</span> your blues</h1>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" :delay="800">
                <p class="subtitle">A curated weekly digest of tech news, hackathons, life stories, and career opportunities.</p>
              </AnimatedElement>
              
              <AnimatedElement animation="scale" :delay="1000">
                <div class="cta-container">
                  <a href="#subscribe" @click="(e) => scrollToAnchor(e, 'subscribe')" class="primary-button pulse-animation">Subscribe Now</a>
                </div>
              </AnimatedElement>
            </div>
            
            <div class="hero-model">
              <BackgroundEffect />
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="features">
        <div class="container">
          <AnimatedElement animation="fade">
            <h2 class="section-title">What's included</h2>
          </AnimatedElement>
          
          <div class="features-grid">
            <AnimatedElement animation="slide-up" :delay="100" hover hoverEffect="lift">
              <div class="feature-card">
                <div class="icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3>Tech Updates</h3>
                <p>Essential technology news and insights, curated for relevance and impact.</p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" :delay="300" hover hoverEffect="lift">
              <div class="feature-card">
                <div class="icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3>Innovation Events</h3>
                <p>Hackathons, meetups, and collaborative opportunities in the tech community.</p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" :delay="500" hover hoverEffect="lift">
              <div class="feature-card">
                <div class="icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3>Career Insights</h3>
                <p>Exclusive job opportunities and career development resources for tech professionals.</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section id="benefits" class="benefits">
        <div class="container">
          <AnimatedElement animation="fade">
            <h2 class="section-title">Why subscribe</h2>
          </AnimatedElement>
          
          <div class="benefits-content">
            <div class="benefit-text">
              <AnimatedElement animation="slide-right" :delay="100">
                <div class="benefit-item">
                  <span class="benefit-number">01</span>
                  <div>
                    <h3>Curated Content</h3>
                    <p>Carefully selected insights without the noise or clickbait.</p>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" :delay="300">
                <div class="benefit-item">
                  <span class="benefit-number">02</span>
                  <div>
                    <h3>Time Efficiency</h3>
                    <p>All essential information delivered in one concise weekly digest.</p>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" :delay="500">
                <div class="benefit-item">
                  <span class="benefit-number">03</span>
                  <div>
                    <h3>Growth Focused</h3>
                    <p>Content selected to inspire, educate, and advance your career.</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            <AnimatedElement animation="scale" hover hoverEffect="tilt">
              <div class="benefit-quote">
                <blockquote>
                  "Blues Boot delivers the perfect balance of tech insights and career opportunities each week."
                  <cite>— Sarah Chen, Senior Developer</cite>
                </blockquote>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section id="subscribe" class="subscribe">
        <div class="container">
          <div class="subscribe-content">
            <AnimatedElement animation="fade">
              <h2 class="section-title">Stay in the loop</h2>
              <p>Join our community of tech professionals and receive our weekly digest.</p>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" :delay="200" hover hoverEffect="glow">
              <form class="subscribe-form">
                <div class="form-input-container">
                  <input type="email" placeholder="Your email address" required />
                </div>
                <button type="submit" class="primary-button">Subscribe</button>
              </form>
            </AnimatedElement>
            
            <AnimatedElement animation="fade" :delay="400">
              <div class="privacy-note">
                No spam. Unsubscribe anytime.
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container">
        <div class="footer-content">
          <AnimatedElement animation="slide-up" :delay="100">
            <div class="footer-logo">
              <img src="/blues_boot_white.png" alt="Blues Boot" />
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" :delay="200">
            <div class="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" :delay="300">
            <div class="footer-copyright">
              &copy; 2025 Blues Boot. All rights reserved.
            </div>
          </AnimatedElement>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  --primary-color: #00bffe;
  --primary-light: rgba(0, 191, 254, 0.1);
  --text-dark: #2b3441;
  --text-medium: #5a6878;
  --text-light: #8896a6;
  --white: #ffffff;
  --offwhite: #f8fafc;
  --border-light: #e9ecef;
  --shadow-soft: 0 10px 30px rgba(43, 52, 65, 0.05);
  --shadow-strong: 0 15px 40px rgba(43, 52, 65, 0.1);
  --transition: all 0.3s ease;
}

body {
  margin: 0;
  font-family: 'Future MD BT', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-dark);
  background-color: var(--white);
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

header {
  padding: 20px 0;
  background-color: var(--white);
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 1px 0 var(--border-light);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  width: auto;
}

.logo-text {
  font-family: 'Futura MD BT', Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: -0.02em;
}

nav {
  display: flex;
  gap: 32px;
}

nav a {
  text-decoration: none;
  color: var(--text-medium);
  font-weight: 500;
  font-size: 15px;
  transition: var(--transition);
  position: relative;
}

nav a:hover {
  color: var(--primary-color);
}

nav a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: var(--transition);
}

nav a:hover::after {
  width: 100%;
}

main {
  flex: 1;
}

section {
  padding: 100px 0;
}

section:nth-child(even) {
  background-color: var(--offwhite);
}

.section-title {
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
  color: var(--text-dark);
  letter-spacing: -0.5px;
}

.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  background-color: var(--white);
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
}

.hero-text {
  text-align: left;
  max-width: 600px;
  position: relative;
  z-index: 2;
}

.hero-text h1 {
  font-size: 58px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  color: var(--text-dark);
  letter-spacing: -1px;
  position: relative;
}

.hero-text h1::before {
  content: '';
  position: absolute;
  height: 10px;
  width: 50px;
  background: var(--primary-color);
  top: -20px;
  left: 0;
  border-radius: 5px;
}

.hero-text .subtitle {
  font-size: 20px;
  color: var(--text-medium);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 500px;
  text-align: left;
  position: relative;
  padding-left: 20px;
  border-left: 3px solid var(--primary-light);
}

.hero-model {
  position: relative;
  height: 500px;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  background: #ffffff;
  min-width: 400px;
  max-width: 600px;
  margin-left: auto;
}

.hero .cta-container {
  justify-content: flex-start;
  margin-top: 32px;
}

.accent {
  color: var(--primary-color);
  position: relative;
  font-weight: 900;
}

.accent::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: var(--primary-light);
  z-index: -1;
  border-radius: 4px;
}

.cta-container {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.primary-button {
  background-color: var(--primary-color);
  color: var(--white);
  font-weight: 600;
  font-size: 16px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition);
  box-shadow: 0 4px 12px rgba(0, 191, 254, 0.25);
  position: relative;
  overflow: hidden;
}

.primary-button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.1);
  transform-origin: center;
  transform: scale(0) rotate(45deg);
  transition: transform 0.6s ease;
}

.primary-button:hover {
  background-color: #00a5e0;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 191, 254, 0.3);
}

.primary-button:hover::after {
  transform: scale(1) rotate(45deg);
}

.primary-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 191, 254, 0.2);
}

.pulse-animation {
  animation: subtle-pulse 2s infinite ease-in-out;
}

@keyframes subtle-pulse {
  0% {
    box-shadow: 0 4px 12px rgba(0, 191, 254, 0.25);
  }
  50% {
    box-shadow: 0 4px 20px rgba(0, 191, 254, 0.4);
  }
  100% {
    box-shadow: 0 4px 12px rgba(0, 191, 254, 0.25);
  }
}

.features {
  background-color: var(--white);
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  justify-items: center;
}

.feature-card {
  background-color: var(--white);
  border-radius: 12px;
  padding: 40px 32px;
  box-shadow: var(--shadow-soft);
  max-width: 320px;
  text-align: center;
  transition: var(--transition);
  border: 1px solid var(--border-light);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: var(--primary-light);
  border-radius: 16px;
  margin: 0 auto 24px;
  color: var(--primary-color);
  transition: var(--transition);
}

.feature-card:hover .icon {
  transform: scale(1.05);
  background-color: rgba(0, 191, 254, 0.15);
}

.feature-card h3 {
  font-size: 20px;
  margin-bottom: 16px;
  color: var(--text-dark);
  font-weight: 600;
}

.feature-card p {
  color: var(--text-medium);
  line-height: 1.6;
  margin-top: auto;
}

.benefits {
  background-color: var(--offwhite);
}

.benefits-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .benefits-content {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

.benefit-text {
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: left;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.benefit-number {
  font-weight: 700;
  font-size: 20px;
  color: var(--primary-color);
  flex-shrink: 0;
  line-height: 1;
  background-color: var(--primary-light);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: var(--transition);
}

.benefit-item:hover .benefit-number {
  transform: scale(1.1);
  background-color: rgba(0, 191, 254, 0.2);
}

.benefit-item h3 {
  font-size: 20px;
  margin-bottom: 8px;
  margin-top: 0;
  color: var(--text-dark);
  font-weight: 600;
}

.benefit-item p {
  color: var(--text-medium);
  line-height: 1.6;
  margin: 0;
}

.benefit-quote {
  background-color: var(--white);
  border-radius: 12px;
  padding: 40px;
  box-shadow: var(--shadow-soft);
  border-left: 4px solid var(--primary-color);
  position: relative;
  overflow: hidden;
}

.benefit-quote::after {
  content: '"';
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 120px;
  color: var(--primary-light);
  font-family: serif;
  line-height: 1;
  z-index: 0;
  opacity: 0.7;
}

blockquote {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-dark);
  font-style: italic;
  margin: 0 0 20px 0;
  position: relative;
  z-index: 1;
}

cite {
  display: block;
  font-size: 15px;
  color: var(--text-medium);
  margin-top: 16px;
  font-style: normal;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.subscribe {
  background-color: var(--white);
  position: relative;
  overflow: hidden;
}

.subscribe::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  background: var(--primary-light);
  border-radius: 50%;
  z-index: 0;
  opacity: 0.6;
}

.subscribe-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.subscribe-content p {
  color: var(--text-medium);
  margin-bottom: 40px;
  font-size: 18px;
}

.subscribe-form {
  display: flex;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 20px;
  box-shadow: var(--shadow-soft);
  border-radius: 6px;
  overflow: hidden;
  background-color: var(--white);
  border: 1px solid var(--border-light);
  transition: var(--transition);
}

.form-input-container {
  flex: 1;
  display: flex;
}

input[type="email"] {
  width: 100%;
  padding: 16px 20px;
  border: none;
  font-size: 16px;
  color: var(--text-dark);
  background-color: transparent;
  font-family: inherit;
  transition: var(--transition);
}

input[type="email"]:focus {
  outline: none;
}

.subscribe-form .primary-button {
  border-radius: 0;
  box-shadow: none;
  margin: 0;
  white-space: nowrap;
}

.privacy-note {
  font-size: 14px;
  color: var(--text-light);
  margin-top: 16px;
}

footer {
  background-color: var(--primary-color);
  padding: 60px 0;
  margin-top: auto;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

footer::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: 0;
}

footer::after {
  content: '';
  position: absolute;
  bottom: -80px;
  left: 30%;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  z-index: 0;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.footer-logo {
  margin-bottom: 8px;
}

.footer-logo img {
  height: 32px;
  width: auto;
}

.footer-links {
  display: flex;
  gap: 32px;
}

.footer-links a {
  text-decoration: none;
  color: var(--white);
  font-size: 14px;
  transition: var(--transition);
  opacity: 0.9;
  position: relative;
}

.footer-links a:hover {
  color: var(--white);
  opacity: 1;
}

.footer-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--white);
  transition: var(--transition);
}

.footer-links a:hover::after {
  width: 100%;
}

.footer-copyright {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

/* Animations */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Legacy animation support */
.animate {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  section {
    padding: 80px 0;
  }
  
  .hero {
    padding: 100px 0 80px;
  }
  
  .section-title {
    font-size: 32px;
    margin-bottom: 40px;
  }
  
  .hero-text h1 {
    font-size: 42px;
  }
  
  .hero-text h1::before {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .hero-text .subtitle {
    text-align: center;
    padding-left: 0;
    border-left: none;
    padding-bottom: 20px;
    border-bottom: 3px solid var(--primary-light);
    margin-left: auto;
    margin-right: auto;
  }
  
  .subscribe-form {
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
  }
  
  .subscribe-form .primary-button {
    width: 100%;
    border-top: 1px solid var(--border-light);
  }
  
  .nav-container {
    flex-direction: column;
    gap: 16px;
  }
  
  nav {
    gap: 20px;
  }
  
  .hero-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-text {
    text-align: center;
    order: 1;
  }
  
  .hero-model {
    order: 0;
    height: 350px;
    min-width: unset;
    max-width: 100%;
    margin: 0 auto;
  }
  
  .hero .cta-container {
    justify-content: center;
  }
  
  .logo-text {
    font-size: 20px;
  }
}

/* For better performance on mobile */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
