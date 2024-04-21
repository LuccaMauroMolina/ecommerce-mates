const Mates = [
    {
        img: "../img/Mate-blanco.png",
        name: "Mate Imperial Blanco",
        price: 69999,
        method: "Mercado Pago",
        discount: 59999
    },
    {
        img: "../img/Mate-marron.png",
        name: "Mate Imperial Marron",
        price: 69999,
        method: "Mercado Pago",
        discount: 59999
    },
    {
        img: "../img/Mate-croco.png",
        name: "Mate Croco Negro",
        price: 56000,
        method: "Mercado Pago",
        discount: 44000
    }
]
const matesProd = []
const mates = document.getElementById("mates")

function Mostrar(){
    Mates.forEach(Mates => {
        const card = document.createElement(`div`)
        card.innerHTML = `
        <div class="cards">
                <div class="card">
                <img class="img-prod" src=${Mates.img}></img>
                <div class="card-gris">
                <p>${Mates.name}</p>
                <span>$${Mates.price}</span>
                <span>${Mates.method}</span>
                <p class="card-dis">$${Mates.discount}</p>
                </div>
                </div>
        </div>
        `
        mates.appendChild(card)
    })
}

Mostrar()