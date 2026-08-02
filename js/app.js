/* ==========================================================
   SEPETIO V2
   APP.JS
   CORE SYSTEM
========================================================== */

"use strict";

/* ==========================================================
   CORE
========================================================== */

const Sepetio = {

    version: "2.0.0",

    initialized: false,

    elements: {},

    settings: {

        darkMode: false,

        animations: true,

        toastDuration: 3000

    },

    init() {

        if (this.initialized) return;

        this.cache();

        this.loader();

        this.events();

        this.scrollEffects();

        this.restoreTheme();

        this.initialized = true;

        console.log("Sepetio v2 Başlatıldı");

    },

    cache() {

        this.elements.loader = document.getElementById("loader");

        this.elements.header = document.querySelector(".header");

        this.elements.search = document.querySelector(".search-form input");

        this.elements.body = document.body;

    },

/* ==========================================================
   LOADER
========================================================== */

    loader() {

        window.addEventListener("load", () => {

            if (!this.elements.loader) return;

            this.elements.loader.style.opacity = "0";

            setTimeout(() => {

                this.elements.loader.style.display = "none";

            }, 500);

        });

    },

/* ==========================================================
   EVENTS
========================================================== */

    events() {

        window.addEventListener("scroll", () => {

            this.headerShadow();

        });

    },

/* ==========================================================
   HEADER EFFECT
========================================================== */

    headerShadow() {

        if (!this.elements.header) return;

        if (window.scrollY > 40) {

            this.elements.header.style.boxShadow =
                "0 12px 30px rgba(0,0,0,.08)";

        }

        else {

            this.elements.header.style.boxShadow =
                "";

        }

    },

/* ==========================================================
   TOAST
========================================================== */

    toast(message = "", type = "success") {

        const toast = document.createElement("div");

        toast.className = `toast ${type}`;

        toast.innerHTML = `

            <span>${message}</span>

        `;

        document.body.appendChild(toast);

        requestAnimationFrame(() => {

            toast.classList.add("show");

        });

        setTimeout(() => {

            toast.classList.remove("show");

            setTimeout(() => {

                toast.remove();

            }, 400);

        }, this.settings.toastDuration);

    },

/* ==========================================================
   MODAL
========================================================== */

    openModal(id) {

        const modal = document.getElementById(id);

        if (!modal) return;

        modal.classList.add("active");

    },

    closeModal(id) {

        const modal = document.getElementById(id);

        if (!modal) return;

        modal.classList.remove("active");

    },

/* ==========================================================
   DARK MODE
========================================================== */

    toggleDarkMode() {

        this.settings.darkMode = !this.settings.darkMode;

        document.body.classList.toggle("dark");

        localStorage.setItem(

            "sepetio-theme",

            this.settings.darkMode ? "dark" : "light"

        );

    },

    restoreTheme() {

        const saved = localStorage.getItem("sepetio-theme");

        if (saved === "dark") {

            this.settings.darkMode = true;

            document.body.classList.add("dark");

        }

    },

/* ==========================================================
   SCROLL
========================================================== */

    scrollEffects() {

        document.querySelectorAll("[data-scroll]").forEach(item => {

            item.style.opacity = 0;

        });

    },

/* ==========================================================
   SEARCH
========================================================== */

    search(keyword) {

        console.log("Aranıyor:", keyword);

    }

};

/* ==========================================================
   HELPERS
========================================================== */

const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector);

function random(min, max) {

    return Math.floor(

        Math.random() * (max - min + 1)

    ) + min;

}

function formatPrice(price) {

    return new Intl.NumberFormat(

        "tr-TR",

        {

            style: "currency",

            currency: "TRY"

        }

    ).format(price);

}

/* ==========================================================
   START
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        Sepetio.init();

    }

);
