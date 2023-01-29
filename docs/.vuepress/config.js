module.exports = {
  title: '我的博客',
  description: 'blogs',
  base: '/zhao-blog/',
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: "首页", link: "/" },
      {
        text: "zhao 的博客",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/726107228492253" },
          { text: "Github", link: "https://github.com/coding-lin" }
        ]
      }
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false,  // 是否折叠
        children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "基础篇",
        path: "/handbook/1",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/handbook/1" },
          { title: "第二篇", path: "/handbook/2" },
        ]
      } 
    ]
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
}