import Memory from '../../pages/memory/memory'
import TicTacToe from '../../pages/tic_tac_toe/tic_tac_toe'
import Trivial from '../../pages/trivial/trivial'
import createNav from '../nav/nav'
import './header.css'
export default function Header() {
  const divApp = document.querySelector('#app')
  const header = document.createElement('section')
  header.id = 'header'
  const divHeader = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.textContent = 'GAMES'
  const h2 = document.createElement('h2')
  h2.textContent = 'ARF creations'
  const divButtons = document.createElement('div')
  divButtons.classList.add('divbuttonsNav')
  createNav('ticBtn', 'Tic Tac Toe', divButtons)
  createNav('memoBtn', 'Memory', divButtons)
  createNav('trivialBtn', 'Trivial', divButtons)
  divHeader.append(h1, h2, divButtons)
  header.append(divHeader)
  divApp.append(header)

  const ticTacToeBtn = document.querySelector('.ticBtn')
  ticTacToeBtn.addEventListener('click', () => {
    divApp.innerHTML = ''
    TicTacToe(divApp)
  })

  const memoryBtn = document.querySelector('.memoBtn')
  memoryBtn.addEventListener('click', () => {
    divApp.innerHTML = ''
    Memory(divApp)
  })

  const trivialBtn = document.querySelector('.trivialBtn')
  trivialBtn.addEventListener('click', () => {
    divApp.innerHTML = ''
    Trivial(divApp)
  })
}
