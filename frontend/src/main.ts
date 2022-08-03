import Alpine from 'alpinejs'
import { themeClass, defaultStyle, defaultButton, flexCenter, flexBetween } from './style.css'

window.Alpine = Alpine

console.log(themeClass)

Alpine.store('theme', themeClass)
Alpine.store('defaultStyle', defaultStyle)
Alpine.store('defaultButton', defaultButton)
Alpine.store('flexCenter', flexCenter)
Alpine.store('flexBetween', flexBetween)

Alpine.start()
