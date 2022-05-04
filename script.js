let valorNombre;
let valorApellido;
let valorDinero;
let cantidadDias;

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

});
