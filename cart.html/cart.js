document.addEventListener('DOMContentLoaded', () => {
    // Get all plus and minus buttons
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
    const deleteButtons = document.querySelectorAll('.fa-trash-alt');
    const likeButtons = document.querySelectorAll('.fa-heart');
    const totalPriceElement = document.querySelector('.total');

    // Update total price function
    const updateTotalPrice = () => {
        let total = 0;
        const unitPrices = document.querySelectorAll('.unit-price');
        const quantities = document.querySelectorAll('.quantity');

        unitPrices.forEach((price, index) => {
            const unitPrice = parseFloat(price.textContent.replace('$', ''));
            const quantity = parseInt(quantities[index].textContent);
            total += unitPrice * quantity;
        });

        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    };

    // Increment quantity
    plusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });
    });

    // Decrement quantity
    minusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    // Delete item
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const cardBody = button.closest('.card-body');
            cardBody.remove();
            updateTotalPrice();
           
        });
    });

    // Like item
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
            button.style.color = button.classList.contains('liked') ? 'red' : 'black';
        });
    });
});