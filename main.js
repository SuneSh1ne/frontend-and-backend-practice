const toggleButton = document.getElementById('theme-toggle');
if (toggleButton) {
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        toggleButton.textContent = 'Светлая тема';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            toggleButton.textContent = 'Светлая тема';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = 'Тёмная тема';
            localStorage.setItem('theme', 'light');
        }
    });
}