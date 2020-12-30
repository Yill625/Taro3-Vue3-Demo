<template>
  <view class="index">
    <button @tap="increment">1111111</button>
    <text>{{ state.counter }}{{ res.length }}</text>
    <scroll-view>+++</scroll-view>
  </view>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import "./index.scss";
import { test } from "../../api/test";
import { createStore } from "../../vuex/index";

export default {
  name: "test",
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
    const { state, increment } = createStore();
    const res = ref([]);
    const msg = ref("111");
    const getRes = async () => {
      const result = await test();
      res.value = result;
    };
    getRes();
    return { res, msg, state, increment };
  },
};
</script>
