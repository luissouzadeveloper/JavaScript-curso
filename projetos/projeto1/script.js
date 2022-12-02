function calcular(){
    var nota1 = Number(document.querySelector('#nota1').value)
    var nota2 = Number(document.querySelector('#nota2').value)
    var res = document.querySelector('#saida')
    var media = (nota1 + nota2) / 2;
    
    if (nota1 == '' || nota2 == '') {
        alert('Informe as notas');
    } else if (media == 0 && media < 5) {
        res.innerHTML = 'Você está reprovado'
        res.style.color = 'red'
    } else if (media >= 5 && media < 7) {
        res.innerHTML = 'Você está de recuperação'
        res.style.color = 'orange'
    } else {
        res.innerHTML = 'Você está aprovado'
        res.style.color = 'green'
    }
}