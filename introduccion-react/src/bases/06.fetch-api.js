const apiKey = 'qd8FWZc51FunHsduVM86YEXcY9bprsPC';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json()) //2 then seguidos responde a que el primer then funciona como promesa
    .then(({ data }) => {
        const { url } = data.images.original
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    })
    .catch(console.warn)