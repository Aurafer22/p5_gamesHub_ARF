import { dataTrivial } from './dataTrivial'
import printQuestion from './printQuestion'

export default function getLocalStorage(questionary, question) {
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
  printQuestion(question, questionary)
}
