const Termos = [
    {
        img: "../img/termo-stanley-verde.png",
        name: "Termo Stanley Verde",
        price: 90000,
    },
    {
        img: "../img/termo-termolar.png",
        name: "Termo para Termolar",
        price: 45999,
    },
    {
        img: "../img/Termo-Stanley-Rosado.png",
        name: "Mate Croco Negro",
        price: 75000,
    },
]
const matesProd = []
const termos = document.getElementById("termos")

function Mostrar(){
    Termos.forEach(producto => {
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
        termos.appendChild(card)
    })
}

Mostrar()