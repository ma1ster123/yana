let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');

    const screenWidth = window.innerWidth - noButton.offsetWidth;
    const screenHeight = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * screenWidth;
    const randomY = Math.random() * screenHeight;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}