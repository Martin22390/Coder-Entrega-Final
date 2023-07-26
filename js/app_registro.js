document.addEventListener('DOMContentLoaded', function() {
    const formularioRegistro = document.getElementById('registro-formulario');
    formularioRegistro.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
      // Obtener los valores ingresados por el usuario
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const email = document.getElementById('email').value;
      const contraseña = document.getElementById('contraseña').value;
      const confirmarContraseña = document.getElementById('confirmar-contraseña').value;
  
      // Validar el formulario
      if (!validarRegistro(nombre, apellido, email, contraseña, confirmarContraseña)) {
        return; // Detener la ejecución si el formulario no es válido
      }
  
      // Verificar si el email ya está registrado
      if (emailRegistrado(email)) {
        alert('El email ingresado ya está registrado. Por favor, utiliza otro email.');
        return; // Detener la ejecución si el email ya está registrado
      }
  
      // Guardar los datos del registro en el almacenamiento local o en tu base de datos
      guardarRegistro(nombre, apellido, email, contraseña);
  
      // Mostrar mensaje de bienvenida
      mostrarMensajeBienvenida(nombre);
  
      // Restablecer el formulario
      formularioRegistro.reset();
    });
  });
  
  function validarRegistro(nombre, apellido, email, contraseña, confirmarContraseña) {
    // Validar que todos los campos estén completos
    if (!nombre || !apellido || !email || !contraseña || !confirmarContraseña) {
      alert('Por favor, completa todos los campos del formulario.');
      return false; // El formulario no es válido
    }
  
    // Validar el formato del email
    if (!validarFormatoEmail(email)) {
      alert('Por favor, ingresa un email válido.');
      return false; // El formulario no es válido
    }
  
    // Validar que las contraseñas coincidan
    if (contraseña !== confirmarContraseña) {
      alert('Las contraseñas ingresadas no coinciden.');
      return false; // El formulario no es válido
    }
  
    return true; // El formulario es válido
  }
  
  function validarFormatoEmail(email) {
    // Utiliza una expresión regular para validar el formato del email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }
  
  function emailRegistrado(email) {
    // Verificar si el email ya está registrado en el almacenamiento local o en tu base de datos
    // Aquí puedes utilizar tu propia lógica para verificar el email registrado
    // Por simplicidad, supondremos que el email se encuentra en el almacenamiento local
    const registrosGuardados = JSON.parse(localStorage.getItem('registros')) || [];
    return registrosGuardados.some(registro => registro.email === email);
  }
  
  function guardarRegistro(nombre, apellido, email, contraseña) {
    // Guardar los datos del registro en el almacenamiento local o en tu base de datos
    // Aquí puedes utilizar tu propia lógica para guardar los datos del registro
    // Por simplicidad, los guardaremos en el almacenamiento local
    const nuevoRegistro = {
      nombre,
      apellido,
      email,
      contraseña
    };
    const registrosGuardados = JSON.parse(localStorage.getItem('registros')) || [];
    registrosGuardados.push(nuevoRegistro);
    localStorage.setItem('registros', JSON.stringify(registrosGuardados));
  
    // Mostrar el registro del correo electrónico en la consola
    console.log('Registro guardado:', nuevoRegistro);
  }
  
  function mostrarMensajeBienvenida(nombre) {
    // Utiliza SweetAlert2 para mostrar un mensaje de bienvenida personalizado
    Swal.fire({
      title: `¡Bienvenido/a, ${nombre}!`,
      text: 'Gracias por registrarte en Fonzi.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }
  