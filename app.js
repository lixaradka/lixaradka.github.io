let button = document.querySelector('#lang-button');
let popup = document.querySelector('.popup');
let disp = document.querySelector('disp')

button.addEventListener('click' , function (event) {
	if (popup.classList.contains('disp') == true) {
		popup.classList.remove('disp')
	}
	else {
		popup.classList.add('disp') 
	}
})

popup.addEventListener('click') , function(event) {
	if (popup.classList.contains('popup disp') == true) {
	popup.classList.remove('popup')
	}
}








