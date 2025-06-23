// Enhanced theme toggle for vaporwave color scheme
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
  
  // Fix: Select the correct SVG paths using more specific selectors
  const moonPath = toggleButton.querySelector('svg path.hidden.dark\\:block');
  const sunPath = toggleButton.querySelector('svg path.dark\\:hidden');
  
  if (!moonPath || !sunPath) {
    console.error('Theme toggle icons not found');
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

// Set theme on page load
document.addEventListener('DOMContentLoaded', () => {
  // Add debug logging
  console.log('DOM loaded, setting theme preference');
  setThemeFromPreference();
  
  const toggleButton = document.getElementById('theme-toggle');
  
  if (toggleButton) {
    console.log('Theme toggle button found, attaching event listener');
    toggleButton.addEventListener('click', () => {
      console.log('Theme toggle clicked');
      // Toggle dark class
      const isDarkMode = document.documentElement.classList.toggle('dark');
      console.log('Dark mode:', isDarkMode);
      
      // Update localStorage
      localStorage.theme = isDarkMode ? 'dark' : 'light';
      
      // Update icon
      updateThemeIcon(isDarkMode);
      
      // Add a subtle animation effect on toggle
      document.body.classList.add('transition-colors');
      setTimeout(() => {
        document.body.classList.remove('transition-colors');
      }, 300);
    });
  } else {
    console.error('Theme toggle button not found');
  }
});

// Set theme immediately to prevent flash of wrong theme
setThemeFromPreference();
