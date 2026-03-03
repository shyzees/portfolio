let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

// abrir menu
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

// fechar clicando no X
menu.querySelector('.btn-fechar').addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// fechar clicando no overlay
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// fechar ao clicar em qualquer link
document.querySelectorAll('#menu-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu')
    })
})