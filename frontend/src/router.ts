// 参考: https://github.com/melnikaite/alpine-router

import { topInit } from './pages/top/top'
import { scoreboardInit } from './pages/scoreboard/scoreboard'

window.addEventListener('hashchange', onRouteChange)
onRouteChange()

async function onRouteChange() {
  const appElement = document.querySelector('#app') as HTMLElement
  await loadRoute(appElement)
  window.Alpine?.initTree(appElement)
}

async function loadRoute(appElement: HTMLElement) {
  switch (window.location.hash) {
    case '#scoreboard':
      appElement.innerHTML = await fetch(new URL('./pages/scoreboard/scoreboard.html', import.meta.url).href).then(template => template.text())
      scoreboardInit()
      break
    case '#top':
    default:
      appElement.innerHTML = await fetch(new URL('./pages/top/top.html', import.meta.url).href).then(template => template.text())
      topInit()
      break
  }
}

export {}
