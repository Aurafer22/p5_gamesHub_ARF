import resetLocalStorage from './resetLocalStorage'

export default function checkWinner() {
  const divTrivial = document.querySelector('.divTrivial')
  if (
    document.getElementsByClassName('Math')[0].style.width === '100%' &&
    document.getElementsByClassName('Language')[0].style.width === '100%' &&
    document.getElementsByClassName('Science')[0].style.width === '100%' &&
    document.getElementsByClassName('Socials')[0].style.width === '100%'
  ) {
    const divWinner = document.createElement('div')
    divWinner.classList.add('divWinner')
    const h3Winner = document.createElement('h3')
    h3Winner.textContent = "You're a CRACK!!"
    divWinner.append(h3Winner)
    divTrivial.append(divWinner)
    resetLocalStorage()
  } else {
    const divGameOver = document.createElement('div')
    divGameOver.classList.add('divGameOver')
    const h3GameOver = document.createElement('h3')
    h3GameOver.textContent = 'GAME OVER!'
    divGameOver.append(h3GameOver)
    divTrivial.append(divGameOver)
    resetLocalStorage()
  }
}
