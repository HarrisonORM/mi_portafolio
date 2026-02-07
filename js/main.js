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

