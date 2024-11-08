let btn = document.querySelector('#btn')
let title = document.querySelector('#title')
let roleta = []

for(i = 0; i <= 100; i++){
    roleta.push(i)
}

btn.addEventListener('click', ()=> {
    title.innerHTML = roleta[Math.floor(Math.random() * roleta.length)]
})