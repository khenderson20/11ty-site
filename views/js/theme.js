// Enhanced theme toggle for muted color scheme
// Check for user preference on page load
function setThemeFromPreference() {
  if (localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
       window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    updateThemeIcon(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeIcon(false);
  }
}

// Update the theme icon based on current theme
function updateThemeIcon(isDark) {
  const toggleButton = document.getElementById('theme-toggle');
  if (!toggleButton) return;

  // Select the correct SVG paths
  const moonPath = toggleButton.querySelector('svg path.hidden.dark\\:block');
  const sunPath = toggleButton.querySelector('svg path.dark\\:hidden');

  if (!moonPath || !sunPath) {
    // Fallback: try different selectors
    const allPaths = toggleButton.querySelectorAll('svg path');
    if (allPaths.length >= 2) {
      const [sunPath, moonPath] = allPaths;
      if (isDark) {
        moonPath.classList.remove('hidden');
        sunPath.classList.add('hidden');
      } else {
        moonPath.classList.add('hidden');
        sunPath.classList.remove('hidden');
      }
    }
    return;
  }

  if (isDark) {
    moonPath.classList.remove('hidden');
    sunPath.classList.add('hidden');
  } else {
    moonPath.classList.add('hidden');
    sunPath.classList.remove('hidden');
  }
}

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      } else {
        mobileMenu.style.maxHeight = '0px';
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300);
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!mobileMenuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.style.maxHeight = '0px';
          setTimeout(() => {
            mobileMenu.classList.add('hidden');
          }, 300);
        }
      }
    });
  }
}

// Smooth scroll functionality
function initializeSmoothScroll() {
  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Enhanced animations and interactions
function initializeAnimations() {
  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements that should fade in
  document.querySelectorAll('.card, .blog-post-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}

// Set theme on page load
document.addEventListener('DOMContentLoaded', () => {
  setThemeFromPreference();
  initializeMobileMenu();
  initializeSmoothScroll();

  // Delay animations slightly for better performance
  setTimeout(initializeAnimations, 100);

  const toggleButton = document.getElementById('theme-toggle');

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      // Toggle dark class with smooth transition
      const isDarkMode = document.documentElement.classList.toggle('dark');

      // Update localStorage
      localStorage.theme = isDarkMode ? 'dark' : 'light';

      // Update icon
      updateThemeIcon(isDarkMode);

      // Add subtle scale animation to the toggle button
      toggleButton.style.transform = 'scale(0.95)';
      setTimeout(() => {
        toggleButton.style.transform = 'scale(1)';
      }, 150);
    });
  }
});

// Set theme immediately to prevent flash of wrong theme
setThemeFromPreference();

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!('theme' in localStorage)) {
    if (e.matches) {
      document.documentElement.classList.add('dark');
      updateThemeIcon(true);
    } else {
      document.documentElement.classList.remove('dark');
      updateThemeIcon(false);
    }
  }
});
