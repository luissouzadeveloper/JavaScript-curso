// Selcionando todas as imagens
const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')

let atualSlide = 0 // Indice do slider (imagens).

// Esconde os slide ativo
function hideSlider(){
    slider.forEach(item => item.classList.remove('active'))
}

// Mostra o slide ativo
function showSlider(){
    slider[atualSlide].classList.add('active')
}

// Avançar silder
function nextSlider(){
    hideSlider()
    if (atualSlide === slider.length - 1) {
        atualSlide = 0
    } else {
        atualSlide++
    }
    showSlider()
}

// Voltar slider
function prevSlider(){
    hideSlider()
    if (atualSlide === 0) {
        atualSlide = slider.length - 1
    } else {
        atualSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

console.log(slider)