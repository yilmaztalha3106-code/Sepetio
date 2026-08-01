let cart = [];

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    document.getElementById("cartCount").innerText = cart.length;

    alert(productName + " sepete eklendi!");
}


function showCart() {

    if(cart.length === 0){
        alert("Sepetiniz boş.");
        return;
    }

    let message = "Sepetiniz:\n\n";

    cart.forEach(item => {
        message += item.name + " - " + item.price + " TL\n";
    });

    alert(message);
}
