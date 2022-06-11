<script>
import Formulario from "./assets/components/Formulario.vue"
import Resultados from "./assets/components/Resultados.vue"
import {
    obtenerPorcentaje,
    montoFinal,
} from "./utils/calculos"

export default {
    data() {
        return {
            datosFormulario: {
                nombre: null,
                apellido: null,
                monto: null,
                dias: null,
                esValido: false,
                porcentaje: null,
            },
        }
    },
    methods: {
        setDatosFormulario(datos) {
            this.datosFormulario = datos;
            this.porcentaje = obtenerPorcentaje(datos.dias)  
        },
    },
    components: {
        Formulario,
        Resultados,
    },
}
</script>

<template>
  <Formulario @formulario-enviado="setDatosFormulario"/>
  

  <div class="panel-derecho">
    <div id="resultados-container">
        <Resultados :datos-formulario="datosFormulario"/>
    </div>
    <div class="aclaracion">
        <table class="tablaTasas">
            <caption class="tituloCuadro">Cuadro comparativo tasas y días</caption>

            <tr>
                <th>Cantidad de días</th>
                <th>Porcentaje %</th>
            </tr>
            <tr>
                <td>30 - 60</td>
                <td>40</td>
            </tr>
            <tr>
                <td>61 - 120</td>
                <td>45</td>
            </tr>
            <tr>
                <td>121 - 360</td>
                <td>50</td>
            </tr>
            <tr>
                <td>361 en adelante</td>
                <td>65</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<style>
/*
** Por defecto importamos todos los estilos, pero a medida que agreguemos componentes
** se deberán quitar de style.css los estilos específicos del componente, de modo
** que al final solo queden los estilos 'base' que todos los componentes comparten
*/
@import './assets/style.css';
</style>