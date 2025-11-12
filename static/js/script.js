const copyNumber = () => {
    try {
        navigator.clipboard.writeText("+74993489396");
        console.log("Номер скопирован!");
        alert("Номер скопирован!");
    } catch (err) {
        console.error("Ошибка копирования: ", err);
        alert("Ошибка копирования!");
    }
}

const callMe = () => {
    console.log("Заказать звонок");
    alert("Заказать звонок");
}

new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});