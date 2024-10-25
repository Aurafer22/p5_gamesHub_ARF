import templatePage from '../page_template'
import './tic_tac_toe.css'
const divApp = document.querySelector('#appTictactoe')

// creación de elementos de la página

templatePage('Tic Tac Toe', divApp)
const gameTictactoe = document.createElement('div')
gameTictactoe.classList.add('tic_tac_toe')
const divControls = document.createElement('div')
divControls.classList.add('divControls')
const divCounter = document.createElement('div')
const winner = document.createElement('p')
winner.textContent = ''
const puntos = document.createElement('p')
puntos.textContent = 'WIN!!'
const startButton = document.createElement('button')
startButton.textContent = 'Start'
const playGame = document.createElement('div')
playGame.id = 'playGame'
const tablero = document.createElement('div')
tablero.classList.add('tablero')

for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  tablero.append(cell)
}

divCounter.append(winner, puntos)
divControls.append(divCounter, startButton)
playGame.append(tablero)
gameTictactoe.append(divControls, playGame)
divApp.append(gameTictactoe)

// Funcionalidad del juego
let turn = true
const cells =
  // JSON.parse(localStorage.getItem('tablero')) ||
  document.querySelectorAll('.cell')
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', newTurn)
}
console.log(cells)

function newTurn(e) {
  let playTurn = e.target
  let cellClicked = e.target.innerHTML
  if (cellClicked == '' && turn) {
    playTurn.textContent = 'X'
    playTurn.classList.add('clicked')
    turn = false
  } else if (cellClicked == '' && !turn) {
    playTurn.textContent = 'O'
    playTurn.classList.add('clicked')
    turn = true
  }
  console.log(e.target.classList)

  checkWinner(0, 1, 2)
  checkWinner(3, 4, 5)
  checkWinner(6, 7, 8)
  checkWinner(0, 3, 6)
  checkWinner(1, 4, 7)
  checkWinner(2, 5, 8)
  checkWinner(0, 4, 8)
  checkWinner(2, 4, 6)
  const gameOver = Array.from(cells).every((cell) =>
    cell.classList.contains('clicked')
  )
  if (gameOver) {
    noWinner()
  }
}

// Función para checkear si hay ganador

function checkWinner(a, b, c) {
  if (
    cells[a].innerHTML.length &&
    cells[a].innerHTML == cells[b].innerHTML &&
    cells[b].innerHTML == cells[c].innerHTML
  ) {
    cells[a].style.backgroundColor = '#ffff00'
    cells[b].style.backgroundColor = '#ffff00'
    cells[c].style.backgroundColor = '#ffff00'
    cells[a].style.color = '#363636'
    cells[b].style.color = '#363636'
    cells[c].style.color = '#363636'
    getWinner(cells[a].innerHTML)
  }
}
function getWinner(turn) {
  winner.innerHTML = turn
}
function noWinner(turn) {
  winner.innerHTML = 'Game Over'
  winner.style.fontSize = '40px'
  winner.style.color = '#a70a0a'
  Array.from(cells).every((cell) => (cell.style.color = '#a70a0a'))
}
startButton.addEventListener('click', () => {
  location.reload()
})
