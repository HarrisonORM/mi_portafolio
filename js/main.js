// Lógica de interfaz de usuario

// CAMBIAR FONDO DEL HEADER AL SCROLL
function scrollHeader() {
    const header = document.getElementById('header');
    
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header'); 
        
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/**
 * Animación de entrada por scroll (una sola vez por elemento).
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * Efecto tilt sutil para cards.
 */
function initInteractiveCards() {
  const cards = document.querySelectorAll('.project__card');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      if (motionPreference.matches) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 4;
      const rotateX = -((y / rect.height) - 0.5) * 4;
      card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  motionPreference.addEventListener('change', (event) => {
    if (event.matches) cards.forEach((card) => { card.style.transform = ''; });
  });
}

/**
 * Toggle accesible del menú móvil.
 */
function initNavToggleA11y() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('show-menu');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

/**
 * Lógica de Modo Claro / Oscuro (GARANTIZADO: Oscuro por defecto)
 */
function initThemeToggle() {
    const themeButton = document.getElementById('theme-button');
    if (!themeButton) return;
    
    const lightTheme = 'light-theme';
    const iconSun = 'bx-sun';   // Ícono para pasar a Claro
    const iconMoon = 'bx-moon'; // Ícono para pasar a Oscuro
    
    // 1. Obtenemos el tema elegido. Si no existe, es null.
    let selectedTheme = localStorage.getItem('selected-theme');
    
    // Si tu navegador quedó 'atascado' en light por pruebas anteriores pero esta es 
    // la primera vez que visitas con este nuevo código, forzamos a ser oscuro.
    if (!selectedTheme) {
        selectedTheme = 'dark';
        localStorage.setItem('selected-theme', 'dark');
    }

    // 2. Aplicamos el estado inicial basado estrictamente en la variable.
    if (selectedTheme === 'light') {
        document.body.classList.add(lightTheme);
        themeButton.querySelector('i').classList.replace(iconSun, iconMoon);
    } else {
        // OSCURO POR DEFECTO
        document.body.classList.remove(lightTheme);
        themeButton.querySelector('i').classList.remove(iconMoon); // limpiamos por si acaso
        themeButton.querySelector('i').classList.add(iconSun);
    }
  
    // 3. Lógica al presionar el botón
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(lightTheme);
        const icon = themeButton.querySelector('i');
        
        if (document.body.classList.contains(lightTheme)) {
            icon.classList.replace(iconSun, iconMoon);
            localStorage.setItem('selected-theme', 'light');
        } else {
            icon.classList.replace(iconMoon, iconSun);
            localStorage.setItem('selected-theme', 'dark');
        }
    });
}

/**
 * Función para actualizar el enlace activo según la sección visible
 */
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Remover clase active-link de todos los enlaces
                navLinks.forEach(link => link.classList.remove('active-link'));
                
                // Agregar clase active-link al enlace correspondiente
                const activeLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active-link');
                }
            }
        });
    }, {
        threshold: 0.3, // Se activa cuando el 30% de la sección es visible
        rootMargin: '-20% 0px -70% 0px' // Ajuste para cambiar antes
    });

    sections.forEach(section => observer.observe(section));
}

/**
 * Entrypoint: inicializa solo los módulos realmente usados.
 */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initInteractiveCards();
  initNavToggleA11y();
  initThemeToggle();
});

