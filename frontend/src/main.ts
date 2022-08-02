import Alpine from 'alpinejs'
import { themeClass, defaultStyle, defaultButton } from './style.css'

window.Alpine = Alpine

console.log(themeClass)

Alpine.store('theme', themeClass)
Alpine.store('defaultStyle', defaultStyle)
Alpine.store('defaultButton', defaultButton)

Alpine.start()
