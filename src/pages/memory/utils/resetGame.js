import initGame from './initGame'
import resetCards from './resetCards'

export default function resetGame() {
  const divCards = document.querySelector('.divCards')
  localStorage.removeItem('points')
  localStorage.removeItem('cards')
  // firstCard = null
  // secondCard = null
  // counterClick = 0
  divCards.innerHTML = ''
  // location.reload()
  initGame(divCards)
}
