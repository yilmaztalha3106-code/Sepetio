/* ==========================================================
   SEPETIO V2 - APP.JS
   Temel Sistemler
========================================================== */


// Sayfa yüklenme kontrolü

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },500);

        },1000);

    }

});


// Arama sistemi

const searchForm = document.querySelector(".search-form");

if(searchForm){

    searchForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const input = searchForm.querySelector("input");

        if(input.value.trim() !== ""){
/* ==========================================================
   Ürünleri Otomatik Oluştur
========================================================== */

const productsGrid = document.getElementById("productsGrid");

if (productsGrid && typeof urunler !== "undefined") {

    productsGrid.innerHTML = "";

    urunler.forEach(urun => {

        productsGrid.innerHTML += `
            <div class="product-card">

                <img src="${urun.resim}" alt="${urun.ad}">

                <h3>${urun.ad}</h3>

                <p class="price">
                    ${urun.fiyat.toLocaleString("tr-TR")} TL
                </p>

                <button
                    class="add-cart-btn"
                    data-id="${urun.id}">
                    🛒 Sepete Ekle
                </button>

            </div>
        `;

    });

}
            alert(
                `"${input.value}" için arama yapılıyor...`
            );

        }

    });

}


// Sepete ekleme temel sistemi

const cartButtons = document.querySelectorAll(".add-cart-btn");

cartButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        alert("Ürün sepete eklendi 🛒");

    });

});


// Favori butonları

const favoriteButtons = document.querySelectorAll(".favorite-btn");


favoriteButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.classList.toggle("active");

    });

});


// Genel buton animasyonu

const buttons = document.querySelectorAll("button");


buttons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.style.transform="scale(.96)";

        setTimeout(()=>{

            btn.style.transform="";

        },150);

    });

});
