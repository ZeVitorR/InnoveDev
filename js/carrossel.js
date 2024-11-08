var click = document.querySelector('.manual-btn')
var cont = 1
var max = 4

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
},5000)

function proximaImg() {
    cont = (cont+1 > max) ? 1 : cont+1

    document.getElementById('radio'+cont).checked = true
}