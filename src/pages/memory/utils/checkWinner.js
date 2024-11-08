export default function checkWinner() {
  const divWinner = document.createElement('div')
  divWinner.classList.add('divWinner')
  const h3Winner = document.createElement('h3')
  h3Winner.textContent = "You're a CRACK!!"
  divWinner.append(h3Winner)
  divMemory.append(divWinner)
}
