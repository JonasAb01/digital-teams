//formulario para criar um novo grupo
new_team .onclick = () => {
    formulario.classList.add('show')
    layer.classList.add('overlay_show')
    const card = document.createElement('li')
    card,appendChild('card_team')
}
exit_form .onclick = () => {
    formulario.classList.remove('show')
    layer.classList.remove("show")
}
layer .onclick = () => {
    formulario.classList.remove('show')
    layer.classList.remove('show')
}
//------------------------------------
