let valorDinero = document.getElementById('txtMontoAInvertir').value;
let cantidadDias = document.getElementById('txtCantidadDias').value;

function validarMontoAInvertir(valorDinero){
    //valida si el monto a invertir ingreasdo es un número o si es menor a 1000
    if(isNaN(valorDinero) || valorDinero < 1000) {
        return false;
    }
    return true;
}

function validarDiasAInvertir(cantidadDias){
    //valida si los días es un número y como minimo 30
    if(isNaN(cantidadDias) || cantidadDias <= 30) {
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
