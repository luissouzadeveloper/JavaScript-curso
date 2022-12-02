function contagem(){
    var saida = document.querySelector('#saida');
    var inicio = Number(document.querySelector('#caixa-inicio').value)
    var fim = Number(document.querySelector('#caixa-fim').value)
    var passo = Number(document.querySelector('#caixa-passo').value)

    var contador = inicio
    if (contador == '' && fim == '') {
        alert('Impossível contar!')
    } else if(passo == 0){
        passo = 1
    } else if (contador > fim) {
        while (contador >= fim) {
            saida.innerHTML += '👉' + contador + ' '
            contador--
        }
    } else {
        while (contador <= fim) {
            saida.innerHTML += '👉' + contador + ' '
            contador += passo;
        }
        saida.innerHTML += ' 🏁'
    }
}