const { navBarData } = require('./src/navBarData')
const { sideBarConfig } = require('./src/sideBarData')
const { sideBarFilter } = require('./src/utils')

module.exports = {
  title: 'zhaomn33',
  description: '个人博客～',
  base: '/zhao-blog/',
  theme: 'reco',
  dest: "dist",
  themeConfig: {
    type: 'blog',
    // 作者
    author: 'zhaomn',
    // 头像
    authorAvatar: '/avatar.png',
    sidebar: 'auto',
    subSidebar: 'auto',
    search: true,
    searchMaxSuggestions: 10,
    noFoundPageByTencent: false,
    nav: [
      ...navBarData,
      { text: '精彩瞬间', link: '/timeline/', icon: 'reco-date' }
    ],
    sidebar: sideBarFilter(sideBarConfig),
  },
  markdown: {
    // 是否显示代码块左侧行数
    "lineNumbers": true
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
}