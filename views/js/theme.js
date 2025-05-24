// Simplified and more robust theme toggle
// Check for user preference on page load
function setThemeFromPreference() {
  if (localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
       window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// Set theme on page load
setThemeFromPreference();

// Toggle theme when button is clicked
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      // Toggle dark class
      document.documentElement.classList.toggle('dark');
      
      // Update localStorage
      if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
    });
  }
});
