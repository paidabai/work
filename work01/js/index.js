let wear = document.getElementById('wear')
let popular = document.getElementById('popular')
let product_popular = document.getElementById('product_popular')
let product_wear = document.getElementById('product_wear')
let tool_bar = document.getElementById('tool-bar')
let gotop = document.getElementById('gotop')

wear.onmouseover = () => {
    wear.classList.add('click')
    popular.classList.remove('click')
    product_wear.classList.remove('vision')
    product_popular.classList.add('vision')
}

popular.onmouseover = () => {
    popular.classList.add('click')
    wear.classList.remove('click')
    product_wear.classList.add('vision')
    product_popular.classList.remove('vision')
}

setInterval(() => {
    if (window.pageYOffset > 300) {
        tool_bar.classList.add('gun')
        gotop.classList.add('go')
    }else {
        tool_bar.classList.remove('gun')
        gotop.classList.remove('go')
    }
}, 300);
