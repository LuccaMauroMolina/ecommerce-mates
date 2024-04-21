const Bombilla = [
    {
        img: "../img/bombilla-metal.png",
        name: "Bombilla de Metal",
        price: 8000,
        method: "Mercado Pago",
        discount: 6500
    },
    {
        img: "../img/bombilla-pico-loro-acero.png",
        name: "Mate Imperial Blanco",
        price: 19999,
        method: "Mercado Pago",
        discount: 14999
    },
    {
        img: "../img/bombilla1.png",
        name: "Bombilla Metal Comun",
        price: 15500,
        method: "Mercado Pago",
        discount: 12000
    }
]
const bombillaProd = []
const bombillas = document.getElementById("bombillas")

function Mostrar(){
    Bombilla.forEach(Bombilla => {
        const card = document.createElement(`div`)
        card.innerHTML = `
        <div class="cards">
                <div class="card">
                <img class="img-prod" src=${Bombilla.img}></img>
                <div class="card-gris">
                <p>${Bombilla.name}</p>
                <span>$${Bombilla.price}</span>
                <span>$Bombillas.method}</span>
                <p class="card-dis">$${Bombilla.discount}</p>
                </div>
                </div>
        </div>
        `
        bombillas.appendChild(card)
    })
}

Mostrar()