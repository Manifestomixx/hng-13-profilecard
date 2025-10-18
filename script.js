// Professional Profile Card JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Update time display
  function updateTime() {
    const timeEl = document.getElementById("user-time");
    if (timeEl) {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      const dateString = now.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      timeEl.textContent = `${timeString} - ${dateString}`;
    }
  }
  
  // Initialize time display
  updateTime();
  setInterval(updateTime, 1000);
  
  // Add smooth scroll behavior for better UX
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Add loading animation
  const profileCard = document.querySelector('.profile-card');
  if (profileCard) {
    profileCard.style.opacity = '0';
    profileCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      profileCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      profileCard.style.opacity = '1';
      profileCard.style.transform = 'translateY(0)';
    }, 100);
  }
  
  // Add contact button functionality with fallback
  const contactBtn = document.querySelector('.contact-btn');
  if (contactBtn) {
    contactBtn.addEventListener('click', function(e) {
      console.log('Contact button clicked - opening email client');
      
      // Ensure the mailto link works by programmatically triggering it
      const href = this.getAttribute('href');
      if (href && href.startsWith('mailto:')) {
        // Try to open the email client
        try {
          window.location.href = href;
        } catch (error) {
          console.log('Error opening email client:', error);
          // Fallback: copy email to clipboard
          navigator.clipboard.writeText('manifestomixx@gmail.com').then(() => {
            alert('Email copied to clipboard: manifestomixx@gmail.com');
          });
        }
      }
    });
  }
  
  // Add skill tag hover effects
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Add social link analytics tracking (placeholder)
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // In a real application, you would track this event
      console.log(`Social link clicked: ${this.href}`);
    });
    
    // Add tooltip functionality
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Add keyboard navigation support
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const focusedElement = document.activeElement;
      if (focusedElement.classList.contains('contact-btn') || 
          focusedElement.classList.contains('social-link')) {
        focusedElement.click();
      }
    }
  });
  
  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      }
    });
  }, observerOptions);
  
  // Observe sections for scroll animations
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });
});

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .profile-card section {
    opacity: 0;
    animation-delay: 0.1s;
  }
`;
document.head.appendChild(style);