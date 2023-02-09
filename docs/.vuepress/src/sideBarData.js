/**
 * curryUri 需要导入的文件路径
 * sideBarInfo 
 *   title 二级标题名称，需要和pages下面的文件名一致
 *   folder 二级标题对应的文件名称
 */
const sideBarConfig = [
  {
    curryUri: '/handbook/base',
    sideBarInfo: [
      {
        title: 'css',
        folder: 'css',
      },
      {
        title: 'JS',
        folder: 'JS',
      }
    ]
  },
  {
    curryUri: '/handbook/notes',
    sideBarInfo: [
      {
        title: 'blog-deploy',
        folder: 'blog-deploy',
      }
    ]
  },
  {
    curryUri: '/handbook/vue',
    sideBarInfo: [
      {
        title: 'slot',
        folder: 'slot',
      }
    ]
  }
]

module.exports = {
  sideBarConfig,
}
