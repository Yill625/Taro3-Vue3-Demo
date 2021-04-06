import { createApp } from 'vue'
import './app.scss'
import store from "./vuex/index"
import { systmeInfo } from './utils/envInfo'

const App = createApp({
  onShow(options) { },
  mounted() {
    console.log(systmeInfo)
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(store)
export default App
