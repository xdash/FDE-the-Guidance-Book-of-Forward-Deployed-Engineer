import { defineConfig } from 'vitepress'

const chapters = [
  { text: '00 / 自序', link: '/00-自序' },
  { text: '01 / FDE 的崛起', link: '/01-第1章-FDE的崛起' },
  { text: '02 / 解决正确的问题', link: '/02-第2章-解决正确的问题' },
  { text: '03 / 赢得客户', link: '/03-第3章-赢得客户' },
  { text: '04 / 激活部署', link: '/04-第4章-激活部署' },
  { text: '05 / 守住续约', link: '/05-第5章-守住续约' },
  { text: '06 / 扩大收入', link: '/06-第6章-扩大收入' },
  { text: '07 / 规模化复制', link: '/07-第7章-规模化复制' },
  { text: '08 / 完整案例集', link: '/08-第8章-完整案例集' }
]

const appendix = [
  { text: '后记 / FDE 的职业道德', link: '/09-后记-FDE的职业道德' },
  { text: '附录 A / 常用指标', link: '/10-附录A-FDE应当关注的常用指标' },
  { text: '附录 B / 人物与团队', link: '/11-附录B-FDE人物与团队名单' },
  { text: '附录 C / 案例与出处', link: '/12-附录C-全书案例索引与资料出处' }
]

export default defineConfig({
  lang: 'zh-CN',
  title: 'FDE前线部署工程师指南',
  description: '人工智能时代的客户价值交付秘籍——FDE 方法论、案例与实践手册。',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: 'https://fde-handbook-iegicbsj.edgeone.cool/' },
  head: [
    ['link', { rel: 'icon', href: '/mark.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#ef5b2a' }],
    ['meta', { name: 'author', content: '范冰 XDash' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'FDE前线部署工程师指南' }],
    ['meta', { property: 'og:description', content: '从找对问题到规模化复制，一本可免费阅读的 FDE 实战手册。' }]
  ],
  themeConfig: {
    logo: { src: '/mark.svg', alt: 'FDE Handbook' },
    siteTitle: 'FDE前线部署工程师指南',
    nav: [
      { text: '阅读手册', link: '/00-自序', activeMatch: '^/0[0-8]-' },
      { text: '完整案例', link: '/08-第8章-完整案例集' },
      { text: '指标工具箱', link: '/10-附录A-FDE应当关注的常用指标' },
      { text: '关于', link: '/about' }
    ],
    sidebar: [
      { text: '行动路径', collapsed: false, items: chapters },
      { text: '档案与附录', collapsed: false, items: appendix }
    ],
    outline: { level: [2, 3], label: '本页坐标' },
    docFooter: { prev: '上一份档案', next: '下一份档案' },
    lastUpdated: { text: '最后更新' },
    darkModeSwitchLabel: '切换明暗主题',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索档案', buttonAriaLabel: '搜索档案' },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除查询',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到相关内容',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/lukeSuperCoder/FDE-Handbook' }],
    editLink: {
      pattern: 'https://github.com/lukeSuperCoder/FDE-Handbook/edit/main/:path',
      text: '在 GitHub 上修订本页'
    },
    footer: {
      message: '免费阅读与非商业性分享 · 商业使用请联系作者',
      copyright: '© 范冰 XDash'
    }
  }
})
