document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.nav-toggle');
    const navPages = document.querySelector('.nav-pages ul');

    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('active');
        navPages.classList.toggle('active');
    });
});
