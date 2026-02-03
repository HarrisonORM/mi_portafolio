/**
 * GITHUB API MODULE
 * Este módulo consume la API oficial de GitHub para mostrar datos reales del perfil.
 */

// 1. Definimos tu usuario real
const GITHUB_USERNAME = 'HarrisonORM';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

/**
 * Función para renderizar los datos en el DOM
 * @param {Object} data - Objeto JSON retornado por la API
 */
const renderGitHubStats = (data) => {
    const container = document.getElementById('github-api-data');
    
    // Aquí inyectamos la info real de tu cuenta
    container.innerHTML = `
        <div class="api__wrapper" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
            <div style="display: flex; gap: 2rem; justify-content: center; width: 100%;">
                <div class="stat-item">
                    <p style="color: var(--first-color); font-weight: bold; font-size: 1.5rem; margin: 0;">${data.public_repos}</p>
                    <span style="font-size: 0.8rem; color: var(--text-color-light);">Repositorios</span>
                </div>
                <div class="stat-item">
                    <p style="color: var(--first-color); font-weight: bold; font-size: 1.5rem; margin: 0;">${data.followers}</p>
                    <span style="font-size: 0.8rem; color: var(--text-color-light);">Seguidores</span>
                </div>
            </div>
            
            <a href="${data.html_url}" target="_blank" class="button button--small" style="padding: 0.5rem 1rem; font-size: 0.8rem;">
                Ver mi perfil de GitHub <i class='bx bxl-github'></i>
            </a>
        </div>
    `;

    // foto de perfil se cargue desde GitHub automáticamente:
    const profileImg = document.querySelector('.about__img-placeholder img');
    if (profileImg) {
        profileImg.src = data.avatar_url;
        profileImg.style.display = 'block';
        const userIcon = document.querySelector('.about__img-placeholder i');
        if (userIcon) userIcon.style.display = 'none';
    }
};

/**
 * Lógica asíncrona principal
 */
async function getGithubData() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) throw new Error('Error al conectar con la API');

        const data = await response.json();
        renderGitHubStats(data);

    } catch (error) {
        console.error('Error en el fetch:', error);
        document.getElementById('github-api-data').innerHTML = `
            <p style="color: #ff6b6b; font-size: 0.8rem;">
                No se pudo sincronizar con GitHub. Revisa tu conexión.
            </p>
        `;
    }
}


getGithubData();