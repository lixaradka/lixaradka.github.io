let eng = document.querySelector('#en')
let homeBtn = document.querySelector('#home')

let images = document.querySelectorAll('.slider-img')
let controlls = document.querySelectorAll('.controlls')
let imgIndex = 0;

function show(index) {
    images[imgIndex].classList.remove('active');
    images[index].classList.add('active');
    imgIndex = index
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imgIndex - 1;

            if(index < 0) {
                index = images.length - 1;
            }
            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imgIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imgIndex)



homeBtn.classList.add('on')
eng.classList.add('on')
console.log(homeBtn)
