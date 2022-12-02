function carregar(){
    var mensagem = document.querySelector('#mensagem')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var horaAtual = data.getHours()
    var minutos = data.getMinutes()

    mensagem.innerHTML = `Agora são extamente ${horaAtual} horas e ${minutos} minutos.`

    if(horaAtual >= 0 && horaAtual < 12){
        img.src = './img/manha.jpg'
        document.body.style.background = '#ddcbb5';
    } else if (horaAtual <= 18) {
        img.src = './img/tarde.jpg'
        document.body.style.background = '#804935'
    } else {
        img.src = './img/noite.jpg'
        document.body.style.background = '#29518e'
    }
}

