<template>
  <view class="test">
    111
    <slot></slot>
  </view>
  <view :class="$attrs.class"> 222 </view>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'fix-bar'
})
</script>
