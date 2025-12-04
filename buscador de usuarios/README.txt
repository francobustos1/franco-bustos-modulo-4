# 🔎 Buscador de Usuarios de GitHub

Aplicación web simple que permite buscar usuarios de **GitHub** y mostrar su información pública junto con sus últimos repositorios usando la **GitHub API**.

---

## 🚀 Funcionalidades

* ✅ Búsqueda de usuarios por nombre
* 🖼️ Visualización del avatar
* 👥 Cantidad de seguidores
* 📦 Número de repositorios públicos
* 🔗 Enlace directo al perfil de GitHub
* 📂 Listado de los últimos 5 repositorios actualizados
* ⭐ Visualización de estrellas por repositorio
* ❌ Manejo de errores (usuario no encontrado, sin repos, etc.)

---

## 🛠️ Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* Fetch API
* GitHub REST API

---

## 📂 Estructura del proyecto

```
📁 proyecto
│
├── index.html   # Interfaz del buscador
└── script.js    # Lógica de búsqueda y consumo de API
```

---

## ▶️ Cómo usar

1. Descargá o cloná el proyecto.
2. Abrí el archivo `index.html` en tu navegador.
3. Ingresá un nombre de usuario de GitHub.
4. Presioná el botón **Buscar**.
5. Se mostrará la información del perfil y los repositorios.

---

## 🌐 Uso de la API de GitHub

La aplicación realiza dos peticiones:

1. **Datos del usuario:**

```
https://api.github.com/users/{usuario}
```

2. **Repositorios del usuario:**

```
https://api.github.com/users/{usuario}/repos?sort=updated&per_page=5
```

---

## 🧠 Funcionamiento general

* El usuario ingresa un nombre.
* Se valida que el campo no esté vacío.
* Se consulta la API de GitHub usando `fetch`.
* Se renderizan dinámicamente:

  * Avatar
  * Nombre
  * Seguidores
  * Repositorios públicos
  * Últimos 5 repositorios con estrellas
* Se manejan errores si el usuario no existe.

---

## ✅ Posibles mejoras futuras

* 🔍 Búsqueda con tecla Enter
* 🌓 Modo oscuro
* 📱 Diseño completamente responsive
* 📊 Filtros por lenguajes
* ⏳ Loader animado de carga
* 💾 Historial de búsquedas

---

## 👨‍💻 Autor

Desarrollado por *Franco Bustos*.

---

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y personales.