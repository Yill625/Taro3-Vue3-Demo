# Taro3-Vue3-Vuex-Demo

> 在 Taro3 中使用 Vue

## 使用 Taro + Vue 注意要点

1. 使用小程序组件事件需要将 bind 换成@或者 v-on
   > 例如 小程序的点击事件 bindtap 换成@tap
2. finally 无法使用
   > yarn add promise-prototype-finally

```js
  // option Api
  data() {
    return {
      res: [],
      msg: "",
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
```

```js
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
```
