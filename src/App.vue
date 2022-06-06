<template>
<!-- Hay que dividir todo este template en componentes -->
  <form>
    <h1>Simulador de Plazo Fijo</h1>
    <div id="nombrePersona" class="grupo">
        <input id="txtNombre" type="text" required><span class="barra"></span>
        <label for="txtNombre">Nombre</label>
        <div class="error-container">
            <small id="errorNombre" class="errorInput"></small>
        </div>
    </div>
    <div id="apellidoPersona" class="grupo">
        <input id="txtApellido" type="text" required><span class="barra"></span>
        <label for="txtApellido">Apellido</label>
        <div class="error-container">
            <small id="errorApellido" class="errorInput"></small>
        </div>
    </div>
    <div id="montoAInvertirYCantidadDias" class="grupo">
        <div id="capitalAInvertir" class="grupoMontoYDias">
            <input id="txtMontoAInvertir" type="number" step="any" required><span class="barra"></span>
            <label for="txtMontoAInvertir">Capital a invertir (mínimo $1000)</label>
            <div class="error-container">
                <small id="errorMonto" class="errorInput"></small>
            </div>
        </div>
        <div id="PlazoAInvertir" class="grupoMontoYDias">
            <input id="txtCantidadDias" type="number" step="any" required><span class="barra"></span>
            <label for="txtCantidadDias">Plazo (mínimo 30 días)</label>
            <div class="error-container">
                <small id="errorDias" class="errorInput"></small>
            </div>
        </div>
    </div>
    <div id="reinvertirCapitalPersona" class="grupo">
        ¿Desea reinvertir el capital? <input type="checkbox" id="checkBoxReinvertirCapital">
    </div>
    <button id="btnCalcularMonto" value="calcular">Calcular</button>
  </form>

  <div class="panel-derecho">
    <div id="resultados-container"></div>

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
/* Por defecto importamos todos los estilos, pero a medida que agreguemos componentes
** se deberán quitar de style.css los estilos específicos del componente, de modo
** que al final solo queden los estilos 'base' que todos los componentes comparten
*/
@import './assets/style.css';
</style>
