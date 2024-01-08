const toggleSwitch = document.getElementById('modeSwitch');

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.toggle(currentTheme);
  if (currentTheme === 'dark-mode') {
    toggleSwitch.checked = true;
  }
}

// Switch theme dynamically
toggleSwitch.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
  }
});
