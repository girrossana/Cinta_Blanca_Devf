const valordeCUA = (a, b) => {
    a = prompt('ingresa el lado a')
    b = prompt ('ingresa el lado b')
    return a * b
}
console.log(valordeCUA ());

const valordeREC = (b, a) => {
    return b * a
}
console.log(valordeREC (6 , 8));

const valordetrin = (b, h) => {
    return b * h / 2
}
console.log(valordetrin(6 , 8));