let persona = {
    nombre: 'Juan',
    apellido: 'Fernandez',
    edad: 27
}

//clonar objetos sin apuntar al espacio en memoria

let persona2 = {...persona }

persona2.nombre = 'Victoria'

console.log(persona)
console.log(persona2)