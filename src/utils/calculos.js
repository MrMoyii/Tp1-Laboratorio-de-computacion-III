export function obtenerPorcentaje(cantidadDias) {
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

    return console.log(porcentaje);
}

export function montoFinal(valorDinero, cantidadDias, tasaAplicada){
    let montoFinal =  valorDinero + (valorDinero * (cantidadDias/360) * (tasaAplicada/100));

    return montoFinal;
}