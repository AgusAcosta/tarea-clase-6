/* TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN). */

const $integrantesFamilia = document.querySelector("#integrantesFamilia")
const $camposPorIntegranteFamiliar = document.querySelector("#camposPorIntegranteFamiliar")
const $botonAceptar = document.querySelector("#botonAceptar")
const $botonReiniciar = document.querySelector("#botonReiniciar")
const $botonEnviar = document.querySelector("#botonEnviar")
const $strongMenorEdad = document.querySelector("#strongMenorEdad")
const $strongMayorEdad = document.querySelector("#strongMayorEdad")
const $strongPromedioEdades = document.querySelector("#strongPromedioEdades")

$botonAceptar.onclick = function() {
    if (Number($integrantesFamilia.value) <= 0) return

    const numeroIntegrantes = obtenerNumeroIntegrantes()
    crearInputsParaIntegrantes(numeroIntegrantes)
    mostrarElemento($camposPorIntegranteFamiliar)
    esconderElemento($botonAceptar)
    mostrarElemento($botonEnviar)
    mostrarElemento($botonReiniciar)

    return false;
}

$botonReiniciar.onclick = function() {
    resetearTexto($strongMenorEdad)
    resetearTexto($strongMayorEdad)
    resetearTexto($strongPromedioEdades)
    eliminarInputsParaIntegrantes()
    esconderElemento($botonEnviar)
    esconderElemento($botonReiniciar)
    mostrarElemento($botonAceptar)

    return false;
}

$botonEnviar.onclick = function() {
    mostrarMenorEdad(calcularMenorEdad())
    mostrarMayorEdad(calcularMayorEdad())
    mostrarPromedioEdades(calcularPromedioEdades())

    return false
}

function obtenerNumeroIntegrantes() {
    return Number($integrantesFamilia.value)
}

function crearInputsParaIntegrantes(numeroIntegrantes) {
    for (let i = 1; i <= numeroIntegrantes; i++) {
        $camposPorIntegranteFamiliar.innerHTML += 
        `<label for="edadIntegrante${i}Familia">Edad integrante:</label>
         <br>
         <input type="number" id="edadIntegrante1Familia">
         <br>
         <br>`
    }
}

function mostrarElemento($elemento) {
    $elemento.className = ""
}

function esconderElemento($elemento) {
    $elemento.className = "hidden"
}

function resetearTexto($elemento) {
    $elemento.textContent = ""
}

function eliminarInputsParaIntegrantes() {
    $camposPorIntegranteFamiliar.innerHTML = ""
}

function calcularMenorEdad() {
    let menorEdad = 0

    for (const childNode of $camposPorIntegranteFamiliar.childNodes) {
        if (childNode.localName === "input" && Number(childNode.value) > 0) {
            if (menorEdad > Number(childNode.value)) {
                menorEdad = Number(childNode.value)
            }
        }
    }

    return menorEdad
}

function calcularMayorEdad() {
    let mayorEdad = 0

    for (const childNode of $camposPorIntegranteFamiliar.childNodes) {
        if (childNode.localName === "input" && Number(childNode.value) > 0) {
            if (mayorEdad < Number(childNode.value)) {
                mayorEdad = Number(childNode.value)
            }
        }
    }

    return mayorEdad
}

function calcularPromedioEdades() {
    let promedioEdades = 0
    let cantidadIntegrantes = 0

    for (const childNode of $camposPorIntegranteFamiliar.childNodes) {
        if (childNode.localName === "input" && Number(childNode.value) > 0) {
            promedioEdades += Number(childNode.value)
            cantidadIntegrantes++
        }
    }

    return promedioEdades / cantidadIntegrantes
}

function mostrarMenorEdad(menorEdad) {
    $strongMenorEdad.textContent = `La menor edad es: ${menorEdad}.`
}
    
function mostrarMayorEdad(mayorEdad) {
    $strongMayorEdad.textContent = `La mayor edad es: ${mayorEdad}.`
}
    
function mostrarPromedioEdades(promedioEdades) {
    $strongPromedioEdades.textContent = `El promedio de edades es: ${promedioEdades}.`
}