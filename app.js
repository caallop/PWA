/**
 * APP Pwa - estanol x gaspçina
 * @author guilherme rosa lopes
 * @version 2.0
 */

function calcular() {
    //capturar os valores das caixas de input
    let gasolina = document.getElementById('gasolina').value
    let etanol = document.getElementById('etanol').value
    let kmGasolinagasolina = document.getElementById('kmGasolina').value
    let kmEtanoltanol = document.getElementById('kmEtanol').value
// calculo da vantagem
if(etanol<(kmEtanoltanol/kmGasolinagasolina) *gasolina ) {
    document.getElementById('status').src = 'img/etanol.png'
} else {
        document.getElementById('status').src = 'img/gasolina.png'
}
    }