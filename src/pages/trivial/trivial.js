import { dataTrivial } from './utils/dataTrivial.js'
import './trivial.css'
import templatePage from '../page_template.js'
import printQuestion from './utils/printQuestion.js'
import resetLocalStorage from './utils/resetLocalStorage.js'
import resetValues from './utils/resetValues.js'
import getLocalStorage from './utils/getLocalStorage.js'
import restartGame from '../restartGame.js'
const divApp = document.querySelector('#appTrivial')
export default function Trivial(divApp) {
  const sectTrivial = document.createElement('section')
  sectTrivial.id = 'secTrivial'
  templatePage('Trivial for kids', sectTrivial)
  const gameTrivial = document.createElement('div')
  gameTrivial.classList.add('trivial')
  const divControls = document.createElement('div')
  divControls.classList.add('divControls')
  const divCounters = document.createElement('div')
  divCounters.classList.add('divCounters')
  const datosMath = document.createElement('p')
  const divDatosMath = document.createElement('div')
  divDatosMath.classList.add('Math')
  datosMath.textContent = 'Math'
  const datosLanguage = document.createElement('p')
  const divDatosLanguage = document.createElement('div')
  divDatosLanguage.classList.add('Language')
  datosLanguage.textContent = 'Language'
  const datosScience = document.createElement('p')
  const divDatosScience = document.createElement('div')
  divDatosScience.classList.add('Science')
  datosScience.textContent = 'Sciences'
  const datosSocials = document.createElement('p')
  const divDatosSocials = document.createElement('div')
  divDatosSocials.classList.add('Socials')
  datosSocials.textContent = 'Socials'
  const startButton = document.createElement('button')
  startButton.textContent = 'Start'
  const playGame = document.createElement('div')
  playGame.id = 'playGame'
  const divTrivial = document.createElement('div')
  divTrivial.classList.add('divTrivial')
  divCounters.append(
    datosMath,
    datosLanguage,
    datosScience,
    datosSocials,
    divDatosMath,
    divDatosLanguage,
    divDatosScience,
    divDatosSocials
  )
  divControls.append(divCounters, startButton)
  playGame.append(divTrivial)
  gameTrivial.append(divControls, playGame)
  sectTrivial.append(gameTrivial)
  divApp.append(sectTrivial)

  let questionary = [...dataTrivial].sort(() => Math.random() - 0.5)
  let question = questionary.shift()
  getLocalStorage(questionary, question)

  startButton.addEventListener('click', () => {
    restartGame('Trivial')
  })
}
