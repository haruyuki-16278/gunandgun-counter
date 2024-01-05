import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { VitePWA } from 'vite-plugin-pwa'

const pwaOptions = {
  strategies: 'generateSW',
  registerType: 'prompt', 
  manifest: {
    name: 'ガンナガンカウンター',
    short_name: 'ガンナガンカウンター',
    description: 'ガンナガンプレイ時に便利なカウンターアプリ',
    start_url: 'index.html',
    background_color: '#3f4c4d',
    theme_color: '#9cdbc7',
    lang: 'ja',
    icons: [
      {
        src: 'android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  },
  includeAssets: ['*.svg', '*.png', '*.ico'],
  devOptions: {
    enabled: true,
  }
}

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../../dist'
  },
  plugins: [
    vanillaExtractPlugin(),
    VitePWA(pwaOptions)
  ]
})
