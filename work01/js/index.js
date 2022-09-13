let wear = document.getElementById('wear')
let popular = document.getElementById('popular')
let product_popular = document.getElementById('product_popular')
let product_wear = document.getElementById('product_wear')

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