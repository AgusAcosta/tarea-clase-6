/* TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN). */

const $contenedorIntegrantesFamilia = document.querySelector(
    "#contenedorIntegrantesFamilia"
);
const $integrantesFamilia = document.querySelector("#integrantesFamilia");
const $camposPorIntegranteFamiliar = document.querySelector(
    "#camposPorIntegranteFamiliar"
);
const $botonAceptar = document.querySelector("#botonAceptar");
const $botonReiniciar = document.querySelector("#botonReiniciar");
const $botonEnviar = document.querySelector("#botonEnviar");
const $strongEdadMenor = document.querySelector("#strongEdadMenor");
const $strongEdadMayor = document.querySelector("#strongEdadMayor");
const $strongEdadPromedio = document.querySelector("#strongEdadPromedio");

$botonAceptar.onclick = function () {
    if (Number($integrantesFamilia.value) <= 0) return;

    const numeroIntegrantes = obtenerNumeroIntegrantes();
    crearInputsParaIntegrantes(numeroIntegrantes);
    mostrarElemento($camposPorIntegranteFamiliar);
    esconderElemento($contenedorIntegrantesFamilia);
    esconderElemento($botonAceptar);
    mostrarElemento($botonEnviar);
    mostrarElemento($botonReiniciar);

    return false;
};

$botonReiniciar.onclick = function () {
    resetearTexto($strongMenorEdad);
    resetearTexto($strongMayorEdad);
    resetearTexto($strongPromedioEdades);
    eliminarInputsParaIntegrantes();
    esconderElemento($botonEnviar);
    esconderElemento($botonReiniciar);
    mostrarElemento($contenedorIntegrantesFamilia);
    mostrarElemento($botonAceptar);

    return false;
};

$botonEnviar.onclick = function () {
    mostrarEdadMenor(calcularEdadMenor());
    mostrarEdadMayor(calcularEdadMayor());
    mostrarEdadPromedio(calcularEdadPromedio());

    return false;
};

function obtenerNumeroIntegrantes() {
    return Number($integrantesFamilia.value);
}

function crearInputsParaIntegrantes(numeroIntegrantes) {
    for (let i = 1; i <= numeroIntegrantes; i++) {
        $camposPorIntegranteFamiliar.innerHTML += `<label for="edadIntegrante${i}Familia">Edad integrante:</label>
         <br>
         <input type="number" id="edadIntegrante1Familia">
         <br>
         <br>`;
    }
}

function mostrarElemento($elemento) {
    $elemento.className = "";
}

function esconderElemento($elemento) {
    $elemento.className = "hidden";
}

function resetearTexto($elemento) {
    $elemento.textContent = "";
}

function eliminarInputsParaIntegrantes() {
    $camposPorIntegranteFamiliar.innerHTML = "";
}

function calcularEdadMenor() {
    let edadMenor = 0;

    for (const childNode of $camposPorIntegranteFamiliar.childNodes) {
        if (childNode.localName === "input" && Number(childNode.value) > 0) {
            if (edadMenor > Number(childNode.value)) {
                edadMenor = Number(childNode.value);
            } else if (edadMenor === 0) {
                edadMenor = Number(childNode.value);
            }
        }
    }

    return edadMenor;
}

function calcularEdadMayor() {
    let edadMayor = 0;

    for (const childNode of $camposPorIntegranteFamiliar.childNodes) {
        if (childNode.localName === "input" && Number(childNode.value) > 0) {
            if (edadMayor < Number(childNode.value)) {
                edadMayor = Number(childNode.value);
            }
        }
    }

    return edadMayor;
}

function calcularEdadPromedio() {
    let edadPromedio = 0;
    let cantidadIntegrantes = 0;

    for (const childNode of $camposPorIntegranteFamiliar.childNodes) {
        if (childNode.localName === "input" && Number(childNode.value) > 0) {
            edadPromedio += Number(childNode.value);
            cantidadIntegrantes++;
        }
    }

    return edadPromedio / cantidadIntegrantes;
}

function mostrarEdadMenor(edadMenor) {
    if (!edadMenor) {
        $strongEdadMenor.textContent = "";
        return
    }

    $strongEdadMenor.textContent = `La edad menor es: ${edadMenor}.`;
}

function mostrarEdadMayor(edadMayor) {
    if (!edadMayor) {
        $strongEdadMayor.textContent = "";
        return
    }

    $strongEdadMayor.textContent = `La edad mayor es: ${edadMayor}.`;
}

function mostrarEdadPromedio(edadPromedio) {
    if (!edadPromedio) {
        $strongEdadPromedio.textContent = "";
        return
    }

    $strongEdadPromedio.textContent = `El edad promedio es: ${edadPromedio}.`;
}
