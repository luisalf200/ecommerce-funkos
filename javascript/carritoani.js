const prodani = [
    {
        Id: 9,
        nombre: "Dragon ball",
        imagen: "https://cf.shopee.com.mx/file/sg-11134201-22100-x6roixdttoiv07",
        precio: 800,
        Mensaje: "siente el ki de los guerreros Z",
    },
    {
        Id: 10,
        nombre: "Pokemon",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_936138-MLM51181080686_082022-V.webp",
        precio: 699,
        Mensaje: "Atrapalos a todos",
    },
    {
        Id: 11,
        nombre: "Naruto",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_904980-MLA48341053338_112021-O.jpg" ,
        precio: 899,
        Mensaje: "¡cumple tu sueño de convertirte en el mejor Hokage!",
    },
    {
        Id: 12,
        nombre: "Attack on titans",
        imagen: "https://m.media-amazon.com/images/I/51OIzYsBV5L._AC_SX425_.jpg",
        precio: 869,
        Mensaje: "Nada puede suprimir la curiosidad de un humano",
    },
    ];

    prodani.forEach((elementani) => {
    Elementoani.innerHTML += `
        <div class="elementodc">
        <div class="row">
        <div class="col-12 col-md-6">
                            <div class="produc">
                                <h3 class="nomprod">${elementani.nombre}</h3>
                                <img class="prodimg mx-auto d-block"
                                    src=${elementani.imagen} alt="${elementani.nombre}">
                                <figcaption class="figure-caption">${elementani.Mensaje}</figcaption>
                                    <div class="datosprod">
                                        <h4 class="precio">${elementani.precio} $</h4>
                                        <button class="btn btn-primary" id="${elementani.Id}">AÑADIR AL CARRITO</button>
                                    </div>
                                </div>
                            </div>
                        </div>
            `;
        });