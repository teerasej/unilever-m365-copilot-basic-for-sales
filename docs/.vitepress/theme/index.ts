import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import SiteFooter from './components/SiteFooter.vue'
import SidebarBehavior from './components/SidebarBehavior.vue'
import PracticeIllustration from './components/PracticeIllustration.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'layout-bottom': () => h(SiteFooter),
    'sidebar-nav-before': () => h(SidebarBehavior)
  }),
  enhanceApp({ app }) {
    app.component('PracticeIllustration', PracticeIllustration)
  }
}
