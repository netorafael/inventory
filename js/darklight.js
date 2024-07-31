// No arquivo darklight.js
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-mode');
});

document.getElementById('save-theme').addEventListener('click', () => {
    const selectedTheme = document.getElementById('theme').value;
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(selectedTheme + '-mode');
    localStorage.setItem('theme', selectedTheme);
});
