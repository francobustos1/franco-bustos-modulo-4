# 📝 Mis Notas en el Navegador

Aplicación web simple para crear, guardar y eliminar notas directamente en el navegador usando **HTML, CSS y JavaScript**, con almacenamiento persistente mediante **localStorage**.

---

## 🚀 Funcionalidades

* ✅ Crear notas con texto
* 📅 Guardado automático de fecha y hora
* 💾 Persistencia de datos usando `localStorage`
* 🗑️ Eliminar notas individuales
* ❌ Borrar todas las notas
* 🎨 Interfaz sencilla y agradable

---

## 🛠️ Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* localStorage del navegador

---

## 📂 Estructura del proyecto

```
📁 proyecto
│
├── index.html   # Estructura principal de la app
└── script.js    # Lógica de funcionamiento
```

---

## ▶️ Cómo usar

1. Descargá o cloná el proyecto.
2. Abrí el archivo `index.html` en tu navegador.
3. Escribí una nota en el campo de texto.
4. Presioná **Guardar Nota**.
5. Podés eliminar notas individuales o borrar todas.

> Las notas se guardan automáticamente en tu navegador.

---

## 🔐 Persistencia de datos

Las notas se almacenan usando `localStorage`, por lo que:

* No se pierden al recargar la página.
* Solo están disponibles en el mismo navegador.
* Se borran únicamente si tocás **Borrar Todo** o limpiás el almacenamiento del navegador.

---

## 🧠 Funcionamiento general

* Al iniciar, la app carga las notas desde `localStorage`.
* Cada nota se guarda como un objeto con:

  * `texto`
  * `fecha`
* Se renderizan dinámicamente en una lista.
* Cada nota tiene su botón de eliminación.

---

## ✅ Posibles mejoras futuras

* ✏️ Edición de notas
* 🔍 Buscador
* 🌓 Modo oscuro
* 📱 Versión responsive
* ☁️ Guardado en la nube

---

## 👨‍💻 Autor

Desarrollado por *Franco Bustos*.

---

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y personales.