// Pages
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Show the clicked section and hide others
        document.querySelectorAll('.all-pages main').forEach(main => {
            main.style.display = 'none';
        });
        targetElement.style.display = 'block';

        // Scroll to the top of the clicked section
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// Pages End
