function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.querySelector('#nascimento')
    var saida = document.querySelector('#saida')

    if (formAno.value == 0 || formAno.value > ano) {
        alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value);
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'masculino'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'img/crianca-m.jpg')
            } else if (idade < 25) {
                img.setAttribute('src', 'img/jovem-m.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/homem-m.jpg')
            } else {
                img.setAttribute('src', 'img/idoso.jpg')
            }
        } else {
            genero = 'feminino'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'img/crianca-f.jpg')
            } else if (idade < 25) {
                img.setAttribute('src', 'img/jovem-f.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/mulher-f.jpg')
            } else {
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }

        saida.style.textAlign = 'center'
        saida.innerHTML = `Detectamos o gênero ${genero} com ${idade} anos`
        saida.appendChild(img)
    }
}