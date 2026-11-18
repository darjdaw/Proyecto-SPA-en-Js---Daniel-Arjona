// Estructura
const carrito = document.querySelector("#carrito")
const contenedorCarrito = document.querySelector("#lista-carrito tbody")
const vaciarCarrito = document.querySelector("#vaciar-carrito")
const listaCursos = document.querySelector("#lista-cursos")

cargarListeners();
function cargarListeners() {
listaCursos.addEventListener("click", anadirCurso )
};

function anadirCurso(e) {
e.preventDefault()
if (e.target.classList.contains("agregar-carrito")) {
console.log(e.target);

}
}