// Carousel functionality
let currentSlide = 0;
const totalSlides = 4;

function rotateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    rotateCarousel();
}

// Auto-rotate carousel every 3 seconds
setInterval(nextSlide, 3000);

document.getElementById('submit-btn').addEventListener('click', function() {
    const dateInput = document.getElementById('name-input').value.trim();
    if (dateInput === "70126") {
        // Show the date in the letter
        document.getElementById('date-display').textContent = dateInput;

        // Transition to letter page
        goToLetterPage();
    } else {
        alert('Please enter the correct code.');
    }
});

document.getElementById('back-btn').addEventListener('click', function() {
    goToInputPage();
});

function goToLetterPage() {
    document.getElementById('input-page').classList.remove('active');
    document.getElementById('letter-page').classList.add('active');
    
    // Trigger confetti animation
    setTimeout(() => {
        createConfetti();
    }, 300);
}

function goToInputPage() {
    document.getElementById('letter-page').classList.remove('active');
    document.getElementById('input-page').classList.add('active');
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.backgroundColor = ['#FF69B4', '#87CEEB', '#FFD700', '#FF6347', '#32CD32'][Math.floor(Math.random() * 5)];
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}


