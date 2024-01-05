import Alpine from 'alpinejs'
import { themeClass, defaultStyle, defaultButton, flexCenter, flexBetween, defaultIcon, iconButton } from './style.css'

window.Alpine = Alpine

Alpine.store('theme', themeClass)
Alpine.store('defaultStyle', defaultStyle)
Alpine.store('defaultButton', defaultButton)
Alpine.store('flexCenter', flexCenter)
Alpine.store('flexBetween', flexBetween)
Alpine.store('defaultIcon', defaultIcon)
Alpine.store('iconButton', iconButton)

Alpine.start()
