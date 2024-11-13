import initGame from './initGame'

export default function resetGame() {
  const divCards = document.querySelector('.divCards')
  localStorage.removeItem('points')
  localStorage.removeItem('cards')
  divCards.innerHTML = ''
  location.reload()
  initGame(divCards)
}
