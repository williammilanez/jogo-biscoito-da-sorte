const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

// função callback
function handleClick(event) {
    event.preventDefault()

    screen1.classList.add("hide")
    screen2.classList.remove("hide")
}

// eventos
const generateRandomText = document.querySelector("#generateRandomText")
const buttonReset = document.querySelector("#buttonReset")

generateRandomText.addEventListener('click', handleClick)
buttonReset.addEventListener('click', function() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
})

// falta criar o evento de selecionar um texto aleatório do h2

