let valorNombre;
let valorApellido;
let valorDinero;
let cantidadDias;
let tasaAplicada;
let deseaReinvertir;

function esNombreValido(nombre) {
    // El nombre o apellido puede tener como máximo 2 palabras
    // Válido: "Lisandro", "María Ángeles", "Pérez", "Pérez García"
    // No válido: "María de los Ángeles"
    return /^\p{L}+(\s\p{L}+)?$/u.test(nombre);
}
function validarMontoAInvertir(valorDinero){
    //valida si el monto a invertir ingreasdo es un número o si es menor a 1000
    if(isNaN(valorDinero) || valorDinero < 1000) {
        return false;
    }
    return true;
}
function validarDiasAInvertir(cantidadDias){
    cantidadDias = Number(cantidadDias) // asegurarse de que trabajamos con un Number

    //valida si los días es un número entero y como minimo 30
    if (!Number.isInteger(cantidadDias) || cantidadDias < 30) {
        return false;
    }
    return true;
}

function obtenerPorcentaje(cantidadDias) {
    let porcentaje;
    //validacion de días para el calculo del porcentaje
    if (cantidadDias >= 30 && cantidadDias <= 60){
        porcentaje = 40;
    }else if(cantidadDias > 60 && cantidadDias <= 120){
        porcentaje = 45;
    }else if(cantidadDias > 120 && cantidadDias <= 360){
        porcentaje = 50;
    }else{
        porcentaje = 65;
    }

    return porcentaje;
}

function montoFinal(valorDinero, cantidadDias, tasaAplicada){
    let montoFinal =  valorDinero + (valorDinero * (cantidadDias/360) * (tasaAplicada/100));

    return montoFinal;
}

function obtenerDatosFormulario() {
    obtenerValores();

    const datosFormulario = {
        nombre: {esValido: esNombreValido(valorNombre)},
        apellido: {esValido: esNombreValido(valorApellido)},
        monto: {esValido: validarMontoAInvertir(valorDinero)},
        dias: {esValido: validarDiasAInvertir(cantidadDias)},
        esValido: null,
    };

    datosFormulario.esValido = (
        datosFormulario.nombre.esValido
        && datosFormulario.apellido.esValido
        && datosFormulario.monto.esValido
        && datosFormulario.dias.esValido
    );

    return datosFormulario;
}
function obtenerValores(){
    //agarramos los valores de los inputs
    valorNombre = document.getElementById('txtNombre').value;
    valorApellido = document.getElementById('txtApellido').value;
    valorDinero = Number(document.getElementById('txtMontoAInvertir').value);
    cantidadDias = document.getElementById('txtCantidadDias').value;
    tasaAplicada = obtenerPorcentaje(cantidadDias);
    deseaReinvertir = document.getElementById('checkBoxReinvertirCapital').checked;
}
function mostrarErroresFormulario(datosFormulario) {
    const elementosDeError = document.querySelectorAll(".errorInput");

    /*
     * Si un input es válido, al texto del elementoDeError se le asigna una
     * string vacía para "borrar" un mensaje de error que haya sido generado
     * previamente, por ejemplo, si el mismo input era inválido antes
     */
    elementosDeError[0].textContent = (datosFormulario.nombre.esValido)
        ? ""
        : "El nombre puede contener como máximo 2 palabras separadas por un espacio";

    elementosDeError[1].textContent = (datosFormulario.apellido.esValido)
        ? ""
        : "El apellido puede contener como máximo 2 palabras separadas por un espacio";

    elementosDeError[2].textContent = (datosFormulario.monto.esValido)
        ? ""
        : "El monto a invertir debe ser un número mayor o igual a 1000";

    elementosDeError[3].textContent = (datosFormulario.dias.esValido)
        ? ""
        : "La cantidad de días debe ser un número entero mayor o igual a 30";

}

function mostrarResultados(resultadosCalculos) {
    const containerResultados = document.querySelector("#resultados-container");
    const tituloResultados = document.createElement("h2");
    tituloResultados.textContent = "Resultados";
    const listaResumen = obtenerListaResumen();
    const tablaResultados = obtenerTablaResultados(resultadosCalculos);

    containerResultados.replaceChildren(tituloResultados, listaResumen, tablaResultados);
}

function obtenerListaResumen() {
    const listaResumen = document.createElement("ul");
    listaResumen.id = "resumen-datos";

    const resumenDatos = {
        "Nombre": `${valorNombre} ${valorApellido}`,
        "Capital inicial": valorDinero,
        "Plazo": cantidadDias,
        "Tasa aplicada": obtenerPorcentaje(cantidadDias),
    };

    for (const dato in resumenDatos) {
        const item = document.createElement("li");
        item.textContent = resumenDatos[dato];
        const itemNegrita = document.createElement("span");
        itemNegrita.className = "bold";
        itemNegrita.textContent = `${dato}: `;
        item.prepend(itemNegrita);
        listaResumen.append(item);
    }

    return listaResumen;
}

function obtenerTablaResultados(resultadosCalculos) {
    const tabla = document.createElement("table");
    tabla.id = "resultados-calculos";

    const encabezado = obtenerEncabezado(["Período", "Monto inicial", "Monto final"]);
    const cuerpo = obtenerCuerpoPeriodos(resultadosCalculos);

    tabla.append(encabezado, cuerpo);

    return tabla;

}

function obtenerEncabezado(nombresCeldas) {
    const encabezado = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");

    for (const nombre of nombresCeldas) {
        const celda = document.createElement("th");
        celda.textContent = nombre;
        filaEncabezado.appendChild(celda);
    }

    encabezado.appendChild(filaEncabezado);

    return encabezado;
}

function obtenerCuerpoPeriodos(resultadosCalculos) {
    const cuerpo = document.createElement("tbody");

    for (resultado of resultadosCalculos) {
        const fila = document.createElement("tr");
        const periodo = document.createElement("td");
        const montoInicial = document.createElement("td");
        const montoFinal = document.createElement("td");

        periodo.textContent = resultado.periodo;
        // Incluir dos decimales en los montos para representar a los centavos
        montoInicial.textContent = resultado.montoInicial.toFixed(2);
        montoFinal.textContent = resultado.montoFinal.toFixed(2);

        fila.append(periodo, montoInicial, montoFinal);
        cuerpo.appendChild(fila);
    }

    return cuerpo;
}

document.getElementById('btnCalcularMonto').addEventListener('click', (e)=> {
    e.preventDefault();

    const datosFormulario = obtenerDatosFormulario();
    mostrarErroresFormulario(datosFormulario);
});
