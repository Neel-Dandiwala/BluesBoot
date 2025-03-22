<script setup>
import { onMounted, ref } from 'vue'

// Intersection Observer for scroll animations
onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)
  
  // Observe all elements with the animate class
  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="app">
    <div class="content">
      <header>
        <div class="container header-container">
          <div class="logo">BluesBoot</div>
          <nav>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#subscribe">Subscribe</a>
          </nav>
        </div>
      </header>
      
      <main>
        <section class="hero">
          <div class="container">
            <div class="hero-content animate fade-up">
              <h1>Boot Up Your Blues</h1>
              <p class="subtitle">A spark of inspiration — from tech news and hackathons to life stories, job leads, and standout LinkedIn finds</p>
              
              <div class="cta-container">
                <button class="primary-button">Get Started</button>
                <button class="secondary-button">Learn More</button>
              </div>
            </div>
          </div>
          <div class="hero-pattern"></div>
        </section>
        
        <section id="about" class="about">
          <div class="container">
            <h2 class="section-title animate fade-up">Why Blues Boot?</h2>
            <div class="features-grid">
              <div class="feature animate fade-up" style="animation-delay: 100ms;">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3>Tech News</h3>
                <p>Stay updated with the latest technology trends, product launches, and industry insights.</p>
              </div>
              <div class="feature animate fade-up" style="animation-delay: 200ms;">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3>Hackathons</h3>
                <p>Discover exciting hackathon opportunities and collaborative innovation events.</p>
              </div>
              <div class="feature animate fade-up" style="animation-delay: 300ms;">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 9H9.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 9H15.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3>Life Stories</h3>
                <p>Get inspired by real-world experiences and personal growth journeys.</p>
              </div>
              <div class="feature animate fade-up" style="animation-delay: 400ms;">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 22.08V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3>Job Leads</h3>
                <p>Find your next career opportunity with exclusive job offers and insights.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section class="testimonial">
          <div class="container">
            <div class="testimonial-content animate fade-up">
              <blockquote>
                "Blues Boot has completely changed how I keep up with the tech world. The curated content is exactly what I need each week."
              </blockquote>
              <div class="testimonial-author">
                <span class="author-name">Alex Johnson</span>
                <span class="author-title">Senior Developer at TechCorp</span>
              </div>
            </div>
          </div>
        </section>
        
        <section id="subscribe" class="subscribe">
          <div class="container">
            <div class="subscribe-content animate fade-up">
              <h2 class="section-title">Join the Community</h2>
              <p>Subscribe to get weekly inspiration delivered to your inbox.</p>
              
              <form class="subscribe-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit" class="primary-button">Subscribe</button>
              </form>
              
              <div class="privacy-note">
                We respect your privacy. Unsubscribe at any time.
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-logo">BluesBoot</div>
            <div class="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
            <div class="footer-copyright">
              &copy; 2025 Blues Boot. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
:root {
  --primary-blue: #00bffe;
  --primary-dark-blue: #0095ce;
  --primary-black: #000000;
  --primary-white: #ffffff;
  --light-gray: rgba(255, 255, 255, 0.1);
  --accent-gray: rgba(255, 255, 255, 0.15);
  --text-gray: rgba(255, 255, 255, 0.7);
  --transition-ease: cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--primary-blue);
  color: var(--primary-white);
  overflow-x: hidden;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 1000;
  background: var(--primary-blue);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--light-gray);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-white);
  letter-spacing: -0.5px;
}

nav {
  display: flex;
  gap: 2rem;
}

nav a {
  color: var(--primary-white);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: opacity 0.3s var(--transition-ease);
  position: relative;
}

nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -4px;
  left: 0;
  background-color: var(--primary-white);
  transition: width 0.3s var(--transition-ease);
}

nav a:hover::after {
  width: 100%;
}

section {
  padding: 6rem 0;
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-pattern {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 80%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  z-index: -1;
}

.hero-content {
  max-width: 750px;
}

h1 {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: var(--primary-white);
  line-height: 1.1;
  letter-spacing: -1px;
  font-weight: 800;
}

.subtitle {
  font-size: 1.25rem;
  max-width: 600px;
  margin-bottom: 2.5rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-gray);
}

.cta-container {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.primary-button {
  background-color: var(--primary-white);
  color: var(--primary-blue);
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: all 0.3s var(--transition-ease);
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.secondary-button {
  background-color: transparent;
  color: var(--primary-white);
  border: 1px solid var(--light-gray);
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: all 0.3s var(--transition-ease);
}

.secondary-button:hover {
  background-color: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.about {
  background-color: rgba(0, 0, 0, 0.05);
  border-top: 1px solid var(--light-gray);
  border-bottom: 1px solid var(--light-gray);
}

.section-title {
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--primary-white);
  letter-spacing: -0.5px;
  font-weight: 700;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature {
  background: var(--primary-white);
  color: var(--primary-black);
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s var(--transition-ease), box-shadow 0.3s var(--transition-ease);
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--primary-blue);
  color: white;
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--primary-black);
  letter-spacing: -0.3px;
  font-weight: 700;
}

.feature p {
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
}

.testimonial {
  text-align: center;
  padding: 8rem 0;
}

.testimonial-content {
  max-width: 800px;
  margin: 0 auto;
}

blockquote {
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 2rem;
  position: relative;
  color: var(--primary-white);
}

blockquote::before {
  content: '"';
  font-size: 5rem;
  line-height: 0;
  position: absolute;
  top: 0.5rem;
  left: -2rem;
  color: rgba(255, 255, 255, 0.2);
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.author-name {
  font-weight: 600;
  font-size: 1rem;
}

.author-title {
  font-size: 0.85rem;
  color: var(--text-gray);
}

.subscribe {
  background-color: rgba(0, 0, 0, 0.05);
  border-top: 1px solid var(--light-gray);
  border-bottom: 1px solid var(--light-gray);
  padding: 8rem 0;
}

.subscribe-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.subscribe p {
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  color: var(--text-gray);
}

.subscribe-form {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
}

input[type="email"] {
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  border-radius: 4px;
  border: none;
  background: var(--accent-gray);
  color: var(--primary-white);
  outline: none;
  width: 100%;
  transition: background 0.3s var(--transition-ease);
}

input[type="email"]::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

input[type="email"]:focus {
  background: rgba(255, 255, 255, 0.25);
}

.privacy-note {
  font-size: 0.8rem;
  color: var(--text-gray);
  margin-top: 1rem;
}

footer {
  padding: 4rem 0;
  background-color: var(--primary-dark-blue);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.footer-logo {
  font-size: 1.25rem;
  font-weight: 700;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: var(--text-gray);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s var(--transition-ease);
}

.footer-links a:hover {
  color: var(--primary-white);
}

.footer-copyright {
  font-size: 0.85rem;
  color: var(--text-gray);
}

/* Animation classes */
.animate {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s var(--transition-ease), transform 0.6s var(--transition-ease);
}

.fade-up.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  header {
    padding: 1rem 0;
  }
  
  .header-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .cta-container {
    flex-direction: column;
    width: 100%;
  }
  
  .primary-button, .secondary-button {
    width: 100%;
  }
  
  .subscribe-form {
    flex-direction: column;
  }
  
  section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  blockquote {
    font-size: 1.25rem;
  }
  
  blockquote::before {
    font-size: 3rem;
    left: -1rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  h1 {
    font-size: 3rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
}
</style>
