import { Futbol } from './data.js'

console.log(Futbol)

const container = document.getElementById('container')

leerDATA(Futbol)

function leerDATA(Futbol) {

    Futbol.forEach(ball => {
        const { id, nombre, descripción, imagen } = ball

        const card = document.createElement('div')

        card.innerHTML = `
    <h2>${nombre}</h2>
    <img id="img" src=${imagen} alt="">
    <p>${descripción}</p>
    `
        container.appendChild(card)

    });
}