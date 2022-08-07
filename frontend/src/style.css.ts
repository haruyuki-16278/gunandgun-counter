import { createTheme, style } from '@vanilla-extract/css'

/**
 * make style that has same width and height
 * @param size number px size
 * @returns style
 */
const size = (size: number) => {
  return style({
    width: `${size}px`,
    height: `${size}px`
  })
}

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#9cdbc7',
    secondary: '#e6b567',
    accent: '#9e5aad',
    text: '#f5f5f5',
    textOnWhite: '#3d3d3d',
    background: '#3f4c4d',
    backgroundWhite: '#edf2f0'
  }, 
  constants: {
    small: '8px',
    medium: '16px',
    large: '32px'
  },
  fonts: {
    kleeOne: '"Klee One", cursive',
    notoSans: '"Noto Sans JP", sans-serif'
  }
})

export const defaultStyle = style({
  width: '100%',
  height: '100%',
  backgroundColor: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.fonts.kleeOne
})

export const flexCenter = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const flexBetween = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const defaultButton = style({
  margin: '8px',
  padding: '8px 16px',
  borderRadius: '100vh',
  color: vars.color.textOnWhite,
  backgroundColor: vars.color.primary,
  ':hover': {
    opacity: 0.8
  }
})

export const defaultIcon = style([
  flexCenter,
  size(24),
])

export const iconButton = style([
  flexCenter,
  {
    padding: vars.constants.small,
    borderRadius: '100vh',
    backgroundColor: vars.color.primary,
    fill: vars.color.textOnWhite
  }
])
