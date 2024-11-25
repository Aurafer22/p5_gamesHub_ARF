import checkWinner from './checkWinner'

export default function printQuestion(question, questionary) {
  const divTrivial = document.querySelector('.divTrivial')
  divTrivial.innerHTML = ''
  if (question) {
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

    answer1.addEventListener('click', () =>
      getAnswer(answer1, question, questionary)
    )
    answer2.addEventListener('click', () =>
      getAnswer(answer2, question, questionary)
    )
    answer3.addEventListener('click', () =>
      getAnswer(answer3, question, questionary)
    )
  } else {
    checkWinner()
  }
}

function getAnswer(answer, question, questionary) {
  const divAnswer = document.querySelector('.divAnswer')
  let categoria = question.tipo
  let variablePorc = `porc${categoria}`
  if (answer.getAttribute('data-id') === 'true') {
    answer.style.backgroundColor = '#008000'
    window[variablePorc] = (window[variablePorc] || 0) + 20
    document.getElementsByClassName(categoria)[0].style.width =
      window[variablePorc] + '%'
    localStorage.setItem(categoria, JSON.stringify(window[variablePorc]))
  } else {
    answer.style.backgroundColor = '#ff0000'
  }
  divAnswer.style.pointerEvents = 'none'
  localStorage.setItem('questionary', JSON.stringify(questionary))
  question = questionary.shift()
  console.log(question)

  setTimeout(() => {
    printQuestion(question, questionary)
  }, 500)
  console.log(question)
}
