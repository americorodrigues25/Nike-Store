AOS.init();

const wrapper = document.querySelector('.sliderwrapper');
const menuItems = document.querySelectorAll('.menuItem');


const products = [
    {
        id: 1,
        title: "Air Force",
        price: 799,
        colors: [
            {
                code: "black",
                img: "./assets/img/air.png",
            },
            {
                code: "darkblue",
                img: "./assets/img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 999,
        colors: [
            {
                code: "lightgray",
                img: "./assets/img/jordan.png",
            },
            {
                code: "green",
                img: "./assets/img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 899,
        colors: [
            {
                code: "lightgray",
                img: "./assets/img/blazer.png",
            },
            {
                code: "green",
                img: "./assets/img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 799,
        colors: [
            {
                code: "black",
                img: "./assets/img/crater.png",
            },
            {
                code: "lightgray",
                img: "./assets/img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 699,
        colors: [
            {
                code: "gray",
                img: "./assets/img/hippie.png",
            },
            {
                code: "black",
                img: "./assets/img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProjectImg = document.querySelector('.productImg');
const currentProjectTitle = document.querySelector('.productTitle');
const currentProjectPrice = document.querySelector('.productPrice');
const currentProjectColors = document.querySelectorAll('.color');
const currentProjectSizes = document.querySelectorAll('.size');

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {

        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index]

        currentProjectTitle.textContent = choosenProduct.title;
        currentProjectPrice.textContent = '$' + choosenProduct.price;
        currentProjectImg.src = choosenProduct.colors[0].img;

        currentProjectColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProjectColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProjectImg.src = choosenProduct.colors[index].img
    });
});

currentProjectSizes.forEach((size, index) => {
    size.addEventListener('click', () => {
        currentProjectSizes.forEach(size => {
            size.style.backgroundColor = 'white';
            size.style.color = 'black';
        });
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    });
});

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
    payment.style.display = 'flex';
});

close.addEventListener('click', () => {
    payment.style.display = 'none';
});

document.addEventListener('click', function (event) {
    if (!payment.contains(event.target) && !productButton.contains(event.target) && payment.style.display === 'flex') {
        payment.style.display = 'none';
    }
});
