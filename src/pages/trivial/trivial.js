import templatePage from '../page_template'
import './trivial.css'
import printQuestion from './utils/printQuestion.js'
import { dataTrivial } from './utils/dataTrivial.js'
import resetValues from './utils/resetValues.js'
const divApp = document.querySelector('#app')

export default function Trivial() {
  const sectTrivial = document.createElement('section')
  sectTrivial.id = 'divTrivial'
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
  const playGameTriv = document.createElement('div')
  playGameTriv.id = 'playGameTriv'
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
  gameTrivial.append(divControls, playGameTriv)
  sectTrivial.append(gameTrivial)
  divApp.append(sectTrivial)

  printQuestion()

  // let questionary = []
  // let question = null

  // function printQuestion(question) {
  //   divTrivial.innerHTML = ''
  //   if (question) {
  //     const divQuestion = document.createElement('div')
  //     divQuestion.classList.add('divQuestion')
  //     const iconQuestion = document.createElement('img')
  //     iconQuestion.src = question.icon
  //     const theQuestion = document.createElement('h3')
  //     theQuestion.textContent = question.pregunta
  //     const divAnswer = document.createElement('div')
  //     divAnswer.classList.add('divAnswer')
  //     const answer1 = document.createElement('a')
  //     answer1.classList.add('answer')
  //     answer1.textContent = question.respuesta.respuesta1.text
  //     answer1.setAttribute('data-id', question.respuesta.respuesta1.correct)
  //     const answer2 = document.createElement('a')
  //     answer2.classList.add('answer')
  //     answer2.textContent = question.respuesta.respuesta2.text
  //     answer2.setAttribute('data-id', question.respuesta.respuesta2.correct)
  //     const answer3 = document.createElement('a')
  //     answer3.classList.add('answer')
  //     answer3.textContent = question.respuesta.respuesta3.text
  //     answer3.setAttribute('data-id', question.respuesta.respuesta3.correct)
  //     divQuestion.append(iconQuestion, theQuestion)
  //     divAnswer.append(answer1, answer2, answer3)
  //     divTrivial.append(divQuestion, divAnswer)
  //     playGameTriv.append(divTrivial)

  //     answer1.addEventListener('click', () => getAnswer(answer1, question))
  //     answer2.addEventListener('click', () => getAnswer(answer2, question))
  //     answer3.addEventListener('click', () => getAnswer(answer3, question))
  //   } else {
  //     checkWinner()
  //   }
  // }

  // function getAnswer(answer, question) {
  //   const divAnswer = document.querySelector('.divAnswer')
  //   let categoria = question.tipo
  //   let variablePorc = `porc${categoria}`
  //   if (answer.getAttribute('data-id') === 'true') {
  //     answer.style.backgroundColor = '#008000'
  //     window[variablePorc] = (window[variablePorc] || 0) + 20
  //     document.getElementsByClassName(categoria)[0].style.width =
  //       window[variablePorc] + '%'
  //     localStorage.setItem(categoria, JSON.stringify(window[variablePorc]))
  //   } else {
  //     answer.style.backgroundColor = '#ff0000'
  //   }
  //   divAnswer.style.pointerEvents = 'none'
  //   localStorage.setItem('questionary', JSON.stringify(questionary))
  //   question = questionary.shift()
  //   setTimeout(() => {
  //     printQuestion(question)
  //   }, 500)
  // }

  // function checkWinner() {
  //   if (
  //     document.getElementsByClassName('Math')[0].style.width === '100%' &&
  //     document.getElementsByClassName('Language')[0].style.width === '100%' &&
  //     document.getElementsByClassName('Science')[0].style.width === '100%' &&
  //     document.getElementsByClassName('Socials')[0].style.width === '100%'
  //   ) {
  //     const divWinner = document.createElement('div')
  //     divWinner.classList.add('divWinner')
  //     const h3Winner = document.createElement('h3')
  //     h3Winner.textContent = "You're a CRACK!!"
  //     divWinner.append(h3Winner)
  //     divTrivial.append(divWinner)
  //     localStorage.clear()
  //   } else {
  //     const divGameOver = document.createElement('div')
  //     divGameOver.classList.add('divGameOver')
  //     const h3GameOver = document.createElement('h3')
  //     h3GameOver.textContent = 'GAME OVER!'
  //     divGameOver.append(h3GameOver)
  //     divTrivial.append(divGameOver)
  //     localStorage.clear()
  //   }
  // }
  startButton.addEventListener('click', () => {
    localStorage.clear()
    resetValues()
    questionary = [...dataTrivial].sort(() => Math.random() - 0.5)
    question = questionary.shift()
    printQuestion(question)
  })

  // function resetValues() {
  //   divTrivial.innerHTML = ''
  //   let arrayCategorias = ['Math', 'Language', 'Science', 'Socials']
  //   arrayCategorias.forEach((categoria) => {
  //     window[`porc${categoria}`] = 0
  //     document.getElementsByClassName(categoria)[0].style.width = '0%'
  //   })
  // }

  window.addEventListener('DOMContentLoaded', () => {
    let arrayCategorias = ['Math', 'Language', 'Science', 'Socials']
    arrayCategorias.forEach((categoria) => {
      let newValue = JSON.parse(localStorage.getItem(categoria)) || 0
      window[`porc${categoria}`] = newValue
      document.getElementsByClassName(categoria)[0].style.width =
        window[`porc${categoria}`] + '%'
    })
    let savedQuestionary = JSON.parse(localStorage.getItem('questionary'))
    if (savedQuestionary && savedQuestionary.length > 0) {
      questionary = savedQuestionary
      console.log(questionary)
    } else {
      questionary = [...dataTrivial].sort(() => Math.random() - 0.5)
    }
    question = questionary.shift()
    printQuestion(question)
  })
}
