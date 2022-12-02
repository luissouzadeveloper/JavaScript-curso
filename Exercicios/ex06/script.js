function acao(){
    var valor = Number(document.querySelector('#caixa-numero').value)
    //console.log(valor)
    var saida = document.querySelector('#saida');
    if (valor == 0) {
        alert('Por favor, insira um valor!')
    } else {
        var contador = 1
        saida.innerHTML = ''
        while (contador <= 10) {
            var item = document.createElement('option')
            item.text = `${valor} x ${contador} = ${valor * contador}`
            saida.appendChild(item);
            contador++
        }
    }

}