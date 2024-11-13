import templatePage from '../page_template'
import initGame from './utils/initGame'
import './memory.css'
import blockCards from './utils/blockCards'
import openCards from './utils/openCards'
import resetCards from './utils/resetCards'
import resetGame from './utils/resetGame'
import getLocalStorageMemo from './utils/getLocalStorage'
import checkWinnerMemo from './utils/checkWinner'

const divApp = document.querySelector('#app')
export default function Memory() {
  const divMemory = document.createElement('section')
  divMemory.id = 'divMemory'
  templatePage('The Memory', divMemory)
  const gameMemory = document.createElement('div')
  gameMemory.classList.add('memory')
  gameMemory.id = 'memory'
  const divControls = document.createElement('div')
  divControls.classList.add('divControlsMemory')
  const divCounter = document.createElement('div')
  const counter = document.createElement('p')
  counter.id = 'counter'
  counter.textContent = ''
  const points = document.createElement('p')
  points.textContent = 'POINTS'
  const startButton = document.createElement('button')
  startButton.textContent = 'Start'
  const playGameMemo = document.createElement('div')
  playGameMemo.id = 'playGameMemo'
  const divCards = document.createElement('div')
  divCards.classList.add('divCards')

  divCounter.append(counter, points)
  divControls.append(divCounter, startButton)
  playGameMemo.append(divCards)
  gameMemory.append(divControls, playGameMemo)
  divMemory.append(gameMemory)
  divApp.append(divMemory)

  initGame(divCards)
  startButton.addEventListener('click', () => {
    resetGame()
  })

  let firstCard = null
  let secondCard = null
  let counterClick = 0
  let counterPoints = localStorage.getItem('points') || 0
  let cardsFlipped
  let hasWinner = false
  const allCards = document.querySelectorAll('.card')

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
        blockCards(allCards)
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
          resetCards(firstCard, secondCard, counterClick)
          openCards(allCards)

          cardsFlipped = Array.from(document.querySelectorAll('.flipped')).map(
            (card) => card.getAttribute('data-id')
          )
          counterClick = 0
          localStorage.setItem('points', counterPoints)
          localStorage.setItem('cards', JSON.stringify(cardsFlipped))
        }, 1000)
      }
      if (
        Array.from(allCards).every((card) => card.classList.contains('flipped'))
      ) {
        checkWinnerMemo()
        hasWinner = true
        if (hasWinner) {
          localStorage.removeItem('points')
          localStorage.removeItem('cards')
        }
      }
    })
  )

  window.addEventListener('DOMContentLoaded', () =>
    getLocalStorageMemo(counterPoints, counter, allCards)
  )
}
