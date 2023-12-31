function mostrarContenido(seccion) {
    var contenido = document.getElementById('contenido-dinamico');
    contenido.innerHTML = ''; // Limpiar el contenido anterior

    switch (seccion) {
        case 'servicios':
            contenido.innerHTML = `
                <h2>Nuestros Servicios</h2>
                <p>Ofrecemos una variedad de servicios para satisfacer tus necesidades:</p>
                <h3>Servicios de Diseño de Páginas Web</h3>
                <ul>
                    <li>Diseño web atractivo y moderno</li>
                    <li>Creación de interfaces de usuario intuitivas</li>
                    <li>Optimización de la experiencia del usuario</li>
                </ul>
                <h3>Servicios de Programación de Páginas Web</h3>
                <ul>
                    <li>Desarrollo con HTML, CSS y JavaScript</li>
                    <li>Integración de bases de datos</li>
                    <li>Desarrollo de funcionalidades personalizadas</li>
                </ul>`;
            break;
        case 'portfolio':
            contenido.innerHTML = `
                <h2>Portfolio</h2>
                <div class="proyecto">
                    <img src="laptop.jpg" alt="Proyecto 1">
                    <p>Descripción del Proyecto 1</p>
                </div>
                <div class="proyecto">
                    <img src="lapto.jpg" alt="Proyecto 2">
                    <p>Descripción del Proyecto 2</p>
                </div>`;
            break;
        case 'contacto':
            contenido.innerHTML = `
                <h2>Contacto</h2>
                <p>¡Contáctanos para discutir tu próximo proyecto!</p>
                <form id="formulario-contacto">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <input type="submit" value="Enviar">
                </form>`;
            document.getElementById('formulario-contacto').addEventListener('submit', function (event) {
                event.preventDefault();
                enviarFormularioContacto();
            });
            break;
        case 'mas-servicios':
            contenido.innerHTML = `
                <h2>Más Servicios</h2>
                <p>Ampliamos nuestra oferta con servicios adicionales:</p>
                <h3>Diseño Gráfico</h3>
                <ul>
                    <li>Creación de logotipos e identidad visual</li>
                    <li>Diseño de materiales de marketing</li>
                    <li>Ilustraciones personalizadas</li>
                </ul>
                <h3>Desarrollo de Aplicaciones Web</h3>
                <ul>
                    <li>Creación de aplicaciones web interactivas</li>
                    <li>Desarrollo de aplicaciones con tecnologías modernas</li>
                    <li>Optimización para dispositivos móviles</li>
                </ul>`;
            break;
        case 'opiniones':
            contenido.innerHTML = `
                <h2>Opiniones</h2>
                <div id="comentarios">
                    <!-- Aquí se mostrarán los comentarios existentes -->
                </div>
                <h3>Deja tu comentario</h3>
                <form id="formulario-comentario">
                    <label for="nombre-comentario">Nombre:</label>
                    <input type="text" id="nombre-comentario" required>

                    <label for="comentario">Comentario:</label>
                    <textarea id="comentario" required></textarea>

                    <input type="submit" value="Enviar Comentario">
                </form>`;
            document.getElementById('formulario-comentario').addEventListener('submit', function (event) {
                event.preventDefault();
                agregarComentario();
            });
            document.getElementById('comentarios').scrollIntoView({ behavior: 'smooth' });
            break;
        default:
            contenido.innerHTML = '<p>Selecciona una sección para ver el contenido.</p>';
    }
    // Desplazamiento suave al contenido
    contenido.scrollIntoView({ behavior: 'smooth' });
}

function agregarComentario() {
    var nombre = document.getElementById('nombre-comentario').value;
    var comentario = document.getElementById('comentario').value;

    if (nombre.trim() === '' || comentario.trim() === '') {
        alert('Por favor, completa todos los campos del formulario.');
        return;
    }

    var comentariosDiv = document.getElementById('comentarios');
    var nuevoComentario = document.createElement('div');
    nuevoComentario.innerHTML = `<p><strong>${nombre}</strong>: ${comentario}</p>`;
    comentariosDiv.appendChild(nuevoComentario);

    // Limpia los campos después de agregar el comentario
    document.getElementById('nombre-comentario').value = '';
    document.getElementById('comentario').value = '';
}

function enviarFormularioContacto() {
    // Lógica para enviar el formulario de contacto al servidor
    alert('Formulario enviado correctamente.');
}