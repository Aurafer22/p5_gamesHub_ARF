export default function resetValues() {
  const divTrivial = document.querySelector('.divTrivial')
  divTrivial.innerHTML = ''
  let arrayCategorias = ['Math', 'Language', 'Science', 'Socials']
  arrayCategorias.forEach((categoria) => {
    window[`porc${categoria}`] = 0
    document.getElementsByClassName(categoria)[0].style.width = '0%'
  })
}
