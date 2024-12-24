document.querySelectorAll('.btn-redes').forEach(function(btn) {
    btn.addEventListener('click', function(event) {
      event.preventDefault(); // Previene la acción predeterminada del enlace
  
      // Mostrar el contenedor de carga
      const loadingContainer = document.getElementById('loading-container');
      const loadingImg = document.getElementById('loading-img');
      const redSocial = event.target.closest('a').getAttribute('data-red');
      
      // Cambiar la imagen de carga según la red social
      loadingImg.src = `Imagenes/logos/${redSocial}.png`;
  
      loadingContainer.style.display = 'flex';
  
      // Después de 2 segundos, redirigir a la URL
      setTimeout(function() {
        window.open(event.target.closest('a').href, '_blank');
        loadingContainer.style.display = 'none'; // Ocultar contenedor de carga
      }, 2000);
    });
  });
  