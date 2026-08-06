import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import FieldHome from './components/FieldHome.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import './styles.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ReadingProgress)
    })
  },
  enhanceApp({ app }) {
    app.component('FieldHome', FieldHome)
  }
} satisfies Theme

import { h } from 'vue'
