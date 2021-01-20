<template>
  <view class="index">
    <text>{{ msg }}{{ res.length }}</text>
    <scroll-view></scroll-view>
    <button @tap="goTest">跳转</button>
  </view>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import "./index.scss";
import { test } from "../../api/test";
import Taro from "@tarojs/taro";

export default {
  name: "home",
  // option Api
  // data() {
  //   return {
  //     res: [],
  //     msg: "",
  //   };
  // },
  // created() {
  //   this.getRes();
  // },
  // methods: {
  //   getRes: async function () {
  //     this.res = await test();
  //   },
  // },
  setup() {
    const res = ref([]);
    const msg = ref("");
    const getRes = async () => {
      const result = await test();
      res.value = result;
    };
    getRes();
    const goTest = () => {
      console.log(1111);
    };
    return { res, msg, goTest };
  },
};
</script>
