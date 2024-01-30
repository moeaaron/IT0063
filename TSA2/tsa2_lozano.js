document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.days-container button');
    const box = document.getElementById('animated-box');

    // Set initial button colors
    buttons.forEach(button => {
        const day = button.textContent.trim();
        const color = getButtonColor(day);
        button.style.backgroundColor = color;
        button.addEventListener('click', () => animateBox(day, color));
    });
});

function animateBox(day, newColor) {
    const box = document.getElementById('animated-box');

    // Set box properties
    box.style.borderColor = newColor; // Set border color
    box.style.backgroundColor = '#ffffff'; // Set to white color before going down
    box.style.transform = 'translateY(-150px)'; // Move box above

    // Reset after a delay
    setTimeout(() => {
        box.style.transform = 'translateY(0)';
    }, 500); // Wait for half of the animation time

    // Change color to original after reaching the bottom
    setTimeout(() => {
        box.style.backgroundColor = newColor; // Set to original color
    }, 1000);
}

function getButtonColor(day) {
    // Set fixed color for each day
    const colors = {
        Monday: '#e74c3c',
        Tuesday: '#27ae60',
        Wednesday: '#f39c12',
        Thursday: '#2980b9',
        Friday: '#8e44ad',
        Saturday: '#d35400',
        Sunday: '#2c3e50'
    };
    return colors[day];
}
