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
function addProduct(){

    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;


    if(name === "" || price === ""){
        alert("Lütfen tüm alanları doldurun!");
        return;
    }


    let products = JSON.parse(localStorage.getItem("products")) || [];


    products.push({
        name: name,
        price: price
    });


    localStorage.setItem("products", JSON.stringify(products));


    alert("Ürün başarıyla eklendi!");

    window.location.href = "index.html";
}
function profile(){
    alert("Profil sistemi yakında eklenecek!");
}
