import { createStore } from "vuex";
import userInfo from "./userInfo";

const store = createStore({
  modules: {
    userInfo,
  },
});

export default store;
