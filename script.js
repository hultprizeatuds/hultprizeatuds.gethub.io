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
