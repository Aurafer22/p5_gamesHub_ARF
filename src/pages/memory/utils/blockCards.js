export default function blockCards(nameArray) {
  Array.from(nameArray).forEach((card) => {
    card.style.pointerEvents = 'none'
  })
}
