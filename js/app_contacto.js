document.addEventListener('DOMContentLoaded', function() {
  const formularioContacto = document.querySelector('.contacto-form');
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const mensajeInput = document.getElementById('mensaje');

  formularioContacto.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente

    // Validar los campos del formulario
    if (nombreInput.value === '' || emailInput.value === '' || mensajeInput.value === '') {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, complete todos los campos del formulario.',
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
      return;
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value)) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingrese un correo electrónico válido.',
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
      return;
    }

    // Enviar el formulario
    Swal.fire({
      title: 'Éxito',
      text: 'El formulario se ha enviado con éxito.',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });

    // Limpiar los campos del formulario después de enviarlo
    nombreInput.value = '';
    emailInput.value = '';
    mensajeInput.value = '';
  });
});