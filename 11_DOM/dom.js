let titulo = document.getElementById('titulo')
let parrafo = document.getElementById('parrafo')
let button = document.getElementById ('boton')
let texto = document.getElementById('texto')
let respuesta = document.getElementById ('respuesta')


// console.log(titulo);
// console.log(parrafo);
// para verificar que este funcionando adecuadamente

// cambiar desde js
// titulo.innerHTML = 'titulo cambiado'
// parrafo.innerHTML = 'parrafo cambiado'

const cambio = () => {
  titulo.innerHTML = 'titulo cambiado'
  parrafo.innerHTML = 'parrafo cambiado'
  respuesta.innerHTML = texto.value 
}
button.addEventListener  ('click', cambio)

// challenge
// boostrap para hacer :


