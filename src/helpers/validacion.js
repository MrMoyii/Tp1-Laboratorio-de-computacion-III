// Funciones que los componentes utilizan para validar datos ingresados por el usuario

export function esNombreValido(nombre) {
    return /^\p{L}+(\s\p{L}+)*$/u.test(nombre)
}

export function validarMontoAInvertir(valorDinero) {
    if(isNaN(valorDinero) || valorDinero < 1000) {
        return false;
    }

    return true;
}

export function validarDiasAInvertir(cantidadDias) {
    cantidadDias = Number(cantidadDias)

    if (!Number.isInteger(cantidadDias) || cantidadDias < 30) {
        return false;
    }
    
    return true;
}

export function limpiarNombreIngresado(nombre) {
    return nombre
        .trim()
        .replace(/(\s+)/g, " ");
}
