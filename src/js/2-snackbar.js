import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const elements = {
    form: document.querySelector('.form'),
    delay: document.querySelector('.input'),
    button: document.querySelector('.button')
};


elements.form.addEventListener('submit', handlerClick)

function handlerClick(evt) {
    evt.preventDefault()
    const delay = parseInt(elements.delay.value);
    const point = document.querySelector('.input2:checked')

    if(isNaN(delay) || !point) {
        return promise
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           if(point.value  === 'fulfilled') {
              resolve(`✅ Fulfilled promise in ${delay}ms`)
           } else {
              reject(`❌ Rejected promise in ${delay}ms`)
           }
           }, delay)
    })

promise.then((message) => {
    iziToast.success({message})
}).catch((message) => {
    iziToast.error({message})
})
}