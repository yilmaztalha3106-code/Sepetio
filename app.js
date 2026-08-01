// Sepetio V2

let cartCount = 0;

const cartBtn = document.getElementById("cartBtn");

const cartItems = document.getElementById("cartItems");

const addButtons = document.querySelectorAll(".product button");

addButtons.forEach((button) => {

    button.addEventListener("click", () => {
const product = button.closest(".product");
const productName = product.querySelector("h3").textContent;

const item = document.createElement("li");
item.textContent = productName;

if (cartItems.children.length === 1 &&
    cartItems.children[0].textContent === "Sepetiniz boş.") {
    cartItems.innerHTML = "";
}

cartItems.appendChild(item);
        cartCount++;

        cartBtn.textContent = "🛒 " + cartCount;

        button.textContent = "✅ Sepete Eklendi";

        button.disabled = true;

    });

});
const searchInput = document.getElementById("searchInput");

const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", () => {

    const text = searchInput.value.toLowerCase();

    products.forEach(product => {

        const name = product.querySelector("h3").textContent.toLowerCase();

        if(name.includes(text)){
            product.style.display = "block";
        }else{
            product.style.display = "none";
        }

    });

});
const favorites = document.querySelectorAll(".favorite");

favorites.forEach(btn => {

    btn.addEventListener("click", () => {

        if(btn.textContent === "🤍"){
            btn.textContent = "❤️";
        }else{
            btn.textContent = "🤍";
        }

    });

});
const detailButtons = document.querySelectorAll(".detailBtn");

detailButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Ürün detay sayfası yakında eklenecek.");

    });

}); 
// Sepet Paneli
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");

cartBtn.addEventListener("click", () => {
    cartPanel.classList.add("open");
});

closeCart.addEventListener("click", () => {
    cartPanel.classList.remove("open");
});
