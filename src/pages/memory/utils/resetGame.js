import initGame from './initGame'

export default function resetGame() {
  const divCards = document.querySelector('.divCards')
  localStorage.clear()
  divCards.innerHTML = ''
  location.reload()
  initGame()
}
