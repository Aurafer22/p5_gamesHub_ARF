import templatePage from '../page_template'
import './tic_tac_toe.css'
// import checkWinner from './utils/getWinner'
// import noWinner from './utils/noWinner'
import newTurn from './utils/playTurn'
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
  winner.id = 'winner'
  winner.textContent = ''
  const puntos = document.createElement('p')
  puntos.textContent = 'WIN!!'
  const startButtonTic = document.createElement('button')
  startButtonTic.textContent = 'Start'
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
  divControls.append(divCounter, startButtonTic)
  playGameTicTac.append(tablero)
  gameTictactoe.append(divControls, playGameTicTac)
  divTictacToe.append(gameTictactoe)
  divApp.append(divTictacToe)

  // let turn = true
  // let hasWinner = false

  const cells = document.querySelectorAll('.cell')
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', newTurn)
  }
  // const gameOver = Array.from(cells).every((cell) =>
  //   cell.classList.contains('clicked')
  // )
  // function newTurn(e) {
  //   let playTurn = e.target
  //   let cellClicked = e.target.innerHTML
  //   if (cellClicked == '' && turn) {
  //     playTurn.textContent = 'X'
  //     playTurn.classList.add('clicked')
  //     turn = false
  //   } else if (cellClicked == '' && !turn) {
  //     playTurn.textContent = 'O'
  //     playTurn.classList.add('clicked')
  //     turn = true
  //   }

  //   const winnerCombinations = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6]
  //   ]
  //   for (let combination of winnerCombinations) {
  //     if (checkWinner(combination[0], combination[1], combination[2])) {
  //       hasWinner = true
  //       break
  //     }
  //   }
  //   if (hasWinner === false && gameOver) {
  //     noWinner(winner, cells)
  //   }
  // }

  startButtonTic.addEventListener('click', () => {
    location.reload()
  })
}
