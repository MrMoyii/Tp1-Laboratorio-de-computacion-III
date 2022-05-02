let valorDinero = document.getElementById('txtMontoAInvertir').value;
let valorDias = document.getElementById('txtCantidadDias').value;

function validarMontoAInvertir(valorDinero){
    //valida si el monto a invertir ingreasdo es un número o si es menor a 1000
    if(isNaN(valorDinero) || valorDinero < 1000) {
        return false;
    }
    return true;
}

function validarDiasAInvertir(valorDias){
    //valida si los días es un número y como minimo 30
    if(isNaN(valorDias) || valorDias <= 30) {
        return false;
    }
    return true;
}

function montoFinal(valorDinero, valorDias){
    
}
