import { reactive, readonly } from 'vue';

export const createStore = () => {
  const state = reactive({ counter: 0 });
  const increment = () => state.counter++;

  return { increment, state: readonly(state) };
}
