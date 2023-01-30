const { navBarData } = require('./src/navBarData')
const { sideBarConfig } = require('./src/sideBarData')
const { sideBarFilter } = require('./src/utils')

module.exports = {
  title: 'zhaomn33',
  description: '个人博客～',
  base: '/blogs/',
  theme: 'reco',
  dest: "dist",
  themeConfig: {
    type: 'blog',
    // 作者
    author: 'zhaomn',
    // 头像
    authorAvatar: '/avatar.jpg',
    subSidebar: 'auto',
    search: true,
    searchMaxSuggestions: 10,
    noFoundPageByTencent: false,
    nav: [
      ...navBarData,
      { text: '时间线', link: '/timeline/', icon: 'reco-date' }
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