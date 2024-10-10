// variáveis da aplicação
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickCookie = document.querySelector("#clickCookie")
const buttonReset = document.querySelector("#buttonReset")

// eventos
clickCookie.addEventListener('click', handleClick)
buttonReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)

// funções callback / métodos
function handleClick(event) {
    event.preventDefault()

    toggleScreen()











}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleResetClick() {
    toggleScreen()
}

function pressEnter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
        }
}






