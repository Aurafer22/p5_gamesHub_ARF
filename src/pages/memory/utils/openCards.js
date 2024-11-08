export default function openCards(nameArray) {
  Array.from(nameArray).forEach((card) => {
    if (!card.classList.contains('flipped')) {
      card.style.pointerEvents = 'auto'
    }
  })
}
