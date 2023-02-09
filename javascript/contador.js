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
  const pre1 = prod.precio * prod.cantidad
  const div = document.createElement(`div`);
  div.classList.add("lista");
  div.innerHTML = `
        <table class="table ${prod.tipo}">
        <tbody>
            <tr>
                <th scope="row" width="10">${prod.cantidad}</th>
                <td width="100">${prod.nombre}</td>
                <td width="70">${prod.serie}</td>
                <td width="70">$${prod.precio}</td>
                <td>$${pre1}</td>
            </tr>
        </tbody>
        </table>
        `;

  carritoestru.appendChild(div);
});


