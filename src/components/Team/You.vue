<template>
  <div id="staff">
    <p>敬請期待 (owo)b</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class You extends Vue {
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

p {
  text-align: center;
  font-size: 36px;
  color: $black
}
</style>