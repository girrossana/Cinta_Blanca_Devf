// objeto-object

var persona = {
    nombre : 'rossana',
    edad : '28', 
    telefono : '12345678',
    direccion : 'queretaro',
    musica : [ 'rock', 'salsa', 'k-pop'],
    peliculas : {
        accion : ['mi', 'ronning', 'dom'],
        drama : ['titanic', 'match point'],
        romcom : ['la propuesta', 'yo antes de ti', 'one day','casanovias'],
        terror : {
            gone : 'destino final',
            slasher : 'halloween',
            vampiros : ['crepusculo','dracula']
        }
    }
}

console.log(persona.nombre, persona.edad)

console.log(persona.musica[2])
console.log(persona.peliculas.accion[2])
// console.log(persona.peliculas.terror.vampiros) ---si es un solo item
// si son varios ya seria con [x]
console.log(persona.peliculas.terror.vampiros[1])

