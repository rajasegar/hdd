console.log('hello');

const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
if (
  localStorage.hddTheme === 'dark' ||
  (!('hddTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  toggleDarkModeBtn.setAttribute('checked', 'true');
}

toggleDarkModeBtn.addEventListener('click', (ev) => {
  if (ev.target.checked) {
    localStorage.hddTheme = 'dark';
  } else {
    localStorage.hddTheme = 'light';
  }
  document.querySelector('html').classList.toggle('dark');
});

const toggleMobileMenuBtn = document.getElementById('toggle-mobile-menu');
toggleMobileMenuBtn.addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});
