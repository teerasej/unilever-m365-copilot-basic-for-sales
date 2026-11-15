import { defineConfig } from 'vitepress'
import { exercises, sidebars } from './navigation'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const requestedBase = process.env.SITE_BASE || '/'
const base = requestedBase === '/' ? '/' : `/${requestedBase.replace(/^\/+|\/+$/g, '')}/`

export default defineConfig({
  title: 'Copilot Basic · Sales',
  description: 'แบบฝึก Microsoft 365 Copilot Basic สำหรับทีม Sales คัดสรรสำหรับ Montivory เพื่อใช้ในการอบรม Unilever',
  lang: 'th-TH',
  base,
  cleanUrls: false,
  lastUpdated: false,
  head: [
    ['meta', { name: 'theme-color', content: '#0066cc' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  themeConfig: {
    siteTitle: 'Copilot Basic · Sales',
    nav: [
      { text: 'ภาพรวม', link: '/' },
      { text: 'Agenda', link: '/afternoon-agenda' },
      { text: 'แบบฝึก', items: exercises.map(ex => ({ text: ex.short, link: ex.route })) },
      { text: 'ดาวน์โหลด', link: '/resources/downloads' }
    ],
    sidebar: sidebars,
    outline: { level: [2, 3], label: 'ในหน้านี้' },
    docFooter: { prev: 'แบบฝึกก่อนหน้า', next: 'แบบฝึกถัดไป' },
    sidebarMenuLabel: 'แบบฝึกและ Practice',
    returnToTopLabel: 'กลับด้านบน',
    darkModeSwitchLabel: 'รูปแบบสี',
    lightModeSwitchTitle: 'ใช้โหมดสว่าง',
    darkModeSwitchTitle: 'ใช้โหมดมืด',
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (text: string) => {
              const segmenter = new Intl.Segmenter('th', { granularity: 'word' })
              return Array.from(segmenter.segment(text.toLocaleLowerCase('th')))
                .filter(part => part.isWordLike).map(part => part.segment)
            }
          },
          searchOptions: { prefix: true, fuzzy: 0.2 }
        },
        locales: { root: { translations: {
          button: { buttonText: 'ค้นหา', buttonAriaLabel: 'ค้นหาแบบฝึก' },
          modal: {
            displayDetails: 'แสดงรายละเอียด', resetButtonTitle: 'ล้างคำค้น', backButtonTitle: 'ปิดการค้นหา',
            noResultsText: 'ไม่พบผลลัพธ์สำหรับ',
            footer: { selectText: 'เลือก', navigateText: 'เลื่อน', closeText: 'ปิด' }
          }
        } } }
      }
    }
  },
  markdown: {
    lineNumbers: false,
    config(md) {
      const renderLink = md.renderer.rules.link_open!
      md.renderer.rules.link_open = (tokens, index, options, env, renderer) => {
        const token = tokens[index]
        const href = token.attrGet('href') || ''
        // VitePress 1.x otherwise appends .html to Office extensions. Mark
        // these as actual downloads before its page-link renderer runs.
        if (/^\/downloads\/copilot-in-action\/[^/]+\.(xlsx|docx)$/.test(href)) {
          const file = fileURLToPath(new URL(`../public${href}`, import.meta.url))
          if (!existsSync(file)) throw new Error(`Missing Office download: ${href}`)
          token.attrSet('download', '')
          token.attrSet('href', `${base}${href.slice(1)}`)
        }
        return renderLink(tokens, index, options, env, renderer)
      }
    }
  }
})
