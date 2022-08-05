import Alpine from 'alpinejs'
import { titleAlignLeft, titleAlignRight, titleWrapper, topPageStyle } from './top.css'

export const topInit = () => {
  console.log('top called')
  Alpine.data('top', () => ({
    pageStyle: topPageStyle,
    titleWrapperStyle: titleWrapper,
    titleAlignLeft: titleAlignLeft,
    titleAlignRight: titleAlignRight
  }))
}
