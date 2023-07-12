document.addEventListener('DOMContentLoaded', function() {
    const formularioContacto = document.querySelector('.contacto-form');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');
  
    formularioContacto.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que se envíe el formulario automáticamente
  
      // Validar los campos del formulario
      if (nombreInput.value === '' || emailInput.value === '' || mensajeInput.value === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return;
      }
  
      // Validar el formato del correo electrónico
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(emailInput.value)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
      }
  
      // Enviar el formulario (aquí puedes agregar el código para enviar los datos a través de AJAX o realizar alguna otra acción)
      alert('El formulario se ha enviado con éxito.');
  
      // Limpiar los campos del formulario después de enviarlo
      nombreInput.value = '';
      emailInput.value = '';
      mensajeInput.value = '';
    });
  });
  