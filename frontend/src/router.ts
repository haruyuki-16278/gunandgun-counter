// 参考: https://github.com/melnikaite/alpine-router

import { init as topInit } from './pages/top/top'
import { init as page2Init } from './pages/page2/page2'

window.addEventListener('hashchange', onRouteChange)
onRouteChange()

async function onRouteChange() {
  const appElement = document.querySelector('#app') as HTMLElement
  await loadRoute(appElement)
  window.Alpine?.initTree(appElement)
}

async function loadRoute(appElement: HTMLElement) {
  switch (window.location.hash) {
    case '#page2':
      appElement.innerHTML = await fetch(new URL('./pages/page2/page2.html', import.meta.url).href).then(template => template.text())
      page2Init()
      break
    case '#top':
    default:
      appElement.innerHTML = await fetch(new URL('./pages/top/top.html', import.meta.url).href).then(template => template.text())
      topInit()
      break
  }
}

export {}
