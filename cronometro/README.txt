# ⏱️ Cronómetro Interactivo con Sonido

Aplicación web de **cronómetro digital** desarrollada con **HTML, CSS y JavaScript**, que incluye reproducción de sonido y cambio de color automático cada cierto intervalo de tiempo.

---

## 🚀 Funcionalidades

* ▶️ Iniciar cronómetro
* ⏸️ Pausar cronómetro
* 🔁 Reiniciar cronómetro
* ⏱️ Formato de tiempo en **HH:MM:SS**
* 🎨 Cambio de color automático cada 20 segundos
* 🎵 Reproducción de sonido durante 5 segundos cada 20 segundos
* 🛑 Detención del sonido al pausar o reiniciar
* 💡 Interfaz moderna con estilo oscuro

---

## 🛠️ Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* API de Audio del navegador

---

## 📂 Estructura del proyecto

```
📁 proyecto
│
├── index.html            # Interfaz del cronómetro
├── script.js             # Lógica del cronómetro
└── puppy-dog-barking.mp3 # Archivo de sonido
```

---

## ▶️ Cómo usar

1. Descargá o cloná el proyecto.
2. Asegurate de tener el archivo de sonido `puppy-dog-barking.mp3` en la misma carpeta.
3. Abrí el archivo `index.html` en tu navegador.
4. Presioná **Iniciar** para comenzar el conteo.
5. Usá **Pausar** para detenerlo.
6. Usá **Reiniciar** para volver a cero.

---

## 🎯 Comportamiento especial

* Cada **20 segundos:**

  * Cambia el color del cronómetro aleatoriamente.
  * Se reproduce un sonido durante **5 segundos**.
* Al pausar o reiniciar:

  * El cronómetro se detiene.
  * El sonido se corta automáticamente.
  * El color se restablece al inicial.

---

## 🧠 Funcionamiento general

* El tiempo se cuenta en segundos.
* Se convierte a horas, minutos y segundos.
* Se actualiza la pantalla cada 1 segundo.
* Se usa `setInterval()` para el conteo.
* Se usa la API `Audio` para manejar el sonido.

---

## ✅ Posibles mejoras futuras

* ⏳ Guardado del tiempo al recargar
* 📱 Adaptación responsive
* 🔔 Selección de sonidos personalizados
* 🎚️ Control de volumen
* 🌓 Modo claro/oscuro
* 🏁 Marcadores de tiempo (laps)

---

## 👨‍💻 Autor

Desarrollado por *Franco Bustos*.

---

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y personales.