/*Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.*/
function verificar(){
    var caixa = document.querySelector('#nota');
    var numero = Number(caixa.value)
    //console.log(numero);
    var resultado = document.querySelector('.saida')
    
    if(numero > 10){
        var c = 0
        while (numero > c) {
            resultado.innerHTML = 'Valor inválido'
            c++
        }
    } else {
        resultado.innerHTML = 'Nota: ' + numero
    }
}