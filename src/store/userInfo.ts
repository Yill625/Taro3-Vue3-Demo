interface indexStore {
  count: number;
}

const userInfo = {
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    increment(state: indexStore) {
      state.count++;
    },
  },
};

export default userInfo;
