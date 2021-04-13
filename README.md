# Taro3-Vue3-Ts-Vuex-Demo

> 在 Taro3 中使用 Vue

## 使用 Taro + Vue 注意要点

1. 使用小程序组件事件需要将 bind 换成@或者 v-on
   > 例如 小程序的点击事件 bindtap 换成@tap
2. finally 无法使用
   > yarn add promise-prototype-finally
3. solt 的使用
   > https://taro-docs.jd.com/taro/docs/hybrid#%E4%BD%BF%E7%94%A8-slot
4. taro 3.0 + Vue 中 scoped 在 h5 下生效，在微信小程序中无效

![](https://tva1.sinaimg.cn/large/008eGmZEgy1gpi7rpndinj31dx0u0tie.jpg)

## Vue3 基本使用

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
