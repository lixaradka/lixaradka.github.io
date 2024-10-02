let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';


let user = document.getElementById("user");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}`;

user.appendChild(p);

let button = document.querySelector('#lang-button');
let change = document.querySelector('#sublang');

button.addEventListener('click' , function (event) {
	change.classList.add('opened')
})


console.log(button)








