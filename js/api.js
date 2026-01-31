/* * API MODULE
 * Se encarga de conectar con GitHub para traer datos reales.
 * Documentación: https://docs.github.com/es/rest
 */

// TU USUARIO DE GITHUB (Cámbialo por el tuyo real cuando crees la cuenta)
// Si no tienes, usa 'microsoft' o 'google' para probar que funcione.
const GITHUB_USERNAME = 'google'; 

const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

const renderGitHubStats = (data) => {
    const container = document.getElementById('github-api-data');
    
    // Inyectamos HTML dinámico con los datos recibidos
    container.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-around;">
            <div>
                <p style="color: var(--first-color); font-weight: bold; font-size: 1.2rem;">${data.public_repos}</p>
                <span style="font-size: 0.8rem">Repositorios</span>
            </div>
            <div>
                <p style="color: var(--first-color); font-weight: bold; font-size: 1.2rem;">${data.followers}</p>
                <span style="font-size: 0.8rem">Seguidores</span>
            </div>
        </div>
        <p style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-color-light);">
            *Datos obtenidos en tiempo real de GitHub API
        </p>
    `;
};

// Función asíncrona profesional
async function getGithubData() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error('Error al conectar con GitHub');
        }

        const data = await response.json();
        renderGitHubStats(data);

    } catch (error) {
        console.error('Error de API:', error);
        document.getElementById('github-api-data').innerHTML = `
            <p style="color: #ff6b6b;">No se pudo cargar info de GitHub</p>
        `;
    }
}

// Inicializar
getGithubData();