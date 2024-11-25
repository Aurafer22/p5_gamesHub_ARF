import './nav.css'
export default function createNav(clase, text, parentNode) {
  const navBtn = document.createElement('a')
  navBtn.classList.add('navBtn', clase)
  navBtn.textContent = text
  parentNode.append(navBtn)
}
