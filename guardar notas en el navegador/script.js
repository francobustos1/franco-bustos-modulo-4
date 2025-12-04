const listaNotas = document.getElementById("listaNotas");
let notas = JSON.parse(localStorage.getItem("notas")) || [];

function mostrarNotas() {
  listaNotas.innerHTML = "";
  notas.forEach((nota, i) => {
    const li = document.createElement("li");

    const divTexto = document.createElement("div");
    divTexto.classList.add("texto");
    divTexto.textContent = nota.texto;

    const spanFecha = document.createElement("span");
    spanFecha.classList.add("fecha");
    spanFecha.textContent = `📅 ${nota.fecha}`;
    divTexto.appendChild(spanFecha);

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");
    btnEliminar.addEventListener("click", () => eliminarNota(i));

    li.appendChild(divTexto);
    li.appendChild(btnEliminar);
    listaNotas.appendChild(li);
  });
}

function guardarNota() {
  const texto = document.getElementById("nota").value.trim();
  if (texto) {
    const fecha = new Date().toLocaleString();
    notas.push({ texto, fecha });
    localStorage.setItem("notas", JSON.stringify(notas));
    mostrarNotas();
    document.getElementById("nota").value = "";
  }
}

function eliminarNota(index) {
  notas.splice(index, 1);
  localStorage.setItem("notas", JSON.stringify(notas));
  mostrarNotas();
}

function borrarTodo() {
  localStorage.removeItem("notas");
  notas = [];
  mostrarNotas();
}

document.getElementById("guardar").addEventListener("click", guardarNota);
document.getElementById("borrar").addEventListener("click", borrarTodo);

mostrarNotas();