// ===== TOGGLE TEMA OSCURO =====
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const html = document.documentElement;
    
    // Cargar tema guardado o preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    html.setAttribute('data-theme', currentTheme);
    
    // Actualizar icono
    updateThemeIcon(currentTheme);
    
    // Alternar tema
    themeToggle.addEventListener('click', () => {
        const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
            themeToggle.querySelector('span').textContent = 'Tema Claro';
        } else {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
            themeToggle.querySelector('span').textContent = 'Tema Oscuro';
        }
    }
    
    // ===== MEJORAS PARA MÓVILES =====
    if (window.innerWidth < 768) {
        // Ajustar textarea
        const textarea = document.querySelector('textarea');
        if (textarea) {
            textarea.style.minHeight = '80px';
        }
        
        // Simplificar texto en móviles
        themeToggle.querySelector('span').textContent = '';
    }
    
    // ===== ANIMACIONES =====
    // Efecto al marcar como completado
    document.querySelectorAll('.task-completed').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const taskItem = this.closest('.task-item');
            if (this.checked) {
                taskItem.style.opacity = '0.6';
                taskItem.querySelector('.task-title').style.textDecoration = 'line-through';
            } else {
                taskItem.style.opacity = '1';
                taskItem.querySelector('.task-title').style.textDecoration = 'none';
            }
        });
    });
    
    // Ajustar al teclado virtual
    document.querySelectorAll('input, textarea').forEach(el => {
        el.addEventListener('focus', () => {
            window.scrollTo({
                top: el.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
});

// ===== MANEJO DE ERRORES =====
window.onerror = function(message, source, lineno, colno, error) {
    console.error('Error:', message, 'en', source, 'línea', lineno);
};