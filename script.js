// FUNCIÓN: Solo mayúsculas y letras para nombre y apellidos
// Si escribes en minúsculas, se convierte solo a mayúsculas
// Si escribes números o símbolos, los borra

function soloMayusculasLetras(id) {
  const campo = document.getElementById(id);
  campo.addEventListener('input', function() {
    this.value = this.value
      .toUpperCase()
      .replace(/[^A-ZÁÉÍÓÚÑ ]/g, '');
  });
}

soloMayusculasLetras('nombre');
soloMayusculasLetras('paterno');
soloMayusculasLetras('materno');

// SOLO NÚMEROS PARA EDAD
document.getElementById('edad').addEventListener('input', function() {
  this.value = this.value.replace(/[^0-9]/g, '');
});

// SOLO NÚMEROS PARA TARJETA - MÁXIMO 16 DÍGITOS
document.getElementById('tarjeta').addEventListener('input', function() {
  this.value = this.value.replace(/[^0-9]/g, '').slice(0, 16);
});

// CALCULAR EDAD AUTOMÁTICA DESDE FECHA DE NACIMIENTO
document.getElementById('fechaNacimiento').addEventListener('change', function() {
  const nacimiento = new Date(this.value);
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  if (edad >= 0) {
    document.getElementById('edad').value = edad;
  }
});

// AL DARLE REGISTRARSE - MENSAJE Y LIMPIAR FORMULARIO
document.getElementById('miFormulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const tarjeta = document.getElementById('tarjeta').value;
  if (tarjeta.length !== 16) {
    alert('El número de tarjeta debe tener exactamente 16 números');
    return;
  }

  // 1. Mostrar mensaje de éxito
  const mensaje = document.getElementById('mensajeExito');
  mensaje.textContent = '¡Registrado exitosamente!';
  mensaje.style.display = 'block';

  // 2. Limpiar todo el formulario para volverlo a llenar
  this.reset();

  // 3. Que el mensaje se quite solo a los 3 segundos
  setTimeout(function() {
    mensaje.style.display = 'none';
  }, 3000);
});

 const boton = document.getElementById('menuBoton');
    const menu = document.getElementById('menu');
    boton.addEventListener('click', () => menu.classList.toggle('abierto'));
    menu.querySelectorAll('a').forEach(enlace => enlace.addEventListener('click', () => menu.classList.remove('abierto')));