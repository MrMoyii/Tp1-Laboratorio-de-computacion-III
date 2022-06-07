<script>
import {
    esNombreValido,
    validarMontoAInvertir,
    validarDiasAInvertir,
    limpiarNombreIngresado,
} from "../../helpers/validacion"

export default {
    data() {
        return {
            nombreIngresado: null,
            apellidoIngresado: null,
            montoIngresado: null,
            diasIngresado: null,
            deseaReinvertir: false,
        }
    },
    computed: {
        nombre() {
            const inputLimpio = limpiarNombreIngresado(String(this.nombreIngresado))
            return esNombreValido(inputLimpio) ? inputLimpio : null
        },
        apellido() {
            const inputLimpio = limpiarNombreIngresado(String(this.apellidoIngresado))
            return esNombreValido(inputLimpio) ? inputLimpio : null
        },
        monto() {
            return validarMontoAInvertir(this.montoIngresado) ? this.montoIngresado : null
        },
        dias() {
            return validarDiasAInvertir(this.diasIngresado) ? this.diasIngresado : null
        },
        datosFormulario() {
            return {
                nombre: this.nombre,
                apellido: this.apellido,
                monto: this.monto,
                dias: this.dias,
            }
        }
    },
}
</script>

<template>
<form autocomplete="off">
    <h1>Simulador de Plazo Fijo</h1>
    <div class="grupo">
        <input id="txtNombre" type="text" required v-model.trim="nombreIngresado">
        <span class="barra"></span>
        <label for="txtNombre">Nombre</label>
        <div class="small-container">
            <small v-if="!nombreIngresado">Campo requerido</small>
            <small class="error-text" v-else-if="!nombre">Ingrese un nombre válido</small>
        </div>
    </div>
    <div class="grupo">
        <input id="txtApellido" type="text" required v-model.trim="apellidoIngresado">
        <span class="barra"></span>
        <label for="txtApellido">Apellido</label>
        <div class="small-container">
            <small v-if="!apellidoIngresado">Campo requerido</small>
            <small class="error-text" v-else-if="!apellido">Ingrese un apellido válido</small>
        </div>
    </div>
    <div class="grupo">
        <div class="grupoMontoYDias">
            <input id="txtMontoAInvertir" type="number" step="any" required v-model="montoIngresado">
            <span class="barra"></span>
            <label for="txtMontoAInvertir">Capital a invertir (mínimo $1000)</label>
            <div class="small-container">
                <small v-if="!montoIngresado">Campo requerido</small>
                <small class="error-text" v-else-if="!monto">El monto a invertir debe ser un número mayor o igual a 1000</small>
            </div>
        </div>
        <div class="grupoMontoYDias">
            <input id="txtCantidadDias" type="number" step="any" required v-model="diasIngresado">
            <span class="barra"></span>
            <label for="txtCantidadDias">Plazo (mínimo 30 días)</label>
            <div class="small-container">
                <small v-if="!diasIngresado">Campo requerido</small>
                <small class="error-text" v-else-if="!dias">La cantidad de días debe ser un entero mayor o igual a 30</small>
            </div>
        </div>
    </div>
    <div class="grupo reinvertirCapitalPersona">
        ¿Desea reinvertir el capital? <input type="checkbox" class="checkBoxReinvertirCapital" v-model="deseaReinvertir">
    </div>
    <button type="button" class="btnCalcularMonto" @click="$emit('formulario-enviado', datosFormulario)">Calcular</button>
</form>
</template>

<style>
form {
    width: 50%;
    margin: 0;
}

form h1 {
    text-align: center;
    font-weight: 700;
}

form input {
    background: none;
    color: #5e5d5d;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--colorTextos);
}

form input:focus { 
    outline: none;
}

.grupo {
    position: relative;
    margin: 35px 45px ;
}

.grupoMontoYDias {
    position: relative;
    margin: 35px 0;
}

label {
    color: var(--colorTextos);
    font-size: 16px;
    position: absolute;
    left: 5px;
    top: 10px;
    transition: 0.5s ease all;
    pointer-events: none;
}

input:focus~label,
input:valid~label {
    top: -14px;
    font-size: 12px;
    color: #000000ac;
}

.barra {
    position: relative;
    display: block;
    width: 100%;
}

.barra::before {
    content: "";
    height: 2px;
    width: 0%;
    bottom: 0;
    position: absolute;
    background: linear-gradient(to right, #4CA1AF, #2C3E50);
    transition: 0.3s ease width;
    left: 0;
}

input:focus~.barra::before {
    width: 100%;
}

.btnCalcularMonto {
    font-family: 'roboto';
    background: #2C3E50;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4CA1AF, #2C3E50);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4CA1AF, #2C3E50);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border: none;
    display: block;
    width: 80%;
    margin: 10px auto;
    color: #fff;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
}

.reinvertirCapitalPersona {
    width: 46%;
    display: flex;
    justify-content: space-between;
}

.checkBoxReinvertirCapital {
    width: auto;
}

.small-container {
    height: 1rem;
    color: #777;
}

.error-text {
    color: rgb(231, 7, 7);
}
</style>