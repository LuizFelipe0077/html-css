
function verificarVelocidade() {
    var velocidade = document.getElementById('velocidade').value;
    velocidade = parseFloat(velocidade);
    var resultado = document.getElementById('resultado');
    if (velocidade > 60) {
        resultado.innerHTML = `A velocidade do seu carro é  <strong>${velocidade}</strong> km/h`;
    }else {
        resultado.innerHTML = `A velocidade do seu carro é  <strong>${velocidade}</strong> km/h`;
    }
    resultado.innerHTML += `<br>Dirija sempre usando cinto de segurança!`;
}