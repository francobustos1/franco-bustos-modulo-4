document.getElementById("buscar").addEventListener("click", () => {
    const user = document.getElementById("usuario").value.trim();
    if (!user) return alert("Ingrese un usuario");

    document.getElementById("resultado").innerHTML = "🔎 Buscando...";

    // Primera petición: información del usuario
    fetch(`https://api.github.com/users/${user}`)
        .then((res) => {
            if (!res.ok) throw new Error("Usuario no encontrado");
            return res.json();
        })
        .then((data) => {
            // Mostrar información básica del usuario
            document.getElementById("resultado").innerHTML = `
                <img src="${data.avatar_url}" alt="Avatar">
                <h2>${data.login}</h2>
                <p>👥 Seguidores: ${data.followers}</p>
                <p>📦 Repos públicos: ${data.public_repos}</p>
                <a href="${data.html_url}" target="_blank">Ver perfil completo</a>
                <h3>📂 Últimos repositorios:</h3>
                <ul id="repos"></ul>
            `;

            // Segunda petición: obtener los repositorios
            return fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=5`);
        })
        .then((res) => {
            if (!res.ok) throw new Error("No se pudieron obtener los repositorios");
            return res.json();
        })
        .then((repos) => {
            const lista = document.getElementById("repos");
            if (repos.length === 0) {
                lista.innerHTML = "<li>El usuario no tiene repositorios públicos.</li>";
                return;
            }
            repos.forEach(repo => {
                const item = document.createElement("li");
                item.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> ⭐ ${repo.stargazers_count}`;
                lista.appendChild(item);
            });
        })
        .catch((error) => {
            document.getElementById("resultado").innerHTML = `❌ ${error.message}`;
        })
        .finally(() => console.log("🔍 Búsqueda finalizada"));
});