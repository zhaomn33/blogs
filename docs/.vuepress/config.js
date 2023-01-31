const { navBarData } = require('./src/navBarData')
const { sideBarConfig } = require('./src/sideBarData')
const { sideBarFilter } = require('./src/utils')

module.exports = {
  title: 'zhaomn33',
  description: '搞完就干饭！加油～',
  base: '/blogs/',
  theme: 'reco',
  dest: "dist",
  themeConfig: {
    type: 'blog',
    // 作者
    author: '赵三三',
    // 头像
    authorAvatar: '/avatar.jpg',
    // 移动端优化
    head: [
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
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