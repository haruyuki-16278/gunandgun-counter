import Alpine from 'alpinejs'

export const init = () => {
  console.log('scoreboard called')
  Alpine.data('scoreboard', () => ({
    title: 'Hello, scoreboard'
  }))
}