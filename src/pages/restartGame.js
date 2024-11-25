import Memory from './memory/memory'
import TicTacToe from './tic_tac_toe/tic_tac_toe'
import Trivial from './trivial/trivial'

export default function restartGame(gameName) {
  const divApp = document.querySelector('#app')
  divApp.innerHTML = ''
  if (gameName === 'Memory') {
    localStorage.removeItem('points')
    localStorage.removeItem('cards')
    Memory(divApp)
  } else if (gameName === 'TicTacToe') {
    TicTacToe(divApp)
  } else if (gameName === 'Trivial') {
    localStorage.removeItem('Math')
    localStorage.removeItem('Language')
    localStorage.removeItem('Science')
    localStorage.removeItem('Socials')
    localStorage.removeItem('questionary')
    Trivial(divApp)
  }
}
