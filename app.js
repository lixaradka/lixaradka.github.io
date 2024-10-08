let toogle = document.querySelector('.lang-toogle');
let popup = document.querySelector('.popup');
let english = document.querySelector('.lang-button')

toogle.addEventListener('click' , function (event) {
	if (popup.classList.contains('disp1') == true) {
		popup.classList.remove('disp1')
	}
	else {
		popup.classList.add('disp1') 
	}
})

popup.addEventListener('click' , function (event) {
	if (popup.classList.contains('disp1') == true) {
		english.classList.add('popup')
		
		popup.classList.remove('popup')
		popup.classList.add('lang-button')
	}
})










