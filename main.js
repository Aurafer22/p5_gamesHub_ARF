import Header from './src/components/header/header'
import Memory from './src/pages/memory/memory'
import TicTacToe from './src/pages/tic_tac_toe/tic_tac_toe'
import Trivial from './src/pages/trivial/trivial'
import './style.css'

const divApp = document.querySelector('#app')

Header(divApp)
TicTacToe(divApp)
Memory(divApp)
Trivial(divApp)
