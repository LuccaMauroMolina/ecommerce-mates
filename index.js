class Prod{
    constructor(id,img,nombre,price,method, discount){
        this.id = id;
        this.img = img; 
        this.nombre = nombre;
        this.price = price;
        this.method = method;
        this.discount = discount
        this.cant = 1
    }
}

const mateBl = new Prod(1,"./img/Mate-blanco.png", "Mate Imperial Blanco", 69999, "Mercado Pago",59999);
const mateMa = new Prod(2,"./img/Mate-marron.png","Mate Imperial Marron",69999,"Mercado Pago",59999);
const bombillaMe = new Prod(3, "./img/bombilla-metal.png","Bombilla de Metal",8000,"Mercado Pago",6500);
const termoStanleyVe = new Prod(4, "./img/termo-stanley-verde.png","Termo Stanley Verde",90000,"Mercado Pago",75000);
const termolar = new Prod(5, "./img/termo-termolar.png","Termo para Termolar",45999,"Mercado Pago",32500);
const bombillaPico = new Prod(6,"./img/bombilla-pico-loro-acero.png","Bombilla Pico Loro Acero",19999,"Mercado Pago",14999);
const bombillaComun= new Prod(7, "./img/bombilla1.png","Bombilla Metal Comun",15500,"Mercado Pago",12000);
const mateCrocoNeg = new Prod(8, "./img/Mate-croco.png","Mate Croco Negro",56000,"Mercado Pago",44000);
const termoStanleyRo = new Prod(9,"./img/Termo-Stanley-Rosado.png","Termo Stanley Rosado",75000,"Mercado Pago",64999)



const productos = [mateBl,mateMa,bombillaMe,termoStanleyVe,termolar,bombillaPico,bombillaComun,mateCrocoNeg,termoStanleyRo]
const Card = document.getElementById("cards")
const carrito = []


/*function verCarrito(){
    btnModal.addEventListener("click", () => {
        modal.style.display = "block"
        modalContent.style.background = "red"
        modalContent.style.height = "100vh"
        modalContent.style.width = "350px"
        modalContent.style.position = "absolute"

        modalContent.innerHTML = `
        <div class="modal-content">
        <span class="close">X</span>
    </div>
                                `
        const closeCard = document.querySelector(".close")

        closeCard.addEventListener("click", () => {
            modal.style.display = "none"
        })

})
}*/


function Mostrar() {
    
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("producto");
        card.innerHTML = `
        <div class="card">
            <img class="img-prod" src="${producto.img}" alt="${producto.nombre}"></img>
            <div class="card-gris">
            <p>${producto.nombre}</p>
            <span>$${producto.price}</span>
            <span>${producto.method}</span>
            <p class="card-dis">$${producto.discount}</p>
            <button id="boton${producto.nombre}">Agregar</button>
            </div>
        </div>
        `;
        Card.appendChild(card);
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
    Toastify({
        text: "Se agrego al carrito",
        duration: 3000,
        position: "center", 
        style:{
            background: "black",
            borderRadius: "20px", 
        }

    }).showToast()
}

function Eliminar(nombre){
    const eliminar = carrito.find(producto => producto.nombre === nombre)
    const indice = carrito.indexOf(eliminar)
    carrito.splice(indice, 1)
    //productos.cant = 1;
    verCarrito()
    Total()
    Cantidad()
    Toastify({
        text: "Se elimino del carrito",
        duration: 3000,
        position: "right",
        style:{
            background: "red",
            borderRadius: "20px", 
        }
    }).showToast()
}


    function Sumar(nombre){
        const producto = carrito.find(prod => prod.nombre === nombre)
        if(producto){
            producto.cant++
            console.log(producto)
            verCarrito();
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
            modalContent.innerHTML = `
                <h2>${producto.nombre}</h2>
        <button id='aumentar${producto.nombre}' onclick="carrito" value="aumentar">+</button>
        <button id='disminuir${producto.nombre}' onclick="carrito" value="disminuir">-</button>
        <button id='eliminar${producto.nombre}'>Eliminar</button>
        <p id='contador${producto.nombre}' value="${producto.cant}">${producto.cant}</p>
        <img class="img-modal" src="${producto.img}">
                `
                modal.style.display = "block"
        modalContent.style.background = "gray"
        modalContent.style.height = "100vh"
        modalContent.style.width = "350px"
        modalContent.style.position = "absolute"
        modalContent.style.right = "0px"
                modalContainer.appendChild(modalContent)
                
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
                
                Total();
        })
    }


//esta funcion es la correcta
/*const verCarrito = () => {
    
    contenedorCarrito.innerHTML = "";

    carrito.forEach((producto) => {
        const tables = document.createElement(`table`);
        tables.innerHTML = `
        <h2>${producto.nombre}</h2>
        <button id='aumentar${producto.nombre}' onclick="carrito" value="aumentar">+</button>
        <button id='disminuir${producto.nombre}' onclick="carrito" value="disminuir">-</button>
        <button id='eliminar${producto.nombre}'>Eliminar</button>
        <p id='contador${producto.nombre}' value="${producto.cant}">${producto.cant}</p>
        <img src="${producto.img}">

            `                

    
            contenedorCarrito.appendChild(tables)
            
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
                Total();

})

}*/


verCarrito()

const total = document.getElementById("total")


/*function Total(){
    let compra = carrito.reduce((a,producto) => a + producto.price, 0 )
    total.innerHTML = ` $${compra}`;
}
*/
const Total = () => {
    let totalCompra = 0; 
    carrito.forEach(producto => {
        totalCompra += producto.price * producto.cant;
        //+= es igual a poner totalComra = totalCompra + producto.precio * producto.cantidad 
    })
    total.innerHTML = `$${totalCompra}`;
    
}

const mostrarCant = document.getElementById("cantidad")

const Cantidad = () => {
    let cantidad = 0
        carrito.forEach(cantidades => {
            cantidad += cantidades.cant
        })
    mostrarCant.innerHTML = `${cantidad}`
}




const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

function eliminarTodoElCarrito(nombre) {
    const vaciar = carrito.splice(nombre, 10000)
    if(vaciar){
        verCarrito()
        let prodCero = carrito.reduce((a,b) => a - b.price, [])
        total.innerHTML = `${prodCero} `
    }
}
/*
function eliminarTodoElCarrito() {
    carrito = [];
    verCarrito();
    total.innerHTML = "0";
}*/



eliminarTodoElCarrito()



