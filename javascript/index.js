const contenedor = document.getElementById(`contenedorprod`);
const contadoricon = document.getElementById("contadoricon");
const carritoestru = document.getElementById("carritoestru");
const vaciar = document.getElementById("vaciar");
const comprar = document.getElementById("comprar");
const precioTotal = document.getElementById("precioTotal");
const productostotal = document.getElementById("productosTotal");
let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    actualizar();
  }
});
//inserta los productos en el HTML

window.onload = function() {
  ordenar();
}

const ordenar = () => {
  contenedorprod.innerHTML = "";
productos.forEach((funko) => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.classList.add("col-12");
  div.classList.add("col-md-6");
  div.innerHTML = `
    <h2 class="${funko.tipo} nomprod">${funko.serie}</h2>
    <h3 class="nomprod">${funko.nombre}</h3>
    <img class="prodimg mx-auto d-block" src=${funko.imagen} alt="${funko.nombre}">
    <figcaption class="figure-caption palabra">${funko.Mensaje}</figcaption>
    <div class="datosprod">
        <h4 class="precios">${funko.precio}$</h4>
        <button class="btn btn-primary" id="agregar${funko.id}">Añadir al carrito</button>
    </div>
    `;
  contenedorprod.appendChild(div);

  const boton = document.getElementById(`agregar${funko.id}`);

  boton.addEventListener(`click`, () => {
    agregaralcarr(funko.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 1800,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Su producto se a añadido con exito'
    })
    
  });
});
}

//agrega los productos a la array del carrito

const agregaralcarr = (prodId) => {
  const existe = carrito.some((prod) => prod.id === prodId);
  if (existe) {
    const prod = carrito.map((prod) => {
      if (prod.id === prodId) {
        prod.cantidad++;
      }
    });
  } else {
    const item = productos.find((prod) => prod.id === prodId);
    carrito.push(item);
  }
  console.log(carrito, `el producto se agrego con exito`);
  actualizar();
};

//inserta el array carrito a la seccion de carrito de compras

const actualizar = () => {
  carritoestru.innerHTML = "";
  
  carrito.forEach((prod) => {
    
//actualiza el valor de subprecio de cada producto 

  prod.subprecio = prod.precio * prod.cantidad;
    const div = document.createElement(`div`);
    div.classList.add("lista");
    div.innerHTML = `
        <table class="table ${prod.tipo}">
        <tbody>
            <tr>
                <th scope="row" width="25"><input type="number" min="1" class="input contadoract" value="${prod.cantidad}"></th>
                <td width="90">${prod.nombre}</td>
                <td width="60">$${prod.precio}<sup>.00</sup></td>
                <td width="60">$${prod.subprecio}<sup>.00</sup></td>
                <td><button onclick="eliminar(${prod.id})" type="button" class="btn btn-danger eliminar"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z"></path><path d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"></path></svg></button></td>
            </tr>
        </tbody>
        </table>
        `;

        div.querySelector(".contadoract").addEventListener("change", function(event) {
          const cantidad = event.target.value;
          prod.cantidad =  Number(cantidad);
          prod.subprecio = prod.precio * prod.cantidad;
          div.querySelector("td:nth-child(4)").innerHTML = `$${prod.subprecio}<sup>.00</sup>`;
          localStorage.setItem("carrito", JSON.stringify(carrito));
          calculos();
        });

    carritoestru.appendChild(div);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  });

  
const totalCantidades = carrito.reduce((acum, prod) => acum + prod.cantidad, 0);
console.log("Total de productos:", totalCantidades);

  contadoricon.innerHTML = carrito.length;
  calculos();
};

const calculos = () => {
  const prodtotal = carrito.reduce(
    (accc, prod) => accc + prod.cantidad,
    0
  );

  const sumatotal = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );

  //ordena el carrito de mayor a menor gasto
  carrito.sort((a, b) => {
    return b.subprecio - a.subprecio;
  });

  productostotal.innerText = prodtotal
  precioTotal.innerText = sumatotal

}

//elimina los productos del carrito

const eliminar = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId);

  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  actualizar();
  console.log(carrito);
};

//vaciar por completo el carrito

vaciar.addEventListener("click", () => {
  carrito.length = 0;
  localStorage.removeItem("carrito");
  actualizar();
});

//comprar

comprar.addEventListener("click", () => {

if(carrito.length === 0){
    Swal.fire({
        position: "top-end",
        icon: 'error',
        title: "Aun no compras nada",
        showConfirmButton: false,
        timer: 1200,
      });
} else{
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tu compra a sido realizada",
        showConfirmButton: false,
        timer: 1200,
      });
      localStorage.removeItem("carrito");
      carrito.length = 0;
      actualizar();
}
});

const boton2 =  document.getElementById("actual") 
boton2.addEventListener(`click`, () => {
actualizar()
})

//ordena los productos en le HTML

orden1.addEventListener(`click`, () => {
  productos.sort((a, b) => {
    return b.precio - a.precio;
  });
  ordenar();
});

orden2.addEventListener(`click`, () => {
  productos.sort((a, b) => {
    return a.precio - b.precio;
  });
  ordenar();
});

orden3.addEventListener(`click`, () => {
  productos.sort(function (a, b) {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
  });
  ordenar();
});

orden4.addEventListener(`click`, () => {
    productos.sort(function (a, b) {
      if (a.nombre < b.nombre) {
        return 1;
      }
      if (a.nombre > b.nombre) {
        return -1;
      }
      return 0;
    });
    ordenar();
  });

  orden5.addEventListener(`click`, () => {
    productos.sort((a, b) => {
      return a.id - b.id;
    });
    ordenar();
  });
  