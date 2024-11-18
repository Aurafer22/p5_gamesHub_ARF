export default function noWinner() {
  const winner = document.querySelector('#winner')
  const cells = document.querySelectorAll('.cell')
  winner.innerHTML = 'Game Over'
  winner.style.fontSize = '40px'
  winner.style.color = '#a70a0a'
  Array.from(cells).every((cell) => (cell.style.color = '#a70a0a'))
}
