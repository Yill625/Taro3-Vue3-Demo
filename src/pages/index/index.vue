<template>
  <view class="index">
    <text>{{ msg }}{{ res.length }}</text>
    {{ count }}
    <scroll-view></scroll-view>
    <button @tap="increment">跳转</button>
  </view>
</template>

<script>
import { onMounted, reactive, ref,computed } from "vue";
import "./index.scss";
import { test } from "../../api/test";
import Taro from "@tarojs/taro";
import { useStore } from "vuex";

export default {
  name: "home",
  data() {
    return {
      res1: [],
      msg1: "121",
    };
  },
  created() {
    this.getRes();
  },
  methods: {
    getRes: async function () {
      this.res = await test();
    },
  },
   onShareAppMessage (res) {
    return {
      title: this.msg1,
      path: '/page/user?id=123'
    }
  },
  onPullDownRefresh(){
    this.getRes().finally(()=>{
      Taro.stopPullDownRefresh()
    })
  },
  setup() {
    const store = useStore();
    const res = ref([]);
    const msg = ref("1223");
    const getRes = async () => {
      const result = await test();
      res.value = result;
    };
    getRes();
    const goTest = () => {
      console.log(1111);
      Taro.navigateTo({ url: "/pages/demo/index" });
    };
    return { res, msg, goTest,count: computed(() => store.state.userInfo.count),
      increment: () => store.commit("increment"), };
  },
};
</script>
