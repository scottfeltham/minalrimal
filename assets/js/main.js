/**
 * Min Al Rimal - Dubai City Anthem 2025
 * Main JavaScript
 */

(function() {
  'use strict';

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Parallax effect on hero (subtle)
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroContent = hero.querySelector('.hero-content');
      if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
      }
    });
  }

  // Dynamic share links
  const currentUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent('Min Al Rimal (From the Sands) – Dubai City Anthem 2025. An unofficial tribute to the People of Dubai.');

  // WhatsApp share
  const whatsappBtn = document.querySelector('.social-btn.whatsapp');
  if (whatsappBtn) {
    whatsappBtn.href = `https://wa.me/?text=${shareText}%20${currentUrl}`;
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
  }

  // LinkedIn share
  const linkedinBtn = document.querySelector('.social-btn.linkedin');
  if (linkedinBtn) {
    linkedinBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
    linkedinBtn.target = '_blank';
    linkedinBtn.rel = 'noopener noreferrer';
  }

  // Twitter/X share
  const twitterBtn = document.querySelector('.social-btn.twitter');
  if (twitterBtn) {
    twitterBtn.href = `https://twitter.com/intent/tweet?text=${shareText}&url=${currentUrl}`;
    twitterBtn.target = '_blank';
    twitterBtn.rel = 'noopener noreferrer';
  }

  // Facebook share
  const facebookBtn = document.querySelector('.social-btn.facebook');
  if (facebookBtn) {
    facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    facebookBtn.target = '_blank';
    facebookBtn.rel = 'noopener noreferrer';
  }

  // Add visible class style
  const style = document.createElement('style');
  style.textContent = `
    .section {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .section.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .hero {
      opacity: 1 !important;
      transform: none !important;
    }
  `;
  document.head.appendChild(style);

  // Console message
  console.log('%c Min Al Rimal ', 'background: #d4af37; color: #0a1628; font-size: 20px; font-weight: bold; padding: 10px;');
  console.log('%c Dubai City Anthem 2025 ', 'background: #0a1628; color: #d4af37; font-size: 14px; padding: 5px;');
  console.log('Created with love by Renji Joseph');

})();
