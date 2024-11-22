const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const cards = Array.from(track.children);
const cardWidth = cards[0].getBoundingClientRect().width;

let currentIndex = 0;


cards.forEach((card, index) => {
    card.style.left = cardWidth * index + 'px';
});


const moveToCard = (index) => {
    track.style.transform = 'translateX(-' + cardWidth * index + 'px)';
    currentIndex = index;
};

// Move to the next card
nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        moveToCard(currentIndex + 1);
    }
});


prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        moveToCard(currentIndex - 1);
    }
});
