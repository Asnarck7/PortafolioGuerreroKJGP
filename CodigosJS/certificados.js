// certificados
function toggleImage(image) {
  // Alterna la clase 'enlarged' para agrandar o reducir la imagen
  if (image.classList.contains("enlarged")) {
    image.classList.remove("enlarged");
  } else {
    // Se asegura de que todas las imágenes estén en su tamaño original
    const images = document.querySelectorAll('.certificado-icon');
    images.forEach(img => img.classList.remove('enlarged'));

    image.classList.add("enlarged");
  }
}