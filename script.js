document.addEventListener('DOMContentLoaded', () => {
    const experienceBoxes = document.querySelectorAll('.experience-box');

    experienceBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Close all boxes
            experienceBoxes.forEach(b => {
                if (b !== box) {
                    b.classList.remove('open');
                }
            });
            // Toggle the clicked box
            box.classList.toggle('open');
        });
    });
});