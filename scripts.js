document.addEventListener('DOMContentLoaded', (event) => {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('#gallery img');
    const totalImages = images.length;

    function showNextImage() {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        images[currentImageIndex].style.display = 'block';
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds

    // Navigation scroll effect
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    const bookingMessage = document.getElementById('booking-message');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const hotel = document.getElementById('hotel').value;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const guests = document.getElementById('guests').value;

        if (!hotel || !checkin || !checkout || !guests) {
            showMessage('Please fill out all fields', 'error');
        } else {
            showMessage(`Booking confirmed at ${hotel}! Check-in: ${checkin}, Check-out: ${checkout}, Guests: ${guests}`, 'success');
        }
    });

    function showMessage(message, type) {
        bookingMessage.textContent = message;
        bookingMessage.className = type;
        bookingMessage.style.display = 'block';
    }
});
