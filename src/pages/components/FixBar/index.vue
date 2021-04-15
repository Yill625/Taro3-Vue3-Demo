<template>
  <view class="test">
    {{ title }}
    <slot></slot>
    {{ title1 }}
  </view>
  <view :class="$attrs.class"> 222 </view>
</template>
<script lang="ts">
import { computed, defineComponent, toRef, toRefs } from 'vue'
export default defineComponent({
  name: 'fix-bar',
  props: {
    title: {
      type: Number,
      default: 100
    }
  },
  setup(props, context) {
    const title1 = computed(() => {
      return props.title + 1
    })
    // console.log(context)
    // const { title } = toRefs(props)
    return { title1 }
  }
})
</script>
