let valorNombre;
let valorApellido;
let valorDinero;
let cantidadDias;

const mensajeError = {
    parent: document.querySelector("main"),
    element: document.createElement("div"),
    mostrar: function(mensaje) {
        this.element.textContent = mensaje;
        this.parent.insertBefore(this.element, document.querySelector("#nombrePersona"));
    },
    ocultar: function() {
        this.parent.removeChild(this.element);
    }
}

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
function montoFinal(valorDinero, cantidadDias){
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
    //formula
    let montoFinal =  valorDinero + (valorDinero * (cantidadDias/360) * (porcentaje/100));

    return montoFinal;
}
function validarForm(){
    let datos = []; //------creo y almaceno los datos en un array en forma de prubea-------//

    /*Si devuelve false es porque no cumple con los requisitos, entonces uso ! para que entre al if,
    en caso contrario no ingresaria y no se mostraria el error*/
    if(!esNombreValido(valorNombre)){
        return mensajeError.mostrar('El nombre ingresado es invalido');
    }else{
        datos.push(valorNombre); //-------aca almaceno los datos si son validos-------//
    }
    if(!esNombreValido(valorApellido)){
        return mensajeError.mostrar('El apellido ingreaso es invalido');
    }else{
        datos.push(valorApellido);//-------aca almaceno los datos si son validos-------//
    }
    if (!validarMontoAInvertir(valorDinero)){
        return mensajeError.mostrar('El monto ingresado es invalido');
    }else{
        datos.push(valorDinero);//-------aca almaceno los datos si son validos-------//
    }
    if(!validarDiasAInvertir(cantidadDias)){
        return mensajeError.mostrar('El tiempo ingresado es invalido');
    }else{
        datos.push(cantidadDias);//-------aca almaceno los datos si son validos-------//
    }
    // alert(datos.join(' ')); //un alert para probar que todo este funcionando...
}
function obtenerValores(){
    //agarramos los valores de los inputs
    valorNombre = document.getElementById('txtNombre').value;
    valorApellido = document.getElementById('txtApellido').value;
    valorDinero = document.getElementById('txtMontoAInvertir').value;
    cantidadDias = document.getElementById('txtCantidadDias').value;
}

document.getElementById('btnCalcularMonto').addEventListener('click', (e)=> {
    e.preventDefault();

    obtenerValores()
    validarForm();

});
