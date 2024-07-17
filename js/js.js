let $ = document

let menuBtn = $.querySelector('.menu-btn')
// let menuBar = $.querySelector('.menu-bar')
let footerBtn = $.querySelector('.app-footer-btn')
let footerMenu = $.querySelector('.app-footer')
let cover = $.querySelector('.cover')


menuBtn.addEventListener('click',()=>{
    footerMenu.classList.add('app-footer--active')
    cover.classList.add('cover__active')
})
footerBtn.addEventListener('click',()=>{
    footerMenu.classList.add('app-footer--active')
    cover.classList.add('cover__active')
})
// menuBtn.addEventListener('click',()=>{
//     menuBar.classList.add('menu-bar__active')
//     cover.classList.add('cover__active')
// })
cover.addEventListener('click',()=>{
    footerMenu.classList.remove('app-footer--active')
    // menuBar.classList.remove('menu-bar__active')
    cover.classList.remove('cover__active')
})
