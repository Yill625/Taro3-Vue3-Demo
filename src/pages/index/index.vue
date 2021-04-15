<template>
  <view class="index">
    <text class="test">{{ count }}</text>
    <scroll-view
      class="scroll-view_H"
      scroll-x="true"
      @scrolltoupper="bindscrolltoupper"
      @scrolltolower="bindscrolltoupper"
    >
      <view id="demo1" class="scroll-view-item_H demo-text-1">1</view>
      <view id="demo2" class="scroll-view-item_H demo-text-2">2</view>
      <view id="demo3" class="scroll-view-item_H demo-text-3">3</view>
    </scroll-view>
    <input
      v-model="number"
      type="number"
      class="input"
      :class="{ active: isActive }"
    />
    <button @tap="increment">++</button>
    <button @tap="showNumber">跳转</button>
    <fix-bar class="baz" :title="count">
      <slot-view>
        <view>Hello world</view>
      </slot-view>
    </fix-bar>
  </view>
  <view @tap="increment">111</view>
  <transition name="fade" mode="out-in">
    <view v-if="count > 2">toggled content</view>
  </transition>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import './index.scss'
import { test } from '../../api/test'
import Taro from '@tarojs/taro'
import { useStore } from 'vuex'
import FixBar from '../components/FixBar/index.vue'

export default {
  name: 'home',
  components: {
    [FixBar.name]: FixBar
  },
  onShareAppMessage() {
    return {
      title: this.msg,
      path: '/page/user?id=123'
    }
  },
  onPullDownRefresh() {
    this.getRes().finally(() => {
      Taro.stopPullDownRefresh()
    })
  },
  setup() {
    const isActive = true
    const store = useStore()
    const res = ref([])
    const msg = ref('1223')
    const number = ref(0)
    const getRes = async (a: number) => {
      console.log(a)
      const result = await test()
      res.value = result
    }
    console.log(this)

    getRes(12)
    const showNumber = () => {
      console.log(number)
    }
    const goTest = () => {
      console.log(1111)
      Taro.navigateTo({ url: '/pages/demo/index' })
    }
    const bindscrolltoupper = () => {
      console.log(111)
    }
    return {
      res,
      msg,
      goTest,
      getRes,
      isActive,
      bindscrolltoupper,
      number,
      showNumber,
      count: computed(() => store.state.userInfo.count),
      increment: () => store.commit('increment')
    }
  }
}
</script>
