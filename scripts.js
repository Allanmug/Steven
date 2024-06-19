document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.querySelector('#order-form');
    
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(orderForm);
        const orderData = Object.fromEntries(formData);
        
        alert(`Order submitted: 
        Name: ${orderData.name}
        Address: ${orderData.address}
        Food Item: ${orderData.food}
        Quantity: ${orderData.quantity}`);
        
        // Add functionality to send the data to the server here
    });
});
