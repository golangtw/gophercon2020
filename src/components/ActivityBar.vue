<template>
  <div id="activity-bar-container">
    <div id="activity-bar">
      <div class="activity-bar-item">
        <p>活</p>
        <p>活</p>
      </div>
      <div class="activity-bar-item">文字測試</div>
      <div class="activity-bar-item">文字測試</div>
      <div class="activity-bar-item">文字測試</div>
      <div class="activity-bar-item">文字測試</div>
      <div class="activity-bar-item">文字測試</div>
      <div class="activity-bar-item">文字測試</div>
    </div>
  </div>
</template>

<script type="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ActivityBar extends Vue {}
</script>

<style scoped>
#activity-bar-container {
  padding: 0 1.25em;
}
#activity-bar {
  transform: skewX(-8deg);
  
  width: 100%;
  min-height: 4.25em;
  display: inline-flex;
  justify-content: space-between;
}

.activity-bar-item {
  width: 15%;
  background: grey;
  border-radius: 4px;
}

.activity-bar-item:first-child {
  width: 6%;
}

#activity-bar p {
  transform: skewX(8deg);
}
</style>