
let JUGADOR1 = prompt('elige piedra, papel o tijera').toLowerCase()
let JUGADOR2 = prompt('elige piedra, papel o tijera').toLowerCase()

if( JUGADOR1 === 'piedra' && JUGADOR2 === 'piedra')
{ console.log('empate');
} else if ( JUGADOR1 === 'piedra' && JUGADOR2 === 'tijera')
    { console.log('gana jugador 1');
}else if ( JUGADOR1 === 'piedra' && JUGADOR2 === 'papel')
{ console.log('gana jugador 2');
} else if( JUGADOR1 === 'tijera' && JUGADOR2 === 'tijera')
{ console.log('empate');
} else if ( JUGADOR1 === 'tijera' && JUGADOR2 === 'piedra')
    { console.log('gana jugador 2');
}else if ( JUGADOR1 === 'tijera' && JUGADOR2 === 'papel')
{ console.log('gana jugador 1');
} else if( JUGADOR1 === 'papel' && JUGADOR2 === 'papel')
{ console.log('empate');
} else if ( JUGADOR1 === 'papel' && JUGADOR2 === 'tijera')
    { console.log('gana jugador 2');
}else if ( JUGADOR1 === 'papel' && JUGADOR2 === 'piedra')
{ console.log('gana jugador 1');
}else{
    console.log('elige solo PIEDRA, PAPEL O TIJERA');
}


// }else if (
//     JUGADOR1 !== 'piedra' JUGADOR2 === 'piedra'){
//     console.log('gana jugador 2');
// }else if (
//     JUGADOR1 !== 'piedra' JUGADOR2 === 'piedra'){
//         console.log('gana jugador 2');

