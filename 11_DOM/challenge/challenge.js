// alert('¡Bienvenido, ahora pide tu PIZZA!')

// input
let uno = document.getElementById('uno')
let dos = document.getElementById('dos')
let tres = document.getElementById('tres')
let cuatro = document.getElementById('cuatro')
// card
let respuesta = document.getElementById('respuesta')
let respuestatlf = document.getElementById('tlf')
let respuestadireccion = document.getElementById('direccion')
let respuestanombre = document.getElementById('nombre')
let respuestapiña = document.getElementById('piña')
// imagenes
let sinpin = document.getElementById('sinpin')
let conpin = document.getElementById('conpin')
// boton
let boton = document.getElementById('boton')

// funcion
const cambio = () => {
    respuestatlf.innerHTML = 'Telefono: ' + uno.value
    respuestadireccion.innerHTML = 'Direccion: ' + dos.value
    respuestanombre.innerHTML = 'Nombre: ' + tres.value
    // respuestapiña.innerHTML = 'Piña: ' + cuatro.value

    respuesta.classList.remove('none')

    let pizzas = cuatro.value
    let pida = pizzas.toLowerCase()

    if (pida === 'si') {
        respuestapiña.innerHTML = '🙃'   
        conpin.classList.remove('none')
        sinpin.classList.add('none')

        // respuestapiña.innerHTML =   
        // sinpin.src = 'https://www.recetasdesbieta.com/wp-content/uploads/2018/09/Como-hacer-pizza-casera-rapida-con-masa-de-pizza-sin-repos-1-860x380.jpg'
    } else if (pida === 'no') {
        respuestapiña.innerHTML = '🥰'
        conpin.classList.add('none')
        sinpin.classList.remove('none')
    } else {
        respuestapiña.innerHTML = 'sigue intentando 😃'
        conpin.classList.add('none')
        sinpin.classList.add('none')
            }



}
boton.addEventListener('click', cambio)


// sinpin.src = 'https://www.recetasdesbieta.com/wp-content/uploads/2018/09/Como-hacer-pizza-casera-rapida-con-masa-de-pizza-sin-repos-1-860x380.jpg'