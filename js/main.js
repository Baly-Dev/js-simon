// variabili
const showNumber = document.getElementById('showNumber')
const randomNumbers = []
const userNumbers = []
const equalNumbers = []

// genera 5 numeri casuali
getRandomNumbers(randomNumbers)
console.log(randomNumbers)

// mostra i numeri per 30 secondi
showNumber.innerHTML = `I numeri sono: ${randomNumbers}`
let counter = 0
const timer = setInterval(function(){
    counter ++
    showNumber.classList.remove('d-none')

    console.log(counter)
    if (counter == 5){
        showNumber.classList.add('d-none')
        clearInterval(timer)
    }
}, 1000)

// creare un prompt ciclato per inserire i numeri uno alla volta
setTimeout(function(){
    // salvare i numeri proposti dall'utente in un array
    for (let i = 0; i < randomNumbers.length; i++){
        const userNumber = parseInt(window.prompt('Inserisci un numero'))
        userNumbers.push(userNumber)
    }

    // confrontare i numeri generati con quelli proposti dall'utente
    for (let i = 0; i < randomNumbers.length; i++){
        if(randomNumbers.includes(userNumbers[i])){
            equalNumbers.push(userNumbers[i])
        }
    }
    console.log(equalNumbers)

    // mostrare quanti e quali numeri sono stati indovinati
    showNumber.classList.remove('d-none')
    showNumber.innerHTML = `Hai indovinato ${equalNumbers.length} numeri, ovvero: ${equalNumbers}`
}, 6000)


function getRandomNumbers(array){
    for (let i = 0; i < 5; i++){
        let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1 )
        // inserire i numeri genrati in un array
        array.push(randomNumber)
    }
}