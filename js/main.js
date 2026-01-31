/* * MAIN JS
 * Lógica de interfaz de usuario
 */

/* --- 1. CAMBIAR FONDO DEL HEADER AL SCROLL --- */
function scrollHeader() {
    const header = document.getElementById('header');
    // Cuando el scroll es mayor a 50 de altura viewport, agregar clase scroll-header
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header'); 
        // Nota: Deberías agregar .scroll-header en css/header.css con background oscuro si quieres efecto extra
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/* --- 2. LOG PARA RECLUTADORES --- */
// Un detalle cool: si un programador abre la consola (F12), verá esto.
console.log(
    "%c ¡Hola! 👋 Gracias por revisar mi código.", 
    "color: #00ffaa; background: #222; font-size: 1.2rem; padding: 0.5rem; border-radius: 5px;"
);
console.log("Este portafolio fue construido con HTML5 Semántico, CSS Modular y JS Vanilla.");