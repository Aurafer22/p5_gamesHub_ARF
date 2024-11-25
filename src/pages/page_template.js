import Header from '../components/header/header'
import './page_template.css'
const divApp = document.querySelector('#app')
export default function templatePage(game, parentNode) {
  const divNavGame = document.createElement('div')
  divNavGame.classList.add('divNavGame')
  const divLogo = document.createElement('div')
  divLogo.classList.add('divLogo')
  const aDivLogo = document.createElement('a')
  // aDivLogo.href = '#header'
  aDivLogo.classList.add('divLogo')
  const logo = document.createElement('p')
  logo.textContent = 'GAME'
  const logo2 = document.createElement('p')
  logo2.textContent = 'ARF creations'
  const divH2 = document.createElement('div')
  const h2Game = document.createElement('h2')
  h2Game.textContent = game

  divLogo.append(logo, logo2)
  aDivLogo.append(divLogo)
  divH2.append(h2Game)
  divNavGame.append(aDivLogo, divH2)
  parentNode.append(divNavGame)
  aDivLogo.addEventListener('click', () => {
    divApp.innerHTML = ''
    Header(divApp)
  })
}
