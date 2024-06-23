const Bombilla = [
    {
        img: "../img/bombilla-metal.png",
        name: "Bombilla de Metal",
        price: 8000,
    },
    {
        img: "../img/bombilla-pico-loro-acero.png",
        name: "Mate Imperial Blanco",
        price: 19999,
    },
    {
        img: "../img/bombilla1.png",
        name: "Bombilla Metal Comun",
        price: 15500,
    }
]
const bombillaProd = []
const bombillas = document.getElementById("bombillas")

function Mostrar(){
    Bombilla.forEach(producto => {
        const card = document.createElement(`div`)
        card.innerHTML = `
        <div class="card bg-neutral-300">
            <img class="img-prod" src="${producto.img}" alt="${producto.nombre}"></img>
            <div class="card-gris">
            <p class="card-name">${producto.nombre}</p>
            <span class="card-price">$${producto.price}</span>
            <button class="btn-agregar" id="boton${producto.nombre}">Agregar</button>
            </div>
        </div>
        `
        bombillas.appendChild(card)
    })
}

Mostrar()