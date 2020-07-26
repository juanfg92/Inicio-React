import { heroes } from "../data/heroe";

const getHeroeById = (idHeroe) => {
    return heroes.find((heroe) => heroe.id === idHeroe)
}

// console.log(getHeroeById(2))

const getHeroeByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner.toLocaleLowerCase() === owner.toLocaleLowerCase())
}

// console.log(getHeroeByOwner('dc'))

export {
    getHeroeById,
    getHeroeByOwner
}