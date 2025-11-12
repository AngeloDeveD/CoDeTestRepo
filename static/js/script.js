// плавный скролл по кнопкам в подвале
document.querySelectorAll('.footerRightContent__button[data-href]')
    .forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-href');
            document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
        });
    });

// ====== Телефон в буфер
function copyNumber() {
    navigator.clipboard?.writeText("+74993489396")
        .then(() => alert("Номер скопирован!"))
        .catch(() => alert("Не удалось скопировать номер"));
}

// ====== Мобильное меню
const burger = document.querySelector(".burger");
const mobileMenu = document.getElementById("mobileMenu");
const body = document.body;

function openMenu() { mobileMenu.classList.add("is-open"); body.style.overflow = "hidden"; }
function closeMenu() { mobileMenu.classList.remove("is-open"); body.style.overflow = ""; }

burger?.addEventListener("click", openMenu);
mobileMenu?.addEventListener("click", (e) => {
    if (e.target.matches(".mobileMenu__close")) closeMenu();
});
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu?.classList.contains("is-open")) closeMenu();
});

// ====== Swiper
const slider = new Swiper(".banner__swiper", {
    loop: true,
    speed: 700,
    //autoplay: { delay: 4500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
});

// ====== Fancybox галерея
if (window.Fancybox) {
    Fancybox.bind("[data-fancybox='gallery']", {
        Thumbs: false,
        Toolbar: { display: ["close"] }
    });
}

// ====== Модалка «Заказать звонок»
const modal = document.getElementById("callbackModal");
const openBtns = document.querySelectorAll("[data-open-modal]");

function openModal() { modal.classList.add("is-open"); body.style.overflow = "hidden"; }
function closeModal() { modal.classList.remove("is-open"); body.style.overflow = ""; }

openBtns.forEach(btn => btn.addEventListener("click", openModal));
modal?.addEventListener("click", (e) => {
    if (e.target.matches("[data-close-modal], .modal__overlay")) closeModal();
});
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("is-open")) closeModal();
});

// Простая отправка формы (демо)
document.getElementById("callbackForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Форма отправлена:", data);
    alert("Спасибо! Мы свяжемся с вами.");
    e.currentTarget.reset();
    closeModal();
});

// ====== Яндекс.Карты
function initMap() {
    if (!window.ymaps) return;

    ymaps.ready(() => {
        const map = new ymaps.Map("map", {
            center: [55.763, 37.62], // центр Москвы
            zoom: 14,
            controls: ["zoomControl"]
        });

        const placemark = new ymaps.Placemark([55.763, 37.62], {
            balloonContent: "Депутатская улица, 46"
        }, {
            preset: "islands#redIcon"
        });

        map.geoObjects.add(placemark);
    });
}
initMap();
