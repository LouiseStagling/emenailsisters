document.addEventListener("DOMContentLoaded", function () {
    loadReviews();
});

function rate(stars) {
    const starElements = document.querySelectorAll('.star');

    starElements.forEach(function (star, index) {
        if (index < stars) {
            star.classList.add('rated');
        } else {
            star.classList.remove('rated');
        }
    });
}

function submitReview() {
    const stars = document.querySelectorAll('.star.rated').length;
    const comment = document.getElementById('comment').value;

    if (stars > 0 && comment.trim() !== '') {
        const review = { stars, comment };
        saveReview(review);
        clearForm();
        loadReviews();
    } else {
        alert('Vänligen ge en stjärnbetyg och skriv ett omdöme.');
    }
}

function saveReview(review) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

function loadReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';

    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    reviews.forEach(function (review) {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `<p>${'*'.repeat(review.stars)} ${review.comment}</p>`;
        reviewsContainer.appendChild(reviewElement);
    });
}

function clearForm() {
    const starElements = document.querySelectorAll('.star');
    starElements.forEach(function (star) {
        star.classList.remove('rated');
    });
    document.getElementById('comment').value = '';
}