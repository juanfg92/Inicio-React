import { getHeroeById } from "./04.exportaciones";


const getHeroeByIdAysnc = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);

            heroe ? resolve(heroe) : reject('hubo un error!!')

        }, 2000)
    })
};

getHeroeByIdAysnc(50)
    .then(heroe => console.log('heroe', heroe))
    .catch(console.warn)