const Mates = [
    {
        img: "../img/Mate-blanco.png",
        nombre: "Mate Imperial Blanco",
        price: 69999,
    },
    {
        img: "../img/Mate-marron.png",
        nombre: "Mate Imperial Marron",
        price: 69999,
    },
    {
        img: "../img/Mate-croco.png",
        nombre: "Mate Croco Negro",
        price: 56000,
    }
]
const matesProd = []
const mates = document.getElementById("mates")




function Mostrar(){
    Mates.forEach(producto => {
        const card = document.createElement(`div`)
        card.innerHTML = `
        <div class="card bg-neutral-300">
            <img class="img-prod" src="${producto.img}" alt="${producto.nombre}"></img>
            <div class="card-gris">
            <p class="card-name">${producto.nombre}</p>
            <span class="card-price">$${producto.price}</span>
            <button class="btn-agregar" id="boton${producto.nombre}"  onclick='${Agregar}')">Agregar</button>

            </div>
        </div>
        `
        mates.appendChild(card)
    })
}

Mostrar()