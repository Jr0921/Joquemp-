const result = document.querySelector('.result')
const suaPontuacao = document.querySelector('#pontuacaoHumano')
const pontuacaoMaquina = document.querySelector('#pontuacaoMaquina')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHumano = (escolha) => {

    play(escolha, playMaquina())
}

const playMaquina = () => {
    const opcoes = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return opcoes[randomNumber]
}

const play = (humano, maquina) => {

    console.log('Humano ' + humano + 'Maquinia ' + maquina)

    if (humano === maquina) {
        result.innerHTML = "Deu empate"
    } else if (
        (humano === "pedra" && maquina === "tesoura") ||
        (humano === "tesoura" && maquina === "papel") ||
        (humano === "papel" && maquina === "pedra")
        ) {
            humanScoreNumber++
            suaPontuacao.innerHTML = humanScoreNumber
            result.innerHTML = "Você ganhou!"

        } else {
            machineScoreNumber++
            pontuacaoMaquina.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a maquina"
    }
}