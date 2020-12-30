<template>
  <view class="index">
    <text>{{ msg }}{{ res.length }}</text>
    <scroll-view></scroll-view>
  </view>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import "./index.scss";
import { test } from "../../api/test";

export default {
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
    return { res, msg };
  },
};
</script>
