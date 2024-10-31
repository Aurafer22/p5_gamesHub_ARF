import templatePage from '../page_template'
import { dataTrivial } from './dataTrivial'
import './trivial.css'
const divApp = document.querySelector('#appTrivial')

templatePage('Trivial for kids', divApp)
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
gameTrivial.append(divControls, playGame)
divApp.append(gameTrivial)

let questionary = dataTrivial.sort(() => Math.random() - 0.5)
let question = questionary.shift()
let porcMath = 0
let porcLanguage = 0
let porcScience = 0
let porcSocials = 0

function printQuestion(question) {
  const divQuestion = document.createElement('div')
  divQuestion.classList.add('divQuestion')
  const iconQuestion = document.createElement('img')
  iconQuestion.src = question.icon
  const theQuestion = document.createElement('h3')
  theQuestion.textContent = question.pregunta
  const divAnswer = document.createElement('div')
  divAnswer.classList.add('divAnswer')
  const answer1 = document.createElement('a')
  answer1.classList.add('answer')
  answer1.textContent = question.respuesta.respuesta1.text
  answer1.setAttribute('data-id', question.respuesta.respuesta1.correct)
  const answer2 = document.createElement('a')
  answer2.classList.add('answer')
  answer2.textContent = question.respuesta.respuesta2.text
  answer2.setAttribute('data-id', question.respuesta.respuesta2.correct)
  const answer3 = document.createElement('a')
  answer3.classList.add('answer')
  answer3.textContent = question.respuesta.respuesta3.text
  answer3.setAttribute('data-id', question.respuesta.respuesta3.correct)
  divQuestion.append(iconQuestion, theQuestion)
  divAnswer.append(answer1, answer2, answer3)
  divTrivial.append(divQuestion, divAnswer)
  playGame.append(divTrivial)

  answer1.addEventListener('click', () => getAnswer(answer1, question))
  answer2.addEventListener('click', () => getAnswer(answer2, question))
  answer3.addEventListener('click', () => getAnswer(answer3, question))
}

function getAnswer(answer, question) {
  const divAnswer = document.querySelector('.divAnswer')
  let variablePorc = `porc${question.tipo}`
  if (answer.getAttribute('data-id') === 'true') {
    answer.style.backgroundColor = '#008000'
    window[variablePorc] = (window[variablePorc] || 0) + 20
    document.getElementsByClassName(question.tipo)[0].style.width =
      window[variablePorc] + '%'
  } else {
    answer.style.backgroundColor = '#ff0000'
  }
  divAnswer.style.pointerEvents = 'none'
  console.log(questionary)
  console.log(question)
  question = questionary.shift()
  console.log(questionary)
  console.log(question)
  setTimeout(() => {
    playGame.innerHTML = ''
    printQuestion(question)
    console.log(printQuestion(question))
    // if (question) {
    //   printQuestion(question)
    // } else {
    //   playGame.innerHTML = ''
    // }
  }, 500)
}

function checkWinner() {
  let puntosMath = (document.getElementsByClassName('Math')[0].style.width =
    '100%')
  let puntosLanguage = (document.getElementsByClassName(
    'Language'
  )[0].style.width = '100%')
  let puntosScience = (document.getElementsByClassName(
    'Science'
  )[0].style.width = '100%')
  let puntosSocials = (document.getElementsByClassName(
    'Socials'
  )[0].style.width = '100%')

  if (
    !question &&
    puntosMath &&
    puntosLanguage &&
    puntosScience &&
    puntosSocials
  ) {
    const divWinner = document.createElement('div')
    divWinner.classList.add('divWinner')
    const h3Winner = document.createElement('h3')
    h3Winner.textContent = "You're a CRACK!!"
    divWinner.append(h3Winner)
    gameTrivial.append(divWinner)
  } else {
    const divGameOver = document.createElement('div')
    divGameOver.classList.add('divGameOver')
    const h3GameOver = document.createElement('h3')
    h3GameOver.textContent = 'GAME OVER!'
    divGameOver.append(h3GameOver)
    gameTrivial.append(divGameOver)
  }
}
startButton.addEventListener('click', () => {
  printQuestion(question)
})
