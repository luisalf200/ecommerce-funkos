const proddc = [
    {
        Id: 5,
        nombre: "Superman",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_701569-MLM46969627699_082021-O.jpg",
        precio: 800,
        Mensaje: "El hombre de hierro",
    },
    {
        Id: 6,
        nombre: "Batman",
        imagen: "https://m.media-amazon.com/images/I/61MGuIiT56L._AC_SL1474_.jpg",
        precio: 699,
        Mensaje: "El caballero de la noche",
    },
    {
        Id: 7,
        nombre: "Flash",
        imagen: "https://cdn.shopify.com/s/files/1/2437/4099/products/7ecf516dd5ee4f959a654a6e114cc3ffxl_1200x1200.jpg?v=1611941496",
        precio: 899,
        Mensaje: "El velocista escarlata",
    },
    {
        Id: 8,
        nombre: "Mujer maravilla",
        imagen: "https://m.media-amazon.com/images/I/61Xi+BGmGgL._AC_SX425_.jpg",
        precio: 869,
        Mensaje: "La reina de las amazonas",
    },
    ];

    proddc.forEach((elementdc) => {
    Elementodc.innerHTML += `
        <div class="elementodc">
        <div class="row">
        <div class="col-12 col-md-6">
                            <div class="produc">
                                <h3 class="nomprod">${elementdc.nombre}</h3>
                                <img class="prodimg mx-auto d-block"
                                    src=${elementdc.imagen} alt="${elementdc.nombre}">
                                <figcaption class="figure-caption">${elementdc.Mensaje}</figcaption>
                                    <div class="datosprod">
                                        <h4 class="precio">${elementdc.precio} $</h4>
                                        <button class=" btn btn-primary" id="${elementdc.Id}">AÑADIR AL CARRITO</button>
                                    </div>
                                </div>
                            </div>
                        </div>
            `;
        });