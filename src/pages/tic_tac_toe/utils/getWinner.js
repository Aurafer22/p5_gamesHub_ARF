const cells = document.querySelectorAll('.cell')
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', newTurn)
}
export default function checkWinner(a, b, c) {
  const cells = document.querySelectorAll('.cell')
  for (let i = 0; i < cells.length; i++) {
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
}
export function getWinner(turn) {
  const winner = document.querySelector('#winner')
  winner.innerHTML = turn
}
