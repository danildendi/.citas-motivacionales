const citas = [
  {
    id: 1,
    texto: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    autor: "Robert Collier"
  },
  {
    id: 2,
    texto: "No cuentes los días, haz que los días cuenten.",
    autor: "Muhammad Ali"
  },
  {
    id: 3,
    texto: "La única forma de hacer un gran trabajo es amar lo que haces.",
    autor: "Steve Jobs"
  }
];

const container = document.getElementById("citasContainer");

citas.forEach(cita => {
  container.innerHTML += `
    <div class="card">
      <p class="texto">${cita.texto}</p>
      <p class="autor">— ${cita.autor}</p>
      <a class="btn" href="detalle.html?id=${cita.id}">
        Ver detalle
      </a>
    </div>
  `;
});
