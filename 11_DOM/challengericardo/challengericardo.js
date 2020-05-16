//Inputs
let preguntaNombre = document.getElementById('preguntaNombre')
let preguntaDireccion = document.getElementById('preguntaDireccion')
let preguntaTelefono = document.getElementById('preguntaTelefono')
let preguntaPizza = document.getElementById('preguntaPizza')
//Card-- respuetas
let textoNombre = document.getElementById('textoNombre')
let textoDireccion = document.getElementById('textoDireccion')
let textoTelefono = document.getElementById('textoTelefono')
let textoPizza = document.getElementById('textoPizza')
//Boton
let boton = document.getElementById('botonOrdenar')
// card
let card = document.getElementById('card')

const ordenar = () => {
    textoNombre.innerHTML = 'Nombre: ' + preguntaNombre.value
    textoDireccion.innerHTML = 'Direccion : ' + preguntaDireccion.value
    textoTelefono.innerHTML = 'Telefono: ' + preguntaTelefono.value
    // textoPizza.innerHTML =  'Piña o no: ' +  preguntaPizza.value
    // aparece la card 
    card.classList.remove('none')

    let pizzareal = preguntaPizza.value
    let compararpizza = pizzareal.toLowerCase()

    if(compararpizza === 'si'){
        textoPizza.innerHTML = '🙄'
        let conpin = document.getElementById('conpin')
        
        conpin.classList.add('none')
    }else if (compararpizza === 'no'){
        textoPizza.innerHTML = '🤩'
        let sinpin = document.getElementById('sinpin')
        
        sinpin.classList.add('none')
    }else {
        textoPizza.innerHTML = 'datos incorrectos'
    }
} 
boton.addEventListener('click', ordenar)