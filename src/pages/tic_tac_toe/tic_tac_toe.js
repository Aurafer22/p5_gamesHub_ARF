import templatePage from '../page_template'
import './tic_tac_toe.css'
const divApp = document.querySelector('#app')

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

  let turn = true
  let hasWinner = false
  const cells = document.querySelectorAll('.cell')
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', newTurn)
  }

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
    // let CellsClicked = document.querySelectorAll('.clicked')
    // localStorage.setItem('actualPlay', JSON.stringify(CellsClicked))
    // localStorage.setItem('turn', turn)
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
    for (let combination of winnerCombinations) {
      if (checkWinner(combination[0], combination[1], combination[2])) {
        hasWinner = true
        break
      }
    }
    const gameOver = Array.from(cells).every((cell) => {
      cell.classList.contains('clicked')
    })
    if (!hasWinner && gameOver) {
      noWinner()
    }
  }

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
      Array.from(cells).forEach((cell) => {
        cell.style.pointerEvents = 'none'
      })
    }
  }
  function getWinner(turn) {
    winner.innerHTML = turn
  }
  function noWinner() {
    winner.innerHTML = 'Game Over'
    winner.style.fontSize = '40px'
    winner.style.color = '#a70a0a'
    Array.from(cells).every((cell) => (cell.style.color = '#a70a0a'))
  }
  startButton.addEventListener('click', () => {
    location.reload()
  })

  // window.addEventListener('DOMContentLoaded', () => {
  //   let turnSaved = localStorage.getItem('turn')
  //   let cellsSaved = JSON.parse(localStorage.getItem('actualPlay'))
  //   Array.from(cellsSaved).forEach((cellSaved) => {
  //     if (turnSaved === true) {
  //       cellSaved.textContent = 'X'
  //     } else {
  //       cellSaved.textContent = 'O'
  //     }
  //   })
  // })
}
