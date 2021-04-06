export default {
  pages: [
    'pages/index/index',
    'pages/test/index',
    'pages/demo/index'
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
  lazyCodeLoading: "requiredComponents",
  window: {
    enablePullDownRefresh: true,
    backgroundColor: "#ffffff",
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
