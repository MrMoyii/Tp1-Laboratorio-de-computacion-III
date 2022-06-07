// Funciones que los componentes utilizan para validar datos ingresados por el usuario

function esNombreValido(nombre) {
    return /^\p{L}+(\s\p{L}+)*$/u.test(nombre)
}

function validarMontoAInvertir(valorDinero) {
    if(isNaN(valorDinero) || valorDinero < 1000) {
        return false;
    }

    return true;
}

function validarDiasAInvertir(cantidadDias) {
    cantidadDias = Number(cantidadDias)

    if (!Number.isInteger(cantidadDias) || cantidadDias < 30) {
        return false;
    }
    
    return true;
}

function limpiarNombreIngresado(nombre) {
    return nombre
        .trim()
        .replace(/(\s+)/g, " ");
}

export {
    esNombreValido,
    validarMontoAInvertir,
    validarDiasAInvertir,
    limpiarNombreIngresado,
}