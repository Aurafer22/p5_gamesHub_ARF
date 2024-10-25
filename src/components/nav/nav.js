import './nav.css'
export default function createNav(text, url, parentNode) {
  const navBtn = document.createElement('a')
  navBtn.classList.add('navBtn')
  navBtn.textContent = text
  navBtn.href = url
  parentNode.append(navBtn)
}
