const persona = {
    nombre: 'Juan',
    apellido: 'Fernandez',
    edad: 27
}

const { nombre, apellido } = persona

console.log(nombre)
console.log(apellido)

const retornaPersona = ({ nombre, rango = 'usuario' }) => {
    return console.log(nombre, rango)
}

retornaPersona(persona)