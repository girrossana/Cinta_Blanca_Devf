// challenge licencia
let edad = Number (prompt('ingresa tu edad'))
if ( edad >= 18 && edad <= 80){
    console.log('puedes conducir');

}else if (edad === 16 || edad === 17){
    console.log('puedes sacar tu permiso');
}else if ( edad < 18){
    console.log('no puedes conducir');
}else{
    console.error('datos incorrectos--ingresa solo numeros');
}
// podemos cambiar el orden o solo cambiar el menor < de 18 años
// challenge
// juego de piedra papel o tijera
