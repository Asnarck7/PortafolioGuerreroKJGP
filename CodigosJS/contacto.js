// Definimos el "usuario administrador" con tu correo
const adminUsuario = "kevinjgp0@gmail.com"; // Tu correo como administrador

// Variable que guarda el correo del usuario logueado
let usuarioLogueado = "kevinjgp0@gmail.com"; // Aquí deberías tener el correo del usuario que se "loguea"

// Verifica si hay mensajes guardados en el localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  cargarMensajes();
});

// Escuchar el evento de envío del formulario
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario
  
  // Obtén los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  
  // Crea un objeto para almacenar el mensaje
  const nuevoMensaje = {
    nombre: nombre,
    email: email,
    mensaje: mensaje,
    fecha: new Date().toLocaleString()
  };
  
  // Guarda el mensaje en el localStorage
  let mensajesGuardados = JSON.parse(localStorage.getItem("mensajes")) || [];
  mensajesGuardados.push(nuevoMensaje);
  localStorage.setItem("mensajes", JSON.stringify(mensajesGuardados));

  // Limpia los campos del formulario
  document.getElementById("contactForm").reset();
  
  // Recarga los mensajes para reflejar los cambios
  cargarMensajes();
});

// Función para cargar los mensajes desde el localStorage
function cargarMensajes() {
  const tabla = document.getElementById("tablaMensajes").querySelector("tbody");
  tabla.innerHTML = ""; // Limpiar tabla antes de recargar

  // Obtener los mensajes guardados
  let mensajesGuardados = JSON.parse(localStorage.getItem("mensajes")) || [];

  // Añadir los mensajes a la tabla
  mensajesGuardados.forEach((mensaje, index) => {
    const nuevaFila = document.createElement("tr");
    
    // Añadir el botón de eliminar solo si el usuario es el administrador
    const botonEliminar = usuarioLogueado === adminUsuario ? 
      `<button class="eliminar-btn" data-index="${index}">Eliminar</button>` : "";

    nuevaFila.innerHTML = `
      <td>${mensaje.nombre}</td>
      <td>${mensaje.email}</td>
      <td>${mensaje.mensaje}</td>
      <td>${mensaje.fecha}</td>
      <td>${botonEliminar}</td>
    `;
    
    // Agrega la fila a la tabla
    tabla.appendChild(nuevaFila);

    // Asignar el evento de eliminación solo si el usuario es el administrador
    if (usuarioLogueado === adminUsuario) {
      nuevaFila.querySelector(".eliminar-btn").addEventListener("click", function () {
        eliminarMensaje(index); // Eliminar el mensaje del localStorage
      });
    }
  });
}

// Función para eliminar un mensaje del localStorage
function eliminarMensaje(index) {
  let mensajesGuardados = JSON.parse(localStorage.getItem("mensajes")) || [];
  mensajesGuardados.splice(index, 1); // Eliminar el mensaje en la posición indicada
  localStorage.setItem("mensajes", JSON.stringify(mensajesGuardados)); // Guardar los cambios
  cargarMensajes(); // Recargar los mensajes para reflejar la eliminación
}

