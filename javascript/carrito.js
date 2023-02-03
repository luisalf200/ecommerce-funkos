const productos = [
    {
        Id: 1,
        nombre: "iron man",
        imagen: "https://m.media-amazon.com/images/I/61Bx7HZwXGL._AC_SL1300_.jpg",
        precio: 800,
        Mensaje: "El hombre de hierro",
        serie: "Marvel",
        tipo: "titmar",
        cantidad: 1,
    },
    {
        Id: 2,
        nombre: "Thor",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_718290-MLM48613233376_122021-O.jpg",
        precio: 699,
        Mensaje: "El dios del trueno",
        serie: "Marvel",
        tipo: "titmar",
        cantidad: 1,
    },
    {
        Id: 3,
        nombre: "Spiderman",
        imagen: "https://m.media-amazon.com/images/I/61IPemXlaWL._AC_SX466_.jpg",
        precio: 899,
        Mensaje: "El amigable vecino",
        serie: "Marvel",
        tipo: "titmar",
        cantidad: 1,
    },
    {
        Id: 4,
        nombre: "Capitan america",
        imagen: "https://m.media-amazon.com/images/I/61S5B9UkgBL._AC_SX679_.jpg",
        precio: 869,
        Mensaje: "El primer vengador",
        serie: "Marvel",
        tipo: "titmar",
        cantidad: 1,
    },
    {
        Id: 5,
        nombre: "Superman",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_701569-MLM46969627699_082021-O.jpg",
        precio: 800,
        Mensaje: "El hombre de hierro",
        serie: "DC",
        tipo: "titdc",
        cantidad: 1,
    },
    {
        Id: 6,
        nombre: "Batman",
        imagen: "https://m.media-amazon.com/images/I/61MGuIiT56L._AC_SL1474_.jpg",
        precio: 699,
        Mensaje: "El caballero de la noche",
        serie: "DC",
        tipo: "titdc",
        cantidad: 1,
    },
    {
        Id: 7,
        nombre: "Flash",
        imagen: "https://cdn.shopify.com/s/files/1/2437/4099/products/7ecf516dd5ee4f959a654a6e114cc3ffxl_1200x1200.jpg?v=1611941496",
        precio: 899,
        Mensaje: "El velocista escarlata",
        serie: "DC",
        tipo: "titdc",
        cantidad: 1,
    },
    {
        Id: 8,
        nombre: "Mujer maravilla",
        imagen: "https://m.media-amazon.com/images/I/61Xi+BGmGgL._AC_SX425_.jpg",
        precio: 869,
        Mensaje: "La reina de las amazonas",
        serie: "DC",
        tipo: "titdc",
        cantidad: 1,
    },
    {
        Id: 9,
        nombre: "Dragon ball",
        imagen: "https://cf.shopee.com.mx/file/sg-11134201-22100-x6roixdttoiv07",
        precio: 800,
        Mensaje: "siente el ki de los guerreros Z",
        serie: "Anime",
        tipo: "titani",
        cantidad: 1,
    },
    {
        Id: 10,
        nombre: "Pokemon",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_936138-MLM51181080686_082022-V.webp",
        precio: 699,
        Mensaje: "Atrapalos a todos",
        serie: "Anime",
        tipo: "titani",
        cantidad: 1,
    },
    {
        Id: 11,
        nombre: "Naruto",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_904980-MLA48341053338_112021-O.jpg" ,
        precio: 899,
        Mensaje: "¡cumple tu sueño de convertirte en el mejor Hokage!",
        serie: "Anime",
        tipo: "titani",
        cantidad: 1,
    },
    {
        Id: 12,
        nombre: "Attack on titans",
        imagen: "https://m.media-amazon.com/images/I/51OIzYsBV5L._AC_SX425_.jpg",
        precio: 869,
        Mensaje: "Nada puede suprimir la curiosidad de un humano",
        serie: "Anime",
        tipo: "titani",
        cantidad: 1,
    },
    ];

    const contenedorProductos = document.getElementById('contenedorprod')
    

let carrito = []

productos.forEach((elementani) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.classList.add('col-12')
    div.classList.add('col-md-6')
    div.innerHTML =`
    <h2 class="${elementani.tipo}">${elementani.serie}</h2>
    <h3 class="nomprod">${elementani.nombre}</h3>
    <img class="prodimg mx-auto d-block"
        src=${elementani.imagen} alt="${elementani.nombre}">
    <figcaption class="figure-caption">${elementani.Mensaje}</figcaption>
        <div class="datosprod">
            <h4 class="precio ">${elementani.precio} $</h4>
            <button class="btn btn-primary" id="agregar${elementani.Id}">AÑADIR AL CARRITO</button>
        </div>
    </div>
            `;
            contenedorProductos.appendChild(div)

            const boton = document.getElementById(`agregar${elementani.Id}`)

            boton.addEventListener('click', () => {
            //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(elementani.Id)
    })
        });

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.Id === prodId)
    if (existe){
        const prod = carrito.map (prod => {
            if (prod.Id === prodId){
                prod.cantidad++
            }
        })
    } else { 
    const item = productos.find((prod) => prod.Id === prodId)
    carrito.push(item)
}
console.log(carrito)
}