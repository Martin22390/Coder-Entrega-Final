

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

  // Variable para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto) {
  // Buscar el producto en el array por su nombre
  const producto = productos.find(function(p) {
    return p.nombre === nombreProducto;
  });

  // Verificar si el producto ya está en el carrito
  const productoExistente = carrito.find(function(item) {
    return item.nombre === nombreProducto;
  });

  if (productoExistente) {
    // Si el producto ya está en el carrito, aumentar la cantidad
    productoExistente.cantidad++;
  } else {
    // Si el producto no está en el carrito, agregarlo
    carrito.push({ ...producto, cantidad: 1 });
  }

   // Mostrar el carrito actualizado (puedes personalizar esto según tus necesidades)
  console.log('Carrito actualizado:', carrito);

  calcularTotalCarrito()
  
}

  function calcularTotalCarrito() {
    // Variable para almacenar el precio total
    let precioTotal = 0;
  
    // Recorrer los productos en el carrito
    carrito.forEach(function(producto) {
      // Calcular el precio total del producto (precio * cantidad)
      const precioProducto = producto.precio * producto.cantidad;
  
      // Sumar el precio del producto al precio total
      precioTotal += precioProducto;
    });
  
    // Mostrar el precio total en la consola
    console.log('Precio total del carrito:', precioTotal);
  }
