import createNav from '../nav/nav'
import './header.css'
export default function Header(parentNode) {
  const header = document.createElement('section')
  header.id = 'header'
  const divHeader = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.textContent = 'GAMES'
  const h2 = document.createElement('h2')
  h2.textContent = 'ARF creations'
  const divButtons = document.createElement('div')
  divButtons.classList.add('divbuttonsNav')
  createNav('Tic Tac Toe', '#divTictacToe', divButtons)
  createNav('Memory', '#divMemory', divButtons)
  createNav('Trivial', '#secTrivial', divButtons)
  divHeader.append(h1, h2, divButtons)
  header.append(divHeader)
  parentNode.append(header)

  // const ticTacToeBtn = document.querySelector('ticTacToeBtn')
  // ticTacToeBtn.addEventListener('click', () => {
  //   header.style.display = 'none'
  //   const ticTacToe = document.querySelector('.tic_tac_toe')
  //   ticTacToe.style.display = 'fixed'
  // })
}
