// Smooth scroll to the order form
function scrollToOrderForm() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Your order has been placed successfully!');
});
