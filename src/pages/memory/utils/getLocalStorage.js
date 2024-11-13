export default function getLocalStorageMemo(counterPoints, counter, allCards) {
  counterPoints = localStorage.getItem('points') || 0
  counter.textContent = counterPoints
  let savedCardsFlipped = JSON.parse(localStorage.getItem('cards')) || []
  Array.from(allCards).forEach((card) => {
    if (savedCardsFlipped.includes(card.getAttribute('data-id'))) {
      card.classList.add('flipped')
    }
  })
}
