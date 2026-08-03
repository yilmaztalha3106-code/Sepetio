/* ==========================================================
   SEPETIO V2 - APP.JS
   Bölüm 1
========================================================== */

/* ------------------------------
   Sayfa Yüklendiğinde
------------------------------ */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }, 1000);

    }

    urunleriGoster();
    sepetRozetiniGuncelle();

});


/* ------------------------------
   Ürünleri Göster
------------------------------ */

function urunleriGoster() {

    const productsGrid = document.getElementById("productsGrid");

    if (!productsGrid || typeof urunler === "undefined") return;

    productsGrid.innerHTML = "";

    urunler.forEach((urun) => {

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


/* ------------------------------
   Sepet
------------------------------ */

let sepet = JSON.parse(localStorage.getItem("sepet")) || [];

document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("add-cart-btn")) return;

    const id = Number(e.target.dataset.id);

    const urun = urunler.find(u => u.id === id);

    if (!urun) return;

    const mevcut = sepet.find(u => u.id === id);

    if (mevcut) {

        mevcut.adet++;

    } else {

        sepet.push({
            ...urun,
            adet: 1
        });

    }

    localStorage.setItem("sepet", JSON.stringify(sepet));

    sepetRozetiniGuncelle();

    alert(`${urun.ad} sepete eklendi 🛒`);

});


function sepetRozetiniGuncelle() {

    const badge = document.querySelector(".cart-count");

    if (!badge) return;

    const toplam = sepet.reduce((toplam, urun) => {

        return toplam + urun.adet;

    }, 0);

    badge.textContent = toplam;

}
/* ==========================================================
   SEPETIO V2 - APP.JS
   Bölüm 2
========================================================== */

/* ------------------------------
   Arama Sistemi
------------------------------ */

const searchForm = document.querySelector(".search-form");

if (searchForm) {

    searchForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const input = searchForm.querySelector("input");

        if (!input) return;

        const aranacak = input.value.trim().toLowerCase();

        const kartlar = document.querySelectorAll(".product-card");

        kartlar.forEach((kart) => {

            const isim = kart.querySelector("h3").textContent.toLowerCase();

            if (isim.includes(aranacak) || aranacak === "") {

                kart.style.display = "block";

            } else {

                kart.style.display = "none";

            }

        });

    });

}


/* ------------------------------
   Favoriler
------------------------------ */

document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("favorite-btn")) return;

    e.target.classList.toggle("active");

});


/* ------------------------------
   Buton Animasyonları
------------------------------ */

document.addEventListener("click", (e) => {

    if (e.target.tagName !== "BUTTON") return;

    e.target.style.transform = "scale(.96)";

    setTimeout(() => {

        e.target.style.transform = "";

    }, 150);

});
