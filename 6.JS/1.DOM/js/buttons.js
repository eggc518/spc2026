const button1 = document.getElementById('plusBtn');
const button2 = document.getElementById('minusBtn');

button1.addEventListener('click', () => {
    document.getElementById('zero').textContent = parseInt(zero.textContent)+ 1;
});
button2.addEventListener('click', () => {
    document.getElementById('zero').textContent -= 1;
});