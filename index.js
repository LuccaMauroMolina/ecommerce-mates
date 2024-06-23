class Prod{
    constructor(id,img,nombre,price){
        this.id = id;
        this.img = img; 
        this.nombre = nombre;
        this.price = price;
        this.cant = 1
    }
}



const mateBl = new Prod(1,"../img/Mate-blanco.png", "Mate Imperial Blanco", 69999);
const mateMa = new Prod(2,"../img/Mate-marron.png","Mate Imperial Marron",69999);
const bombillaMe = new Prod(3, "../img/bombilla-metal.png","Bombilla de Metal",8000);
const termoStanleyVe = new Prod(4, "../img/termo-stanley-verde.png","Termo Stanley Verde",90000);
const termolar = new Prod(5, "../img/termo-termolar.png","Termo para Termolar",45999);
const bombillaPico = new Prod(6,"../img/bombilla-pico-loro-acero.png","Bombilla Pico Loro Acero",19999);
const bombillaComun= new Prod(7, "../img/bombilla1.png","Bombilla Metal Comun",15500);
const mateCrocoNeg = new Prod(8, "../img/Mate-croco.png","Mate Croco Negro",56000);
const termoStanleyRo = new Prod(9,"../img/Termo-Stanley-Rosado.png","Termo Stanley Rosado",75000)



const productos = [mateBl,mateMa,bombillaMe,termoStanleyVe,termolar,bombillaPico,bombillaComun,mateCrocoNeg,termoStanleyRo]
const cards = document.getElementById("cards")
let carrito = []

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

function Mostrar() {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("producto");
        card.innerHTML = `
        <div class="card bg-neutral-300">
            <img class="img-prod" src="${producto.img}" alt="${producto.nombre}"></img>
            <div class="card-gris">
            <p class="card-name">${producto.nombre}</p>
            <span class="card-price">$${producto.price}</span>
            <button class="btn-agregar" id="boton${producto.nombre}">Agregar</button>
            </div>
        </div>
        `;
        cards.appendChild(card);
        const btn = document.getElementById(`boton${producto.nombre}`);
        btn.addEventListener("click", () => {
            Agregar(producto.nombre);
        });
        
    });
}

Mostrar();

function Agregar(nombre){
    const productoCarrito = carrito.find(producto => producto.nombre === nombre)
    if(productoCarrito){
        productoCarrito.cant++
    }else{
        const producto = productos.find(producto => producto.nombre === nombre)
        carrito.push(producto)
    } 
    Total()
    Cantidad()
    localStorage.setItem("carrito", JSON.stringify(carrito))
    Toastify({
        text: "Se agrego al carrito",
        duration: 1000,
        position: "right", 
        style:{
            background: "black",
            borderRadius: "20px", 
        }

    }).showToast()
    //verCarrito()
}


