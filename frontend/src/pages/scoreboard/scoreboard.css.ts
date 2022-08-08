import { style } from '@vanilla-extract/css'
import { defaultStyle, flexBetween, flexCenter, iconButton, vars } from '../../style.css'

export const scoreboardPageStyle = style([
  defaultStyle,
  flexCenter,
  {
    '@media': {
      'screen and (max-width: 600px)': {
        flexDirection: 'column'
      }
    }
  }
])

export const playerPanelStyle = style({
  width: 'min(80%, 320px)',
  height: '240px',
  margin: vars.constants.medium,
  padding: vars.constants.medium,
  borderRadius: vars.constants.small,
  fontWeight: 'bold',
  color: vars.color.textOnWhite,
  backgroundColor: vars.color.backgroundWhite,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const rotetedPlayerPanelStyle = style([
  playerPanelStyle,
  {
    transform: 'rotate(180deg)'
  }
])

export const rotateButtonStyle = style([
  iconButton,
  {
    position: 'absolute',
    top: vars.constants.medium,
    right: vars.constants.medium
  }
])

export const scoreOperatorStyle = style([
  flexBetween,
  {
    width: '80%',
  }
])

export const defaultHitpointStyle = style({
  fontFamily: vars.fonts.GAGAGAGA,
  fontSize: vars.constants.large,
  fontWeight: 'bolder',
  color: vars.color.textOnWhite,
})

export const warnHitpointStyle = style([
  defaultHitpointStyle,
  {
    color: vars.color.secondary
  }
])

export const dangerHitpointStyle = style([
  defaultHitpointStyle,
  {
    color: vars.color.accent
  }
])
