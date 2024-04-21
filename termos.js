const Termos = [
    {
        img: "../img/termo-stanley-verde.png",
        name: "Termo Stanley Verde",
        price: 90000,
        method: "Mercado Pago",
        discount: 75000
    },
    {
        img: "../img/termo-termolar.png",
        name: "Termo para Termolar",
        price: 45999,
        method: "Mercado Pago",
        discount: 32500
    },
    {
        img: "../img/Termo-Stanley-Rosado.png",
        name: "Mate Croco Negro",
        price: 75000,
        method: "Mercado Pago",
        discount: 64999
    },
]
const matesProd = []
const termos = document.getElementById("termos")

function Mostrar(){
    Termos.forEach(Termos => {
        const card = document.createElement(`div`)
        card.innerHTML = `
        <div class="cards">
                <div class="card">
                <img class="img-prod" src=${Termos.img}></img>
                <div class="card-gris">
                <p>${Termos.name}</p>
                <span>$${Termos.price}</span>
                <span>${Termos.method}</span>
                <p class="card-dis">$${Termos.discount}</p>
                </div>
                </div>
        </div>
        `
        termos.appendChild(card)
    })
}

Mostrar()