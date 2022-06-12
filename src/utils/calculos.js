export function obtenerPorcentaje(cantidadDias) {
    let porcentaje;
    //validacion de días para el calculo del porcentaje
    if (cantidadDias >= 30 && cantidadDias <= 60){
        porcentaje = 40;
    }else if(cantidadDias > 60 && cantidadDias <= 120){
        porcentaje = 45;
    }else if(cantidadDias > 120 && cantidadDias <= 360){
        porcentaje = 50;
    }else if(cantidadDias > 360){
        porcentaje = 65;
    } else {
        porcentaje = null;
    }

    return porcentaje;
}

export function montoFinal(valorDinero, cantidadDias, tasaAplicada){
    let montoFinal =  valorDinero + (valorDinero * (cantidadDias/360) * (tasaAplicada/100));

    return montoFinal;
}

export function obtenerResultadosCalculos(datosFormulario, tasaAplicada) {
    const resultadosCalculos = [];
    const periodos = (datosFormulario.deseaReinvertir) ? 4 : 1;
    let montoInicial = datosFormulario.monto;

    for (let i = 0; i < periodos; i++) {
        const resultado = {
            periodo: i+1,
            montoInicial: montoInicial,
            montoFinal: montoFinal(montoInicial, datosFormulario.dias, tasaAplicada),
        };

        resultadosCalculos.push(resultado);
        montoInicial = resultado.montoFinal;
    }
    console.log(resultadosCalculos);
    return resultadosCalculos;
}