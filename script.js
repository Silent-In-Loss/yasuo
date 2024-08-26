const body = document.querySelector('body')
const box = document.querySelector('.box')
const item1 = document.querySelector('h1')
const image = document.querySelector('img')

const name = document.querySelector('.box h1 span')
const surname = document.querySelector('.box h2 span')


// const qu1 = prompt('Укажите цвет фона.')
// const qu2 = prompt('Укажите цвет фона бокса.')
const qu3 = +prompt('Укажите ширину бокса.')
const qu4 = prompt('Укажите ссылку на фотографию.')
const qu5 = prompt('Укжаите ваше имя.')
const qu6 = prompt('Укажите вашу фамилию.')



// body.style.backgroundColor = qu1
// box.style.backgroundColor = qu2
box.style.width = qu3 + 'px'
image.src = qu4
name.innerText = qu5
surname.innerText = qu6
