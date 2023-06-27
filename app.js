

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

/* Comenzamos función para agregar un producto al carrito */
function agregarAlCarrito(nombreProducto) {
  /* Buscar el producto en el array por su nombre */
  const producto = productos.find(function(p) {
    return p.nombre === nombreProducto;
  });

  /* me fijo  si el producto ya está en el carrito */
  const productoExistente = carrito.find(function(item) {
    return item.nombre === nombreProducto;
  });

  if (productoExistente) {

    productoExistente.cantidad++;
  } else {

    carrito.push({ ...producto, cantidad: 1 });
  }

  // Guardar el carrito en el almacenamiento local CHATGPT
  localStorage.setItem('carrito', JSON.stringify(carrito));

  console.log('Carrito actualizado:', carrito);

  calcularTotalCarrito();
}

function calcularTotalCarrito() {
  
  let precioTotal = 0;

  carrito.forEach(function(producto) {
    
    const precioProducto = producto.precio * producto.cantidad;

    precioTotal += precioProducto;
  });
  

  console.log('Precio total del carrito:', precioTotal);
}

/* CODIGO CON CHAT GPT PRUEBA*/
document.addEventListener('DOMContentLoaded', function() {
  // Obtener el carrito del almacenamiento local
  const carrito = JSON.parse(localStorage.getItem('carrito'));

  // Verificar si el carrito existe
  if (carrito && carrito.length > 0) {
    const carritoContainer = document.getElementById('carrito-container');
    let carritoHTML = '';

    // Generar el contenido HTML del carrito html ya utilizado en desarroloweb
    carrito.forEach(function(producto) {
      carritoHTML += '<div class="cart-item">';
      carritoHTML += `<img src="https://via.placeholder.com/100x100" alt="${producto.nombre}">`;
      carritoHTML += '<div class="cart-item-info">';
      carritoHTML += `<h3>${producto.nombre}</h3>`;
      carritoHTML += `<p>Precio: $${producto.precio}</p>`;
      carritoHTML += `<p>Cantidad: ${producto.cantidad}</p>`;
      carritoHTML += '</div>';
      carritoHTML += '<button class="cart-item-remove">Eliminar</button>';
      carritoHTML += '</div>';
    });

    // Insertar el contenido HTML en el contenedor del carrito
    carritoContainer.innerHTML = carritoHTML;
  }
});
