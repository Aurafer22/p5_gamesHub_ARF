import templatePage from '../page_template'
import restartGame from '../restartGame'
import './tic_tac_toe.css'
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

  const cells = document.querySelectorAll('.cell')
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', newTurn)
  }

  startButtonTic.addEventListener('click', () => {
    restartGame('TicTacToe')
  })
}
