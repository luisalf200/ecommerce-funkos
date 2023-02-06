const contadoricon = document.getElementById("contadoricon");
const carritoestru = document.getElementById("carritoestru");
const precioTotal = document.getElementById("precioTotal");
const productostotal = document.getElementById("productosTotal");
var storedCart = JSON.parse(localStorage.getItem("carrito"));

contadoricon.innerHTML = storedCart.length;
precioTotal.innerText = storedCart.reduce(
  (acc, prod) => acc + prod.cantidad * prod.precio,
  0
);
productostotal.innerText = storedCart.reduce(
  (accc, prod) => accc + prod.cantidad,
  0
);

storedCart.forEach((prod) => {
  const div = document.createElement(`div`);
  div.classList.add("lista");
  div.innerHTML = `
        <table class="table">
        <tbody>
            <tr>
                <th scope="row">${prod.cantidad}</th>
                <td>${prod.nombre}</td>
                <td>${prod.serie}</td>
                <td>${prod.precio}</td>
            </tr>
        </tbody>
        </table>
        `;

  carritoestru.appendChild(div);
});
