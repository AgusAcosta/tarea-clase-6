/* TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN). */

const $integrantesFamilia = document.querySelector("#integrantesFamilia")
const $camposPorIntegranteFamiliar = document.querySelector("#camposPorIntegranteFamiliar")
const $botonAceptar = document.querySelector("#botonAceptar")
const $botonReiniciar = document.querySelector("#botonReiniciar")

$botonAceptar.onclick = function() {
    if (Number($integrantesFamilia.value) <= 0) return

    const numeroIntegrantes = obtenerNumeroIntegrantes()
    crearInputsParaIntegrantes(numeroIntegrantes)
    mostrarElemento($camposPorIntegranteFamiliar)
    esconderElemento($botonAceptar)
    mostrarElemento($botonReiniciar)

    return false;
}

$botonReiniciar.onclick = function() {
    eliminarInputsParaIntegrantes()
    esconderElemento($botonReiniciar)
    mostrarElemento($botonAceptar)

    return false;
}

function obtenerNumeroIntegrantes() {
    return Number($integrantesFamilia.value)
}

function crearInputsParaIntegrantes(numeroIntegrantes) {
    for (let i = 0; i <= numeroIntegrantes; i++) {
        $camposPorIntegranteFamiliar.innerHTML += 
        `<label for="edadIntegrante${i}Familia">Edad integrante:</label>
         <br>
         <input type="number" id="edadIntegrante1Familia">
         <br>
         <br>`
    }
}

function eliminarInputsParaIntegrantes() {
    $camposPorIntegranteFamiliar.innerHTML = ""
}

function mostrarElemento($elemento) {
    $elemento.className = ""
}

function esconderElemento($elemento) {
    $elemento.className = "hidden"
}
