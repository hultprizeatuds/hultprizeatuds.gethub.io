// JavaScript to toggle event details
function toggleEventDetails(eventElement) {
    const details = eventElement.querySelector('.event-details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// Ensure event details toggle works on page load
document.querySelectorAll('.event-item').forEach(item => {
    item.addEventListener('click', () => toggleEventDetails(item));
});


// script.js

document.querySelector('.whatsapp-btn').addEventListener('click', function(event) {
    if (!confirm('Are you sure you want to join the WhatsApp group?')) {
        event.preventDefault(); // Prevents the link from opening if the user cancels
    }
});
