import Alpine from 'alpinejs'
import {
  dangerHitpointStyle,
  defaultHitpointStyle, 
  playerPanelStyle, 
  rotetedPlayerPanelStyle, 
  rotateButtonStyle,
  scoreboardPageStyle, 
  scoreOperatorStyle,
  warnHitpointStyle
} from './scoreboard.css'

let wakelock: any | null = null;

export const scoreboardInit = () => {
  Alpine.data('scoreboard', () => ({
    pageStyle: scoreboardPageStyle,
    playerPanelStyle(player: 'player1'|'player2') {
      switch (player) {
        case 'player1':
          return this.player1.panelRotate ? rotetedPlayerPanelStyle : playerPanelStyle
          break;
        case 'player2':
          return this.player2.panelRotate ? rotetedPlayerPanelStyle : playerPanelStyle
          break;
      }
    },
    rotateButtonStyle: rotateButtonStyle,
    scoreOperatorStyle: scoreOperatorStyle,
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
    },
    player1: player('player1'),
    player2: player('player2')
  }))

  if ('wakeLock' in navigator) {
    try {
      navigator.wakeLock.request('screen').then((v) => wakelock = v)
    } catch (e) {
      console.error(e)
    }
  }
}

const player = (name: string) => {
  return {
    name: name,
    hitpoint: 30,
    damege() {
      this.hitpoint--
      if (this.hitpoint === 0) {
        if (wakelock) wakelock.release().then(() => wakelock = null)
        window.alert('gameend')
        window.location.href='#top'
      }
    },
    heal() {this.hitpoint++},
    panelRotate: false,
    rotate() {this.panelRotate = !this.panelRotate}
  }
}
