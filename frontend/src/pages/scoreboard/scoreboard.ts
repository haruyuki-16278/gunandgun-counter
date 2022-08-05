import Alpine from 'alpinejs'
import { hitpointStyle, playerPanelStyle, scoreboardPageStyle, scoreOperatorStyle } from './scoreboard.css'

export const scoreboardInit = () => {
  console.log('scoreboard called')
  Alpine.data('scoreboard', () => ({
    pageStyle: scoreboardPageStyle,
    playerPanelStyle: playerPanelStyle,
    scoreOperatorStyle: scoreOperatorStyle,
    hitpointStyle: hitpointStyle,
    player1: player('player1'),
    player2: player('player2')
  }))
}

const player = (name: string) => {
  console.log('call create player')
  return {
    name: name,
    hitpoint: 30,
    damege() {this.hitpoint--},
    heal() {this.hitpoint++}
  }
}
