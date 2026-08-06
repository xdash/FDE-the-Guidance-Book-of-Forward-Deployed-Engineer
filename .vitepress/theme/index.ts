import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import FieldHome from './components/FieldHome.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import ChapterBrief from './components/ChapterBrief.vue'
import RoleMatrix from './components/RoleMatrix.vue'
import StagePath from './components/StagePath.vue'
import ValueLoop from './components/ValueLoop.vue'
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
    app.component('ChapterBrief', ChapterBrief)
    app.component('RoleMatrix', RoleMatrix)
    app.component('StagePath', StagePath)
    app.component('ValueLoop', ValueLoop)
  }
} satisfies Theme

import { h } from 'vue'
