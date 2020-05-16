// alert('hola')

// condicionales
// if(condindicion){
//     accion que se ejecuata si cumple la condicion
//     sino se cumple:
//     }else{
//     accion que se ejecuta sino se cumple la condicion
// }
// nueva forma de declarar variables es "let"

// let num1 = 10
// if(num1 <= 10) {
//     console.log('es verdadero')
// }else{
//  console.log('falso')
// }
// comparar valores
// let num1 = 10
// if(num1 !== '10') {
//     console.log('es verdadero')
// }else{
//  console.log('falso')
// }

// comparara si un numero es par o impar
// ----------------modulo(operador matematico)
// let numeros = prompt('pon un numero')
// if (numeros % 2 ===0){
//     console.log('par')
//     }else{
//         console.log('impar')
//     }
// //  con prompt bien hecho
// let pregunta = Number (prompt('ingresa tu numero'))

// if (pregunta % 2 ===0){
//     console.log('par')
//     }else{
//         console.log('impar')
//     }
// respuesta

// modulo
// el modulo arroja el residuo de la division
// let numbero = number (prompt('ingrese numero'))
// if (numero %2 === 0){
//     console.log(numero + ''+ 'es par')
// }else{
//     console.log(numbero + ''+ 'es impar')
//     }

// let numbero = prompt('ingrese numero')
// let numeroreal = Number (numero)
// console.log(typeof(numero))
// console.log


let numero = Number (prompt('ingrese numero'))
if (numero % 2 === 0){
    console.log(numero + ''+ 'es par')
}else if (numero % 2 === 1){
    console.log(numero + ''+ 'es impar')
} else{
    console.error('error');
}

