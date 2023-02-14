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
    logo: '/logo.png',
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
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/zhaomn33', icon: 'reco-github' },
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
  plugins: [
    [
      'cursor-effects',
      {
        size: 2, // size of the particle, default: 2
        shape: 'circle', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['whiteCat', 'haru2', 'blackCat', 'z16'],
        width: 200,
        height: 300,
        messages:{
          welcome: '欢迎来到我的博客~',
          home: '心里的花，我想要带你回家。',
          theme: '你想要找我其他的小伙伴么',
          close: '一会儿再见吧～'
        },
        clean: false
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-back-to-top'
    ]
  ]
}