document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Función para mostrar una sección específica
    function showSection(sectionId) {
        // Ocultar todas las secciones
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar la sección seleccionada
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }
        
        // Actualizar clases activas en los enlaces de navegación
        navLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Agregar evento click a cada enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
            
            // Actualizar la URL sin recargar la página
            history.pushState(null, null, `#${sectionId}`);
        });
    });
    
    // Manejar la navegación con el botón atrás/adelante del navegador
    window.addEventListener('popstate', function() {
        const sectionId = window.location.hash.slice(1) || 'inicio';
        showSection(sectionId);
    });
    
    // Mostrar la sección correcta al cargar la página
    const initialSection = window.location.hash.slice(1) || 'inicio';
    showSection(initialSection);
});

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar las barras de habilidades
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.setProperty('--skill-width', `${level}%`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});