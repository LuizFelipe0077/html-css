function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'img/manhã.jpg'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'img/tarde.jpg'
    } else {
        // boa noite
        img.src = 'img/noite.jpg'
    }
}

function carregar2() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) { gênero = 'Homem'} else if (fsex[1].checked) { gênero = 'Mulher'}
         
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}