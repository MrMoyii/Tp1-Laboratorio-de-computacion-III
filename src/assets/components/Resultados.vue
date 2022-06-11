<script>
import {
    obtenerPorcentaje,
    montoFinal,
} from "../../utils/calculos"

export default {
    props: {
        datosFormulario: Object
    }
}
</script>

<template>
<div id="resultados-container">
    <h2>Resultados</h2>
    <ul id="resumen-datos">
        <li><span class="bold">Nombre: </span>{{datosFormulario.nombre}} {{datosFormulario.apellido}}</li>
        <li><span class="bold">Capital inicial: </span>${{datosFormulario.monto}}</li>
        <li><span class="bold">Plazo: </span>{{datosFormulario.dias}}</li>
        <li><span class="bold">Tasa aplicada: </span>{{datosFormulario.porcentaje}}</li>
    </ul>
    <div id="tabla-container">
        <table id="resultados-calculos">
            <thead>
                <tr>
                    <th>Período</th>
                    <th>Monto inicial</th>
                    <th>Monto final</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1000.00</td>
                    <td>1033.33</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>1033.33</td>
                    <td>1067.78</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>1067.78</td>
                    <td>1103.37</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>1103.37</td>
                    <td>1140.15</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<style>
#resultados-container {
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#resultados-container h2 {
    text-align: center;
    font-size: 2rem;
}

#resumen-datos {
    list-style-type: none;
    margin: 10px 0;
    border: solid 2px #2C3E50;
    background-color: #58b7c5bd;
}

#resumen-datos li {
    padding: 3px;
}
#resumen-datos li:nth-child(even) {
    background-color: rgb(247, 247, 247);
}

.bold {
    font-weight: bold;
}

#tabla-container {
    height: 100%;
}

table {
    text-align: center;
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    background-color: #58b7c5bd;
    border: solid 2px #2C3E50;
  }

th, td {
    border-right: solid 2px #2C3E50;
    padding: 0.5%;
}

th {
    color: white;
    background-color: #222;
}

tbody tr:nth-child(odd) {
    background-color: rgb(247, 247, 247);
}
</style>