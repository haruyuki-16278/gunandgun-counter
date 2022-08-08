import { style } from '@vanilla-extract/css'
import { defaultStyle, flexCenter, vars } from '../../style.css'

export const topPageStyle = style([
  defaultStyle,
  flexCenter,
  {
    flexDirection: 'column'
  }
])

export const titleWrapper = style({
  width: '100%',
  margin: vars.constants.large,
  padding: '0 16px',
  fontFamily: vars.fonts.GAGAGAGA,
  fontSize: vars.constants.large,
  fontWeight: 'bold',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
})

export const titleAlignLeft = style({
  textAlign: 'left'
})

export const titleAlignRight = style({
  textAlign: 'right'
})
