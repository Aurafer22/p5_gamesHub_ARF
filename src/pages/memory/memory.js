import templatePage from '../page_template'
import { dataMemory } from './dataMemory'
import './memory.css'

const divApp = document.querySelector('#appMemory')
templatePage('The Memory', divApp)

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
    divCard.setAttribute('data-id', card.id)
    const anver = document.createElement('div')
    const reverse = document.createElement('img')
    reverse.src = card.image
    divCard.append(anver, reverse)
    divFlip.append(divCard)
    divCards.append(divFlip)
  }
}
initGame()
startButton.addEventListener('click', () => {
  divCards.innerHTML = ''
  location.reload()
  initGame()
})

let firstCard = null
let secondCard = null
let counterClick = 0
let counterPoints = 0
const allCards = document.querySelectorAll('.card')
function blockCards() {
  Array.from(allCards).forEach((card) => {
    card.style.pointerEvents = 'none'
  })
}
function openCards() {
  Array.from(allCards).forEach((card) => {
    if (!card.classList.contains('flipped')) {
      card.style.pointerEvents = 'auto'
    }
  })
}

Array.from(allCards).forEach((card) =>
  card.addEventListener('click', () => {
    if (card.classList.contains('flipped')) return
    card.classList.add('flipped')
    counterClick++
    if (counterClick === 1) {
      card.classList.add('flipped')
      firstCard = card
    } else if (counterClick === 2) {
      secondCard = card
      blockCards()
      setTimeout(() => {
        if (
          firstCard.getAttribute('data-id') ===
          secondCard.getAttribute('data-id')
        ) {
          counterPoints++
          counter.textContent = counterPoints
        } else {
          firstCard.classList.remove('flipped')
          secondCard.classList.remove('flipped')
        }
        resetCards()
        openCards()
      }, 1000)
    }
    if (
      Array.from(allCards).every((card) => card.classList.contains('flipped'))
    ) {
      checkWinner()
    }
  })
)

function checkWinner() {
  const divWinner = document.createElement('div')
  divWinner.classList.add('divWinner')
  const h3Winner = document.createElement('h3')
  h3Winner.textContent = "You're a CRACK!!"
  divWinner.append(h3Winner)
  gameMemory.append(divWinner)
}

// const cardClicked = document.querySelectorAll('.flipped')
// Array.from(cardClicked)
// for (let i = 0; i < cardClicked.length; i++) {
//   const card = cardClicked[i]
//   if (card[0] === card[1]) {
//   } else {
//     card[0].classList.remove('flipped')
//     card[1].classList.remove('flipped')
//     openCards()
//   }
// }

// document.querySelectorAll('.card').forEach((divCard) =>
//   divCard.addEventListener('click', () => {
//     let firstCard = null
//     let secondCard = null
//     let stopTurn = false
//     if (stopTurn || divCard.classList.contains('flipped')) return
//     // divCard.classList.add('flipped')
//     if (firstCard === null) {
//       firstCard = divCard
//       firstCard.classList.add('flipped')
//     } else if (secondCard === null) {
//       secondCard = divCard
//       secondCard.classList.add('flipped')
//       stopTurn = true
//     }
//     console.log(firstCard)
//     console.log(secondCard)

//     setTimeout(() => {
//       if (firstCard === secondCard) {
//         // Si coinciden, se mantienen giradas
//         stopTurn = false
//         resetCards()
//       } else {
//         // Si no coinciden, se vuelven a voltear después de 5 segundos
//         firstCard.classList.remove('flipped')
//         secondCard.classList.remove('flipped')
//         resetCards()
//         stopTurn = false
//       }
//     }, 2000)
//   })
// )
function resetCards() {
  firstCard = null
  secondCard = null
  counterClick = 0
}
