//variaveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//  Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//função callback - uma func. que está dentro de uma outra func. como 2 argumento 
function handleTryClick(event) {
    event.preventDefault()//não fazer o padrão desse evento (click, dentro de um form tem por padrão fazer um submit da pág e atuliza - la)

    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == randomNumber) {
        togleScreen()
        document.querySelector(".screen2 h2")
        .innerText = `acertou em ${xAttempts} tentativas`
    }
    //console.log(inputNumber.value)
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    togleScreen()
    xAttempts = 1
    
    randomNumber = Math.round(Math.random() * 10)
}

function togleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}