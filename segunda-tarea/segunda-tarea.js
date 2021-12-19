/* TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0). */

const $datosSalarios = document.querySelector("#datosSalarios");
const $contenedorCantidadTrabajadores = document.querySelector(
    "#contenedorCantidadTrabajadores"
);
const $cantidadTrabajadores = document.querySelector("#cantidadTrabajadores");
const $camposParaIntegrantesTrabajadores = document.querySelector(
    "#camposParaIntegrantesTrabajadores"
);
const $botonAceptar = document.querySelector("#botonAceptar");
const $botonEnviar = document.querySelector("#botonEnviar");
const $botonReiniciar = document.querySelector("#botonReiniciar");

$botonAceptar.onclick = function () {
    if (Number($cantidadTrabajadores.value) <= 0) return false;

    crearInputParaTrabajadores(devolverCantidadTrabajadores());
    ocultarElemento($contenedorCantidadTrabajadores);
    ocultarElemento($botonAceptar);
    mostrarElemento($botonEnviar);
    mostrarElemento($botonReiniciar);

    return false;
};

$botonEnviar.onclick = function () {
    const arraySalarios = crearArraySalarios(
        $camposParaIntegrantesTrabajadores.childNodes
    );
    if (arraySalarios.length === 0) return false;

    mostrarDatosSalarios(
        calcularSalarioMinimo(arraySalarios),
        calcularSalarioMaximo(arraySalarios),
        calcularSalarioPromedioAnual(arraySalarios),
        calcularSalarioPromedioMensual(arraySalarios)
    );

    return false;
};

$botonReiniciar.onclick = function () {
    reiniciarValores();
    ocultarElemento($botonEnviar);
    ocultarElemento($botonReiniciar);
    mostrarElemento($contenedorCantidadTrabajadores);
    mostrarElemento($botonAceptar);

    return false;
};

function devolverCantidadTrabajadores() {
    return Number($cantidadTrabajadores.value);
}

function crearInputParaTrabajadores(cantidadInputs) {
    for (let i = 1; i <= cantidadInputs; i++) {
        $camposParaIntegrantesTrabajadores.innerHTML += `<label for="trabajador${i}">Salario anual integrante:</label>
         <br>
         <input type="number" id="trabajador1">
         <br>
         <br>`;
    }
}

function ocultarElemento($elemento) {
    $elemento.className = "hidden";
}

function mostrarElemento($elemento) {
    $elemento.className = "";
}

function crearArraySalarios(arrayNodos) {
    const arraySalarios = [];

    for (const nodo of arrayNodos) {
        if (nodo.localName === "input" && Number(nodo.value) > 0) {
            arraySalarios.push(Number(nodo.value));
        }
    }

    return arraySalarios;
}

function mostrarDatosSalarios(
    salarioMinimo,
    salarioMaximo,
    salarioPromedioAnual,
    salarioPromedioMensual
) {
    $datosSalarios.textContent = `Salario minimo: ${salarioMinimo}. Salario maximo: ${salarioMaximo}. Salario promedio anual: ${salarioPromedioAnual}. Salario promedio mensual: ${salarioPromedioMensual}`;
}

function calcularSalarioMinimo(array) {
    let salarioMinimo = array[0];

    for (let i = 1; i <= array.length; i++) {
        if (salarioMinimo > array[i]) {
            salarioMinimo = array[i];
        }
    }

    return salarioMinimo;
}

function calcularSalarioMaximo(array) {
    let salarioMaximo = 0;

    for (let i = 0; i <= array.length; i++) {
        if (salarioMaximo < array[i]) {
            salarioMaximo = array[i];
        }
    }

    return salarioMaximo;
}

function calcularSalarioPromedioAnual(array) {
    let resultado = 0;

    for (const salario of array) {
        resultado += salario;
    }

    return resultado / array.length;
}

function calcularSalarioPromedioMensual(array) {
    const salarioPromedioAnual = calcularSalarioPromedioAnual(array);
    const MESES_POR_ANIO = 12;

    return salarioPromedioAnual / MESES_POR_ANIO;
}

function reiniciarValores() {
    $datosSalarios.textContent = "";
    $cantidadTrabajadores.value = "";
    $camposParaIntegrantesTrabajadores.innerHTML = "";
}
