const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = item.src;
        captionText.textContent = item.alt;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});
