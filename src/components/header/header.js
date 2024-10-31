import createNav from '../nav/nav'
import './header.css'
export default function Header(parentNode) {
  const header = document.createElement('header')
  header.id = 'header'
  const divHeader = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.textContent = 'GAMES'
  const h2 = document.createElement('h2')
  h2.textContent = 'ARF creations'
  const divButtons = document.createElement('div')
  createNav(
    'Tic Tac Toe',
    './src/pages/tic_tac_toe/tic_tac_toe.html',
    divButtons
  )
  createNav('Memory', './src/pages/memory/memory.html', divButtons)
  createNav('Trivial', './src/pages/trivial/trivial.html', divButtons)
  divHeader.append(h1, h2, divButtons)
  header.append(divHeader)
  parentNode.append(header)
}
