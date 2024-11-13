export default function resetValues() {
  divTrivial.innerHTML = ''
  let arrayCategorias = ['Math', 'Language', 'Science', 'Socials']
  arrayCategorias.forEach((categoria) => {
    window[`porc${categoria}`] = 0
    document.getElementsByClassName(categoria)[0].style.width = '0%'
  })
}
