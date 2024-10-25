import templatePage from '../page_template'
import { dataMemory } from './dataMemory'
import './memory.css'

const divApp = document.querySelector('#appMemory')
templatePage('Memory', divApp)

const gameMemory = document.createElement('div')
gameMemory.classList.add('memory')
const divControls = document.createElement('div')
divControls.classList.add('divControls')
const divCounter = document.createElement('div')
const counter = document.createElement('p')
counter.textContent = ''
const points = document.createElement('p')
points.textContent = 'POINTS'
const startButton = document.createElement('button')
startButton.textContent = 'Start'
const playGame = document.createElement('div')
playGame.id = 'playGame'
const divCards = document.createElement('div')
divCards.classList.add('divCards')

divCounter.append(counter, points)
divControls.append(divCounter, startButton)
playGame.append(divCards)
gameMemory.append(divControls, playGame)
divApp.append(gameMemory)

let cards = [...dataMemory, ...dataMemory]
let newGame = cards.sort(() => Math.random() - 0.5)
function initGame() {
  for (const card of newGame) {
    const divFlip = document.createElement('div')
    divFlip.classList.add('divFlip')
    const divCard = document.createElement('div')
    divCard.classList.add('card')
    divCard.setAttribute('data-Card', card.id)
    const anver = document.createElement('div')
    const reverse = document.createElement('img')
    reverse.src = card.image
    divCard.append(anver, reverse)
    divFlip.append(divCard)
    divCards.append(divFlip)
    // playGame.append(divCards)
  }
}
initGame()
startButton.addEventListener('click', () => {
  divCards.innerHTML = ''
  initGame()
})

document.querySelectorAll('.card').forEach((divCard) =>
  divCard.addEventListener('click', () => {
    let firstCard = null
    let secondCard = null
    let stopTurn = false
    if (stopTurn || divCard.classList.contains('flipped')) return
    // divCard.classList.add('flipped')
    if (firstCard === null) {
      firstCard = divCard
      firstCard.classList.add('flipped')
    } else if (secondCard === null) {
      secondCard = divCard
      secondCard.classList.add('flipped')
      stopTurn = true
    }
    console.log(firstCard)
    console.log(secondCard)

    setTimeout(() => {
      if (firstCard === secondCard) {
        // Si coinciden, se mantienen giradas
        stopTurn = false
        resetCards()
      } else {
        // Si no coinciden, se vuelven a voltear después de 5 segundos
        firstCard.classList.remove('flipped')
        secondCard.classList.remove('flipped')
        resetCards()
        stopTurn = false
      }
    }, 2000)
  })
)
function resetCards() {
  firstCard = null
  secondCard = null
}
