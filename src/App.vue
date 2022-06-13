<script>
import Formulario from "./assets/components/Formulario.vue"
import Resultados from "./assets/components/Resultados.vue"
import ComparacionTasas from "./assets/components/ComparacionTasas.vue"
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
                deseaReinvertir: null,
                esValido: false,
            },
        }
    },
    methods: {
        setDatosFormulario(datos) {
            this.datosFormulario = datos;
        },
    },
    components: {
        Formulario,
        Resultados,
        ComparacionTasas,
    },
}
</script>

<template>
  <Formulario @formulario-enviado="setDatosFormulario"/>
  

  <div class="panel-derecho">
    <div id="resultados-container">
        <Resultados v-if="datosFormulario.esValido" :datos-formulario="datosFormulario"/>
    </div>
    
    <ComparacionTasas/>
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