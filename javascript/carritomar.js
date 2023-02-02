const prodmar = [
{
    Id: 1,
    nombre: "iron man",
    imagen: "https://m.media-amazon.com/images/I/61Bx7HZwXGL._AC_SL1300_.jpg",
    precio: 800,
    Mensaje: "El hombre de hierro",
},
{
    Id: 2,
    nombre: "Thor",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_718290-MLM48613233376_122021-O.jpg",
    precio: 699,
    Mensaje: "El dios del trueno",
},
{
    Id: 3,
    nombre: "Spiderman",
    imagen: "https://m.media-amazon.com/images/I/61IPemXlaWL._AC_SX466_.jpg",
    precio: 899,
    Mensaje: "El amigable vecino",
},
{
    Id: 4,
    nombre: "Capitan america",
    imagen: "https://m.media-amazon.com/images/I/61S5B9UkgBL._AC_SX679_.jpg",
    precio: 869,
    Mensaje: "El primer vengador",
},
];

prodmar.forEach((element) => {
Elementomar.innerHTML += `
    <div class="elemento">
    <div class="row">
    <div class="col-12 col-md-6">
                        <div class="produc">
                            <h3 class="nomprod">${element.nombre}</h3>
                            <img class="prodimg mx-auto d-block"
                                src=${element.imagen} alt="${element.nombre}">
                            <figcaption class="figure-caption">${element.Mensaje}</figcaption>
                            <div class="datosprod">
                                <h4 class="precio">${element.precio} $</h4>
                                <button class="btn btn-primary" id="${element.Id}">AÑADIR AL CARRITO</button>
                            </div>
                        </div>
                    </div>
                </div>
    `;
});



