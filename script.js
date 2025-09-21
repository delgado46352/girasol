document.addEventListener('click', function(event) {
    // Obtenemos las coordenadas del clic del usuario
    const x = event.clientX;
    const y = event.clientY;

    // Creamos un nuevo elemento div
    const newSunflower = document.createElement('div');
    newSunflower.classList.add('sunflower');

    // Posicionamos el girasol donde el usuario hizo clic
    newSunflower.style.left = `${x - 40}px`; // Ajustamos para que el centro del girasol sea el punto de clic
    newSunflower.style.top = `${y - 40}px`;   // El tamaño de la imagen es de 80px, por eso restamos 40

    // Añadimos el nuevo girasol al cuerpo del documento
    document.body.appendChild(newSunflower);

    // Opcional: Eliminar los girasoles después de un tiempo para evitar sobrecargar la página
    setTimeout(() => {
        newSunflower.remove();
    }, 5000); // El girasol desaparecerá después de 5 segundos
});