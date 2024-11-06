import templatePage from '../page_template'
import './tic_tac_toe.css'
const divApp = document.querySelector('#app')

// creación de elementos de la página
export default function TicTacToe() {
  const divTictacToe = document.createElement('section')
  divTictacToe.id = 'divTictacToe'
  templatePage('Tic Tac Toe', divTictacToe)
  const gameTictactoe = document.createElement('div')
  gameTictactoe.classList.add('tic_tac_toe')
  gameTictactoe.id = 'tictactoe'
  const divControls = document.createElement('div')
  divControls.classList.add('divControlsTictac')
  const divCounter = document.createElement('div')
  const winner = document.createElement('p')
  winner.textContent = ''
  const puntos = document.createElement('p')
  puntos.textContent = 'WIN!!'
  const startButton = document.createElement('button')
  startButton.textContent = 'Start'
  const playGameTicTac = document.createElement('div')
  playGameTicTac.id = 'playGameTicTac'
  const tablero = document.createElement('div')
  tablero.classList.add('tablero')

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    tablero.append(cell)
  }

  divCounter.append(winner, puntos)
  divControls.append(divCounter, startButton)
  playGameTicTac.append(tablero)
  gameTictactoe.append(divControls, playGameTicTac)
  divTictacToe.append(gameTictactoe)
  divApp.append(divTictacToe)

  // Funcionalidad del juego
  let turn = true
  let hasWinner = false
  const cells = document.querySelectorAll('.cell')
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', newTurn)
  }
  console.log(cells)

  function newTurn(e) {
    let playTurn = e.target
    console.log(playTurn)
    let cellClicked = e.target.innerHTML
    console.log(cellClicked)
    if (cellClicked == '' && turn) {
      playTurn.textContent = 'X'
      playTurn.classList.add('clicked')
      turn = false
    } else if (cellClicked == '' && !turn) {
      playTurn.textContent = 'O'
      playTurn.classList.add('clicked')
      turn = true
    }
    localStorage.setItem('actualPlay', cellClicked)
    const winnerCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    winnerCombinations.forEach((combination) => {
      if (checkWinner(combination[0], combination[1], combination[2])) {
        hasWinner = true
      }
    })
    const gameOver = Array.from(cells).every((cell) =>
      cell.classList.contains('clicked')
    )
    if (hasWinner && gameOver) {
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
      if (!hasWinner) {
        getWinner(cells[a].innerHTML)
        Array.from(cells).forEach((cell) => {
          cell.style.pointerEvents = 'none'
        })
      }
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

  // window.addEventListener('DOMContentLoaded', () => {
  //   let cellsSaved = JSON.parse(localStorage.getItem('actualPlay'))
  //   console.log(cellsSaved.textContent)

  //   newTurn
  // })
}
