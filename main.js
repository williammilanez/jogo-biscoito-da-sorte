// variáveis da aplicação
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickCookie = document.querySelector("#clickCookie")
const buttonReset = document.querySelector("#buttonReset")

const luck = [
    "Lembre-se de errar as vezes, só pra disfarçar sua perfeição!",
    "Se continuar assim, essa semana você dará orgulho! Orgulho pra clínica psiquiátrica!",
    "Ande rindo pra manter a sua ficha criminal limpa!",
    "Caso você caia, levante, não dá para trabalhar deitado(a)!",
    "Tente não jogar tudo para o alto, porque depois você terá que catar!",
    "Levante da cama, porque a cama não vai levantar de você!",
    "O não você já tem, agora vá atrás da humilhação!",
    "Não leve tudo tão a sério, você pode ficar com marcas de expressão!",
    "Vamos trabalhar, porque nascemos bonitos(as), mas não ricos(as)!",
    "Se o plano A não funcionar, o alfabeto ainda tem outras 25 letras!",
    "Trabalhe duro em silêncio, deixe que seu sucesso faça o barulho… ou pelo menos um alarme discreto!",
    "Pra que ir na academia se você está carregando tanto peso na consciência?",
]

// eventos
clickCookie.addEventListener('click', handleClick)
buttonReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)

// funções callback / métodos
function handleClick(event) {
    toggleScreen()
    randomText()
}

function randomText() {
    let allTexts = luck.length
    let randomNumber = Math.floor(Math.random() * allTexts)  
    screen2.querySelector("h2").innerText = `${luck[randomNumber]}`
}

function handleResetClick() {
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
        }
}




