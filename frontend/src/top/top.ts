import Alpine from 'alpinejs'

export const init = () => {
  console.log('top called')
  Alpine.data('top', () => ({
    title: 'Hello, top'
  }))
}
