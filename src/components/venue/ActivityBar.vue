<!-- 手機板找不到對應的 ziplin 文件，先做 PC 版的 -->
<template>
  <div id="activity-bar-container">
    <div id="activity-bar">
      <div class="activity-bar-title activity-bar-component">
        <span>活</span>
        <span>動</span>
      </div>
      <div id="activity-bar-item-container">
        <ActivityBarItem />
        <ActivityBarItem />
        <ActivityBarItem />
        <ActivityBarItem />
        <ActivityBarItem />
        <ActivityBarItem />
      </div>
    </div>
  </div>
</template>

<script type="ts">
import { Component, Vue } from "vue-property-decorator";
import ActivityBarItem from "@/components/venue/ActivityBarItem";
@Component({
  components: { ActivityBarItem }
})
export default class ActivityBar extends Vue {}
</script>

<style scoped>
#activity-bar-container {
  padding: 0 1.25em;
}

#activity-bar {
  transform: skewX(-9deg);
  width: 100%;
  /* min-height: 351px; */
  display: inline-flex;
  color: white;
}

.activity-bar-title {
  border-radius: 12px;
  background: black;
}

.activity-bar-title {
  writing-mode: vertical-lr;
  font-size: 48px;
  width: initial;
  text-align: center;
  padding: 0.5em;
  color: white;
}

#activity-bar-item-container {
  display: flex;
  width: 100%;
}

#activity-bar span {
  display: inline-block;
  transform: skewY(9deg) rotate(-9deg);
  color: white;
}

.activity-bar-title span:not(:first-child) {
  margin-top: 25px;
}
</style>