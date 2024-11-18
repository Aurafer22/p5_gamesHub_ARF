import checkWinner from './getWinner'
import noWinner from './noWinner'
let turn = true
let hasWinner = false

export default function newTurn(e) {
  const winner = document.querySelector('#winner')
  const cells = document.querySelectorAll('.cell')
  // const gameOver = Array.from(cells).every((cell) =>
  //   cell.classList.contains('clicked')
  // )
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
  // const gameOver = Array.from(cells).every((cell) =>
  //   cell.classList.contains('clicked')
  // )
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
  const gameOver = Array.from(cells).every((cell) =>
    cell.classList.contains('clicked')
  )
  for (let combination of winnerCombinations) {
    if (checkWinner(combination[0], combination[1], combination[2])) {
      hasWinner = true
      break
    }
    if (!hasWinner && gameOver) {
      noWinner()
    }
  }
}
