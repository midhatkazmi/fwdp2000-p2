const button = document.getElementById('Nav-Btn');
const nav = document.getElementById('Nav');

button.addEventListener('click', function() {
    if (nav.style.display === 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});