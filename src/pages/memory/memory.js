import templatePage from '../page_template'
import initGame from './utils/initGame'
import './memory.css'
import blockCards from './utils/blockCards'
import openCards from './utils/openCards'
import checkWinner from './utils/checkWinner'
import resetCards from './utils/resetCards'
import resetGame from './utils/resetGame'

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

  // let cards = [...dataMemory, ...dataMemory]
  // let newGame = cards.sort(() => Math.random() - 0.5)

  initGame(divCards)
  startButton.addEventListener('click', () => {
    resetGame()
  })

  let firstCard = null
  let secondCard = null
  let counterClick = 0
  let counterPoints = 0
  let cardsFlipped
  let hasWinner = false
  const allCards = document.querySelectorAll('.card')
  // function blockCards() {
  //   Array.from(allCards).forEach((card) => {
  //     card.style.pointerEvents = 'none'
  //   })
  // }
  // function openCards() {
  //   Array.from(allCards).forEach((card) => {
  //     if (!card.classList.contains('flipped')) {
  //       card.style.pointerEvents = 'auto'
  //     }
  //   })
  // }

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
          resetCards()
          openCards(allCards)

          cardsFlipped = Array.from(document.querySelectorAll('.flipped')).map(
            (card) => card.getAttribute('data-id')
          )
        }, 1000)
        localStorage.setItem('points', counterPoints)
        localStorage.setItem('cards', JSON.stringify(cardsFlipped))
      }
      if (
        Array.from(allCards).every((card) => card.classList.contains('flipped'))
      ) {
        checkWinner()
        hasWinner = true
        if (hasWinner) {
          localStorage.clear()
        }
      }
    })
  )

  // function checkWinner() {
  //   const divWinner = document.createElement('div')
  //   divWinner.classList.add('divWinner')
  //   const h3Winner = document.createElement('h3')
  //   h3Winner.textContent = "You're a CRACK!!"
  //   divWinner.append(h3Winner)
  //   divMemory.append(divWinner)
  // }

  // function resetCards() {
  //   firstCard = null
  //   secondCard = null
  //   counterClick = 0
  // }
  // function resetGame() {
  //   localStorage.clear()
  //   divCards.innerHTML = ''
  //   location.reload()
  //   initGame()
  // }
  // window.addEventListener('DOMContentLoaded', () => {
  //   counterPoints = localStorage.getItem('points') || 0
  //   counter.textContent = counterPoints
  //   let savedCardsFlipped = JSON.parse(localStorage.getItem('cards')) || []
  //   Array.from(allCards).forEach((card) => {
  //     if (savedCardsFlipped.includes(card.getAttribute('data-id'))) {
  //       card.classList.add('flipped')
  //     }
  //   })
  // })
}
