import { createApp } from 'vue'
import './app.scss'
import store from './store/index'
import { systemInfo } from './utils/envInfo'
import 'promise-prototype-finally'

const App = createApp({
  onShow(options) {
    console.log(options)
  },
  mounted() {
    console.log(systemInfo)
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(store)
export default App
