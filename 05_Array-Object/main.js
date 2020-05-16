
// array o arreglo
// 0 1 ... todo empieza desde cero
var colores = ["azul", "rojo", "amarillo", "verde", 1, true]

console.log(colores)
console.log(colores[0])
console.log(colores[2])
console.log(colores[4])
// manera de agregar datos, antigua o menos usada
// colores[6] = 'morado'
// console.log(colores)
// console.log(colores[6])

// push, empuja un elemento a la ultima posicion, suma un elemento al final del arreglo
 colores.push('rosa')
 colores.push('cafe')
 console.log(colores)

// pop------------> borra el ultimo elemento
colores.pop()
// console.log(colores)


// splice---->>>>para borrar algo mas especifico

colores.splice(4,1)
console.log(colores)

// cosas nuevas
// --------->>posicion, elemento a borrar, sustituir elemento
colores.splice(2, 1 , 'cafe')
console.log(colores)