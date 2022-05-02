function validarMontoAInvertir(){
    valor = document.getElementById('txtMontoAInvertir').value;
    if(isNaN(valor) || valor <= 1000 ) {
        return true;
    }
    else{
        
    }
}

function validarDiasAInvertir(){
    valor = document.getElementById('txtMontoAInvertir').value;
    if(isNaN(valor) || valor <= 30 ) {
        return true;
    }
}