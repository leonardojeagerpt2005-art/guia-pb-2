/* =========================================================
   🔥 VARIABLES Y TIPOS DE DATOS
========================================================= */

let nombre = "Leo"; // variable modificable
const edad = 20; // constante (no cambia)

let texto = "Hola"; // string
let numero = 10; // number
let activo = true; // boolean
let arreglo = [1, 2, 3]; // array
let objeto = { nombre: "Leo", edad: 20 }; // objeto


/* =========================================================
   🔧 FUNCIONES
========================================================= */

function saludar() {
  console.log("Hola");
}

function sumar(a, b) {
  return a + b;
}

const restar = (a, b) => a - b;


/* =========================================================
   🧠 CONDICIONALES
========================================================= */

if (numero > 5) {
  console.log("Mayor a 5");
} else {
  console.log("Menor o igual a 5");
}


/* =========================================================
   🔁 BUCLES
========================================================= */

for (let i = 0; i < 3; i++) {
  console.log(i);
}

arreglo.forEach(item => {
  console.log(item);
});


/* =========================================================
   🌐 DOM (SELECCIÓN Y MODIFICACIÓN)
========================================================= */

const titulo = document.querySelector("h1"); // selecciona primer h1
if (titulo) {
  titulo.textContent = "Texto cambiado"; // cambia texto
  titulo.style.color = "blue"; // cambia color
}


/* =========================================================
   ⚡ EVENTOS
========================================================= */

const boton = document.getElementById("btn");

if (boton) {
  boton.addEventListener("click", () => {
    console.log("Click detectado");
  });
}


/* =========================================================
   ✍️ INPUT
========================================================= */

const input = document.querySelector("input");

if (input) {
  input.addEventListener("input", (e) => {
    console.log(e.target.value); // muestra lo que escribe el usuario
  });
}


/* =========================================================
   🏗️ CREAR ELEMENTOS
========================================================= */

const lista = document.querySelector("ul");

if (lista) {
  const li = document.createElement("li");
  li.textContent = "Elemento creado dinámicamente";
  lista.appendChild(li);
}


/* =========================================================
   👁️ MOSTRAR / OCULTAR (TOGGLE)
========================================================= */

const btnToggle = document.getElementById("btnToggle");
const caja = document.getElementById("caja");

if (btnToggle && caja) {
  btnToggle.addEventListener("click", () => {
    caja.classList.toggle("oculto"); 
    // agrega o quita la clase que oculta
  });
}


/* =========================================================
   🍔 MENU HAMBURGUESA
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("oculto"); 
  });
}


/* =========================================================
   🎥 VIDEO CON ICONO PLAY
========================================================= */

const video = document.getElementById("video");
const playIcon = document.getElementById("playIcon");

if (video && playIcon) {
  playIcon.addEventListener("click", () => {
    video.play(); // reproduce video
    playIcon.classList.add("oculto"); // oculta icono
  });

  // vuelve a mostrar icono al pausar
  video.addEventListener("pause", () => {
    playIcon.classList.remove("oculto");
  });
}


/* =========================================================
   🌐 FETCH API (GET)
========================================================= */

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data));


/* =========================================================
   🚀 FETCH PRO (ASYNC / AWAIT)
========================================================= */

async function obtenerDatos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

obtenerDatos();


/* =========================================================
   📤 FETCH POST
========================================================= */

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hola",
    body: "Contenido"
  })
})
.then(res => res.json())
.then(data => console.log(data));


/* =========================================================
   🚀 MINI PROYECTO (CARGAR USUARIOS)
========================================================= */

/*
HTML necesario:

<button id="btnCargar">Cargar usuarios</button>
<ul id="listaUsuarios"></ul>
*/

const btnCargar = document.getElementById("btnCargar");
const listaUsuarios = document.getElementById("listaUsuarios");

if (btnCargar && listaUsuarios) {
  btnCargar.addEventListener("click", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    listaUsuarios.innerHTML = ""; // limpia lista

    data.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name;
      listaUsuarios.appendChild(li);
    });
  });
}


/* =========================================================
   🧠 TIPS FINALES PARA EXAMEN
========================================================= */

/*
✔ No funciona click?
→ revisa addEventListener

✔ No encuentra elemento?
→ revisa querySelector o getElementById

✔ No se oculta?
→ revisa classList.toggle o .oculto

✔ API falla?
→ revisa fetch o await

✔ No aparece nada?
→ usa console.log para debug

✔ ERROR COMÚN:
El script se ejecuta antes del HTML
→ solución: poner <script> al final del body
*/