function Eliminar(nombre){
    const eliminar = carrito.find(producto => producto.nombre === nombre)
    const indice = carrito.indexOf(eliminar)
    carrito.splice(indice, 1)
    productos.cant = 1;
    verCarrito()
    Total()
    Cantidad()
    Toastify({
        text: "Se elimino del carrito",
        duration: 1000,
        position: "start",
        style:{
            background: "red",
            borderRadius: "20px", 
        }
    }).showToast()
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


    function Sumar(nombre){
        const producto = carrito.find(prod => prod.nombre === nombre)
        if(producto){
            producto.cant++
            console.log(producto)
            verCarrito();
            Cantidad()
        }
    }


function Restar(nombre){
    const producto = carrito.find(prod => prod.nombre === nombre)
    producto.cant--
    if(producto.cant === 0){
        Eliminar(nombre)
        producto.cant = 1
    }
    verCarrito()
    Cantidad()
}

const contenedorCarrito = document.getElementById("contenedorCarrito");
const mostrarCarrito = document.getElementById("carrito")

mostrarCarrito.addEventListener("click",() => {
    verCarrito()
})




const shop = document.querySelector(".icon")
const modal = document.getElementById("modal")
const modalContent = document.querySelector(".modal-content")
const modalContainer = document.querySelector(".modal-container")
const btnModal = document.querySelector(".btn-modal")
const body = document.getElementsByTagName("body")




const verCarrito = () => {
    modalContainer.innerHTML = ""
    
    carrito.forEach((producto) => {
        //const svg = "./svg/trash.svg"
            modalContent.innerHTML = `
            <button class="close">X</button>
<div class="pl-4">
    <div class="modal-name">
        <h2>${producto.nombre}</h2>
        <button id='eliminar${producto.nombre}' class="modal-remove">Eliminar</button>
    </div>
    <div class="modal-cont">
        <button id='disminuir${producto.nombre}' onclick="carrito">-</button>
        <p id='contador${producto.nombre}' class="modal-cant" data-value="${producto.cant}">${producto.cant}</p>
        <button id='aumentar${producto.nombre}' onclick="carrito">+</button>
    </div>
    <div>
    <p class="modal-total">Total: $<span id="total"></span><p/>
    <img class="img-modal" src="${producto.img}">
    </div>
    <div class="modales">
        <button id="comprar">Comprar</button>
        <p class="modal-total">$${producto.price}</p>
        <button class="btn colorBoton pt-9" id="vaciarCarrito">Vaciar Carrito</button>
    </div>
</div>


            `
                modal.style.display = "block"
                modalContent.style.background = "darkgray"
                modalContent.style.height = "100vh"
                modalContent.style.width = "350px"
                modalContent.style.position = "absolute"
                modalContent.style.right = "0px"
                modalContent.style.top = "0"
                //modalContent.style.bottom = "0"

                modalContainer.appendChild(modalContent)
                modalContainer.classList.add("modal-item")
                
                const closeCard = document.querySelector(".close")

        closeCard.addEventListener("click", () => {
            modal.style.display = "none"
        })

                const aumentar = document.getElementById(`aumentar${producto.nombre}`);
                aumentar.addEventListener("click", () => {
                    Sumar(producto.nombre);
                });
                
                const disminuir = document.getElementById(`disminuir${producto.nombre}`);
                disminuir.addEventListener("click", () => {
                    Restar(producto.nombre);
                });
                
                const eliminar = document.getElementById(`eliminar${producto.nombre}`)
                eliminar.addEventListener("click", () => {
                    Eliminar(producto.nombre);
                })
                
                const total = document.getElementById("total")
                total.innerText = Total()

                const vaciar = document.getElementById("vaciarCarrito")
                vaciar.addEventListener("click", () => {
                    eliminarTodoElCarrito(producto.nombre)
                })

                const comprar = document.getElementById("comprar")
                comprar.addEventListener("click", () => {
                    Swal.fire({
                        title: "¿Quieres hacer la compra?",
                        showDenyButton: true,
                        //showCancelButton: true,
                        confirmButtonText: "Si quiero",
                        denyButtonText: `Aun no`
                        }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Compra confirmada",
                                showConfirmButton: false,
                                timer: 1500
                                });
                                modalContent.remove(); // Eliminamos el elemento del carrito después de la compra confirmada
                                eliminarTodoElCarrito();
                                //modalContent.style.display = "none"
                                //eliminarTodoElCarrito()
                        } else if (result.isDenied) {
                            Swal.fire({
                                icon: "error",
                                text: "compra cancelada",
                                timer: 1500
                                });
                        }
                        modalContent.style.display = "block"
                        });
                })
                })
}

        const total = document.getElementById("total")


/*function Total(){
    let compra = carrito.reduce((a,producto) => a.cant + producto.price, 0 )
    total.innerHTML = ` $${compra}`;
    //return compra
}*/

const Total = () => {
    let totalCompra = 0; 
    carrito.forEach(producto => {
        totalCompra += producto.price * producto.cant;
    })
    return totalCompra; 
}

const mostrarCant = document.getElementById("cantidad")

const Cantidad = () => {
    let cantidad = 0
        carrito.forEach(cantidades => {
            cantidad += cantidades.cant
        })
    mostrarCant.innerHTML = `${cantidad}`
    mostrarCant.style.color = "white"
}

const eliminarCero = () => {
    const cantidadActual = mostrarCant.innerHTML
    if(cantidadActual === "0"){
        mostrarCant.innerHTML = ""
    }
}

setInterval(eliminarCero)


function eliminarTodoElCarrito(nombre) {
    const vaciar = carrito.splice(nombre, 10000)
    if(vaciar){
        verCarrito()
        let prodCero = carrito.reduce((a,b) => a - b.price, [])
        total.innerHTML = `${prodCero} `
        mostrarCant.innerHTML = ""
    }
    localStorage.clear()
}

eliminarTodoElCarrito()

function buscador(){
    let palabra = document.getElementById("buscar-pal").value.toLowerCase()
    const cards = document.querySelectorAll(".producto")
    let noDisponible = document.getElementById("no-disponible")
    
    cards.forEach(card => {
        const nombreProducto = card.querySelector("p").innerText.toLowerCase()
        const img = card.querySelector(".img-prod")
        let indice = []

        if(nombreProducto.includes(palabra)){
            card.style.display = "block"
            img.style.display = "block"
        }
        else{
            //card.style.display = "none"
            //noDisponible.style.display = "none"
            card.style.display = "none"
            img.style.display = "none"
        }
        

    })
    const cardsVisibles = Array.from(cards).filter(card => card.style.display !== "none")
    if(cardsVisibles.length === 0){
        noDisponible.innerText = "NO DISPONIBLE"
    }else {
        noDisponible.innerText = ""
    }


}

document.getElementById("buscar-pal").addEventListener("keyup", buscador);


const iconoMenu = document.querySelector("#icono-menu")
const menu = document.querySelector("#menu")


function Menu(){
    iconoMenu.addEventListener("click", (e) => {
        menu.classList.toggle('active')
    })
}

Menu()