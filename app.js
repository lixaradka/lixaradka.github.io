const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

burger.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Открываем меню
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open'); // Закрываем меню
});


const translations = {
    en: {
        "catalog-link": "Home",
        "about-link": "About Us",
        "services-link": "Services",
        "contacts-link": "Contacts",
        "main-title": "Fashion is what matters",
        "clock1-title": "Reliable and functional watches.",
        "clock2-title": "Swiss quality and style.",
        "clock3-title": "Icon of style and precision.",
        "buy-button1": "Buy",
        "buy-button2": "Buy",
        "buy-button3": "Buy",
    },
    ru: {
        "catalog-link": "Главная",
        "about-link": "О нас",
        "services-link": "Услуги",
        "contacts-link": "Контакты",
        "main-title": "Мода - вот что важно",
        "clock1-title": "Надежные и функциональные часы.",
        "clock2-title": "Швейцарское качество и стиль.",
        "clock3-title": "Икона стиля и точности.",
        "buy-button1": "Купить",
        "buy-button2": "Купить",
        "buy-button3": "Купить",
    }
};

// Функция для обновления текста на странице
function updateText(language) {
    const lang = translations[language];
    document.getElementById('main-title').textContent = lang["main-title"];
    document.getElementById('catalog-link').textContent = lang["catalog-link"];
    document.getElementById('about-link').textContent = lang["about-link"];
    document.getElementById('services-link').textContent = lang["services-link"];
    document.getElementById('contacts-link').textContent = lang["contacts-link"];
    document.querySelectorAll('.catalog-description').forEach((el) => {
        const id = el.getAttribute('id');
        el.textContent = lang[id] || el.textContent;
    });
    document.getElementById('buy-button1').textContent = lang["buy-button1"];
    document.getElementById('buy-button2').textContent = lang["buy-button2"];
    document.getElementById('buy-button3').textContent = lang["buy-button3"];
}

// Устанавливаем начальный язык
updateText('en');

document.getElementById('language-select').addEventListener('change', function() {
    updateText(this.value);
});

window.onload = function() {
    const mainTitle = document.getElementById('main-title');
    const contentTitle = mainTitle.parentElement;
    contentTitle.classList.add('show');
};


const items = document.querySelectorAll('.catalog-item');

const options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.1 
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
};

const observer = new IntersectionObserver(callback, options);
items.forEach(item => {
    observer.observe(item); 
});