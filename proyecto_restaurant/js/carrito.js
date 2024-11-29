let cart = [];  

function addToCart(productName, productPrice) {
    let product = {
        name: productName,
        price: productPrice
    };
    cart.push(product);
    updateCart();  
}


function updateCart() {
    let cartItemsModal = document.getElementById("cart-items-modal");
    let totalPrice = 0;


    cartItemsModal.innerHTML = "";


    cart.forEach((item, index) => {
        let cartItem = document.createElement("div");
        cartItem.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-3");

        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong> - $${item.price.toFixed(2)}
            </div>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItemsModal.appendChild(cartItem);

        totalPrice += item.price;
    });


    document.getElementById("cart-total").textContent = totalPrice.toFixed(2);
}


function removeFromCart(index) {
    cart.splice(index, 1);  
    updateCart();  
}

// Función para mostrar el formulario de pago
function showPaymentForm() {
    let paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    paymentModal.show();
}


document.getElementById("payment-form")?.addEventListener("submit", function(event) {
    event.preventDefault();  


    let name = document.getElementById("name").value;
    let cardNumber = document.getElementById("card-number").value;
    let expiryDate = document.getElementById("expiry-date").value;
    let securityCode = document.getElementById("security-code").value;

    if (name && cardNumber && expiryDate && securityCode) {
        
        alert(`Pago exitoso por un total de $${document.getElementById("cart-total").textContent}`);
        
        
        cart = [];
        updateCart();
        

        let paymentModal = bootstrap.Modal.getInstance(document.getElementById('paymentModal'));
        paymentModal.hide();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
