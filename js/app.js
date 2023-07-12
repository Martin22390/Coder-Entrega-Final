const productos = [
  {
    nombre: 'Fonzo-azul',
    precio: 12999,
    color: 'Azul',
    idioma: 'Castellano'
  },
  {
    nombre: 'Fonzo-rosa',
    precio: 12999,
    color: 'Rosa',
    idioma: 'Castellano'
  },
  {
    nombre: 'Fonzo-violeta',
    precio: 12999,
    color: 'Violeta',
    idioma: 'Castellano'
  },
  {
    nombre: 'Fonzo-azul-ingles',
    precio: 15999,
    color: 'Azul',
    idioma: 'Inglés'
  },
  {
    nombre: 'Fonzo-rosa-ingles',
    precio: 15999,
    color: 'Rosa',
    idioma: 'Ingles'
  },
  {
    nombre: 'Fonzo-violeta-ingles',
    precio: 15999,
    color: 'Violeta',
    idioma: 'Inglés'
  }
];

let carrito = [];

    function agregarAlCarrito(nombreProducto) {
      const producto = productos.find(function(p) {
        return p.nombre === nombreProducto;
      });

      const productoExistente = carrito.find(function(item) {
        return item.nombre === nombreProducto;
      });

      if (productoExistente) {
        productoExistente.cantidad++;
      } else {
        carrito.push({ ...producto, cantidad: 1 });
      }

      localStorage.setItem('carrito', JSON.stringify(carrito));
      console.log('Carrito actualizado:', carrito);
      calcularTotalCarrito();
      mostrarCarrito();
    }

    function calcularTotalCarrito() {
      let precioTotal = 0;

      carrito.forEach(function(producto) {
        const precioProducto = producto.precio * producto.cantidad;
        precioTotal += precioProducto;
      });

      const totalElement = document.querySelector('.parrafo-total');
      totalElement.textContent = `Total: $${precioTotal}`;
    }

    function eliminarDelCarrito(index) {
      const producto = carrito[index];
      if (producto.cantidad > 1) {
        producto.cantidad--;
      } else {
        carrito.splice(index, 1);
      }

      localStorage.setItem('carrito', JSON.stringify(carrito));
      calcularTotalCarrito();
      mostrarCarrito();
    }

    function mostrarCarrito() {
      const carritoContainer = document.getElementById('carrito-container');
      carritoContainer.innerHTML = '';

      carrito.forEach(function(producto) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const img = document.createElement('img');
        img.src = 'https://via.placeholder.com/100x100';
        img.alt = producto.nombre;

        const cartItemInfo = document.createElement('div');
        cartItemInfo.classList.add('cart-item-info');

        const h3 = document.createElement('h3');
        h3.textContent = producto.nombre;

        const precio = document.createElement('p');
        precio.textContent = `Precio: $${producto.precio}`;

        const cantidad = document.createElement('p');
        cantidad.textContent = `Cantidad: ${producto.cantidad}`;

        const button = document.createElement('button');
        button.classList.add('cart-item-remove');
        button.textContent = 'Eliminar';

        cartItemInfo.appendChild(h3);
        cartItemInfo.appendChild(precio);
        cartItemInfo.appendChild(cantidad);
        cartItem.appendChild(img);
        cartItem.appendChild(cartItemInfo);
        cartItem.appendChild(button);
        carritoContainer.appendChild(cartItem);

        button.addEventListener('click', function() {
          eliminarDelCarrito(carrito.indexOf(producto));
        });
      });
    }

    document.addEventListener('DOMContentLoaded', function() {
      const carritoLocal = JSON.parse(localStorage.getItem('carrito'));

      if (carritoLocal && carritoLocal.length > 0) {
        carrito = carritoLocal;
        mostrarCarrito();
        calcularTotalCarrito();
      }
    });

    const botonPagar = document.querySelector('.cart-checkout');
    botonPagar.addEventListener('click', function() {
      alert('¡Gracias por tu compra!');
      carrito = [];
      localStorage.removeItem('carrito');
      calcularTotalCarrito();
      mostrarCarrito();
    });

