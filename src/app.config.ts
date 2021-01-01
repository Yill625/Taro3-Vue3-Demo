export default {
  pages: [
    'pages/index/index',
    'pages/test/index'
  ],
  tabBar: {
    borderStyle: 'white',
    list: [{
      pagePath: "pages/index/index",
      text: "首页"
    }, {
      pagePath: "pages/test/index",
      text: "日志"
    }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
