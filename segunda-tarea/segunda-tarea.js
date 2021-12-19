/* TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0). */

const $botonAceptar = document.querySelector("#botonAceptar")
const $botonEnviar = document.querySelector("#botonEnviar")
const $botonReiniciar = document.querySelector("#botonReiniciar")
const $cantidadTrabajadores = document.querySelector("#cantidadTrabajadores")
const $camposParaIntegrantesTrabajadores = document.querySelector("#camposParaIntegrantesTrabajadores")

$botonAceptar.onclick = function() {
    if (Number($cantidadTrabajadores.value) <= 0) return

    crearInputParaTrabajadores(devolverCantidadTrabajadores())
    ocultarElemento($botonAceptar)
    mostrarElemento($botonEnviar)
    mostrarElemento($botonReiniciar)

    return false;
}

function devolverCantidadTrabajadores() {
    return Number($cantidadTrabajadores.value)
}

function crearInputParaTrabajadores(cantidadInputs) {
    for (let i = 1; i <= cantidadInputs; i++) {
        $camposParaIntegrantesTrabajadores.innerHTML +=
        `<label for="trabajador${i}">Salario anual integrante:</label>
         <br>
         <input type="number" id="trabajador1">
         <br>
         <br>`
    }
}

function ocultarElemento($elemento) {
    $elemento.className = "hidden"
}

function mostrarElemento($elemento) {
    $elemento.className = ""
}