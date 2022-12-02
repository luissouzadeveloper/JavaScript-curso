function calcular(){
    var campo1 = document.querySelector('#campoAltura');
    var campo2 = document.querySelector('#campoPeso');
    var altura = Number(campo1.value)
    var peso = Number(campo2.value)
    var resultado = document.querySelector('#res');

    if (altura != '' && peso != '') {
        var imc = peso / (altura * altura);

        if (imc < 18.5) {
            resultado.innerHTML = 'Seu IMC é de ' + imc.toFixed(2)
            var magreza = document.querySelector('.magreza')
            magreza.style.background = 'red'
            magreza.style.color = 'white'
        } else if(imc >= 18.5 && imc < 24.9){
            resultado.innerHTML = 'Seu IMC é de ' + imc.toFixed(2)
            var normal = document.querySelector('.normal')
            normal.style.background = 'green'
            normal.style.color = 'white'
        } else if (imc >= 25 && imc < 29.9) {
            resultado.innerHTML = 'Seu IMC é de ' + imc.toFixed(2)
            var sobrepeso = document.querySelector('.sobrepeso')
            sobrepeso.style.background = 'red'
            sobrepeso.style.color = 'white'
        } else if(imc >= 30 && imc < 39.9){
            resultado.innerHTML = 'Seu IMC é de ' + imc.toFixed(2)
            var obesidade = document.querySelector('.obesidade')
            obesidade.style.background = 'red'
            obesidade.style.color = 'white'
        } else {
            resultado.innerHTML = 'Seu IMC é de ' + imc.toFixed(2)
            var obesidadeSevera = document.querySelector('.obesidade-severa')
            obesidadeSevera.style.background = 'red'
            obesidadeSevera.style.color = 'white'
        }
    } else {
        alert('Não é possível calcular, informe os valores!');
    }

}