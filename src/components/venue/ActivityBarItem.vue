<template>
  <div class="activity-bar-item activity-bar-component">
    <div class="icon-top">icon</div>
    <div class="img-container">image</div>
    <div class="text-bottom">text</div>
  </div>
</template>

<script type="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ActivityBarItem extends Vue {}
</script>

<style scoped>

.activity-bar-item > * {
  border-radius: 12px;
  background: black;
}

.activity-bar-item {
  margin-left: 20px;
  flex-shrink: 1;
  flex-grow: 1;
}

.icon-top,
.text-bottom {
  height: 72px;
}

.img-container {
  height: 186px;
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>