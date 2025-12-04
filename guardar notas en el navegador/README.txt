# 📝 Notas en el Navegador

Aplicación web minimalista para crear, guardar y eliminar notas directamente desde el navegador utilizando **HTML, CSS y JavaScript**, con persistencia de datos mediante **localStorage**.

---

## 🚀 Funcionalidades

* ✅ Crear notas de texto
* 📅 Guardado automático de fecha y hora
* 💾 Almacenamiento persistente con `localStorage`
* 🗑️ Eliminación de notas individuales
* ❌ Borrado total de notas
* 🎨 Interfaz limpia, simple y responsiva

---

## 🛠️ Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* localStorage

---

## 📂 Estructura del proyecto

```
📁 proyecto
│
├── index.html   # Estructura visual de la aplicación
└── script.js    # Lógica de creación, guardado y borrado
```

---

## ▶️ Cómo usar

1. Descargá o cloná el proyecto.
2. Abrí `index.html` en cualquier navegador.
3. Escribí una nota en el campo de texto.
4. Presioná **Guardar Nota**.
5. Podés eliminar una nota o borrar todas.

---

## 🔐 Persistencia de datos

Las notas se guardan automáticamente usando **localStorage**, lo que permite:

* Mantener los datos al recargar la página.
* Conservar las notas aunque se cierre el navegador.
* Borrarlas únicamente con el botón **Borrar Todo** o al limpiar el almacenamiento.

---

## 🧠 Funcionamiento general

* Al iniciar la app, se cargan las notas almacenadas.
* Cada nota se guarda como un objeto con:

  * `texto`
  * `fecha`
* Las notas se renderizan dinámicamente en pantalla.
* Cada nota tiene su botón de eliminación independiente.

---

## ✅ Posibles mejoras futuras

* ✏️ Edición directa de notas
* 🔍 Buscador interno
* 🌓 Modo oscuro
* 📱 Versión mobile optimizada
* ☁️ Sincronización en la nube

---

## 👨‍💻 Autor

Desarrollado por *Franco Bustos*.

---

## 📄 Licencia

Proyecto de uso libre con fines educativos y personales.