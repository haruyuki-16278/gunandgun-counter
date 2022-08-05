import Alpine from 'alpinejs'
import {
  dangerHitpointStyle,
  defaultHitpointStyle, 
  playerPanelStyle, 
  scoreboardPageStyle, 
  scoreOperatorStyle,
  warnHitpointStyle
} from './scoreboard.css'

export const scoreboardInit = () => {
  console.log('scoreboard called')
  Alpine.data('scoreboard', () => ({
    pageStyle: scoreboardPageStyle,
    playerPanelStyle: playerPanelStyle,
    scoreOperatorStyle: scoreOperatorStyle,
    player1: player('player1'),
    player2: player('player2'),
    hitpointStyle(player: 'player1'|'player2') {
      if (player === 'player1') {
        if (this.player1.hitpoint <= 10) {
          return dangerHitpointStyle
        } else if (this.player1.hitpoint <= 15) {
          return warnHitpointStyle
        }
        return defaultHitpointStyle
      } else if (player === 'player2') {
        if (this.player2.hitpoint <= 10) {
          return dangerHitpointStyle
        } else if (this.player2.hitpoint <= 15) {
          return warnHitpointStyle
        }
        return defaultHitpointStyle
      }
      return
    }
  }))
}

const player = (name: string) => {
  console.log('call create player')
  return {
    name: name,
    hitpoint: 30,
    damege() {
      this.hitpoint--
      if (this.hitpoint === 0) {
        window.alert('gameend')
      }
    },
    heal() {this.hitpoint++}
  }
}
