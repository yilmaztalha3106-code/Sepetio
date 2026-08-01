let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Ürünü sepete ekleme
function addToCart(productName, price){

    cart.push({
        name: productName,
        price: price
    });


    localStorage.setItem("cart", JSON.stringify(cart));


    updateCartCount();

    alert(productName + " sepete eklendi!");
}



// Sepet sayısını güncelleme
function updateCartCount(){

    let count = document.getElementById("cartCount");

    if(count){
        count.innerText = cart.length;
    }

}


// Sepeti gösterme
function loadCart(){

    let area = document.getElementById("cartArea");


    if(!area) return;


    if(cart.length === 0){

        area.innerHTML = "<h3>Sepetiniz boş</h3>";
        return;

    }


    area.innerHTML = "";


    cart.forEach((item,index)=>{

        area.innerHTML += `

        <div class="product">

        <h3>${item.name}</h3>

        <p>${item.price} TL</p>

        <button onclick="removeCart(${index})">
        Sil
        </button>

        </div>

        `;

    });

}



// Sepetten ürün silme
function removeCart(index){

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

    updateCartCount();

}



// Arama sistemi
function searchProduct(){

    let text = document
    .getElementById("searchInput")
    .value
    .toLowerCase();


    let products = document.querySelectorAll(".product");


    products.forEach(product=>{

        if(product.innerText.toLowerCase().includes(text)){

            product.style.display="block";

        }

        else{

            product.style.display="none";

        }

    });

}



// Sayfa açılınca çalışacaklar
updateCartCount();

loadCart();
