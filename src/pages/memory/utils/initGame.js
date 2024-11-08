import { dataMemory } from './dataMemory'

export default function initGame(nodeParent) {
  let cards = [...dataMemory, ...dataMemory]
  let newGame = cards.sort(() => Math.random() - 0.5)
  for (const card of newGame) {
    const divFlip = document.createElement('div')
    divFlip.classList.add('divFlip')
    const divCard = document.createElement('div')
    divCard.classList.add('card')
    divCard.setAttribute('data-id', card.id)
    const anver = document.createElement('div')
    const reverse = document.createElement('img')
    reverse.src = card.image
    divCard.append(anver, reverse)
    divFlip.append(divCard)
    nodeParent.append(divFlip)
  }
}
