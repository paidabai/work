window.onload = function(){
    window.scrollBy(0,140);
}

let animate1 = document.getElementById('animate1')
let animate2 = document.getElementById('animate2')
let top_details = document.getElementById('top-details')

setInterval(() => {
    if (window.pageYOffset > 500) {
        animate1.classList.add('msa-animated')
    }else {
        animate1.classList.remove('msa-animated')
    }
}, 300);

setInterval(() => {
    if (window.pageYOffset > 2000) {
        animate2.classList.add('msa-animated')
    }else {
        animate2.classList.remove('msa-animated')
    }
}, 300);

setInterval(() => {
    if (window.pageYOffset > 200) {
        top_details.classList.add('show')
    }else {
        top_details.classList.remove('show')
    }
}, 100);