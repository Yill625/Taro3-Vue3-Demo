# Taro3-Vue3-Vuex-Demo

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
