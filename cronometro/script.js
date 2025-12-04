let segundos = 0;
let intervalo;
const sonido = new Audio("puppy-dog-barking.mp3"); // asegurate de tener este archivo en la misma carpeta

function actualizarCronometro() {
  const hrs = String(Math.floor(segundos / 3600)).padStart(2, "0");
  const mins = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
  const secs = String(segundos % 60).padStart(2, "0");

  document.getElementById("cronometro").textContent = `${hrs}:${mins}:${secs}`;
}

function colorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById("iniciar").addEventListener("click", () => {
  if (!intervalo) {
    intervalo = setInterval(() => {
      segundos++;
      actualizarCronometro();

      // 🎵 Cada 20 segundos: suena 5 segundos y cambia el color
      if (segundos % 20 === 0) {
        document.getElementById("cronometro").style.color = colorAleatorio();

        // reproducir sonido
        sonido.currentTime = 0; // reinicia el sonido por si ya había sonado antes
        sonido.play();

        // detener sonido después de 5 segundos
        setTimeout(() => {
          sonido.pause();
          sonido.currentTime = 0; // vuelve al inicio del sonido
        }, 5000);
      }
    }, 1000);
  }
});

document.getElementById("pausar").addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  sonido.pause();
});

document.getElementById("reiniciar").addEventListener("click", () => {
  segundos = 0;
  actualizarCronometro();
  clearInterval(intervalo);
  intervalo = null;

  // detener sonido si está sonando
  sonido.pause();
  sonido.currentTime = 0;

  // reinicia el color
  document.getElementById("cronometro").style.color = "#0ff";
});
