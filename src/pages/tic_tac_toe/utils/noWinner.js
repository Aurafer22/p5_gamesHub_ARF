export default function noWinner(winner, cells) {
  winner.innerHTML = 'Game Over'
  winner.style.fontSize = '40px'
  winner.style.color = '#a70a0a'
  Array.from(cells).every((cell) => (cell.style.color = '#a70a0a'))
}
