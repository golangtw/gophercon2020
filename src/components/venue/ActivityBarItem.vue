<template>
  <div class="activity-bar-item activity-bar-component">
    <div class="icon-top">
      <img src="https://userpic.codeforces.com/1149973/avatar/131d7e20bf5b72d.jpg" alt="白羊豪可愛>///<" />
    </div>
    <div class="img-container">image</div>
    <div class="text-bottom"><p>大地活動</p></div>
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
  min-width: 214px;
}

.icon-top,
.text-bottom {
  /* height: 72px; */
  text-align: center;
}

.img-container {
  height: 186px;
  margin-top: 16px;
  margin-bottom: 16px;
}

.icon-top > *,
.text-bottom > * {
  transform: skewY(9deg) rotate(-9deg);
}

.icon-top img {
  width: 52px;
  height: 52px;
  margin: 10px;
}

.text-bottom {
  font-size: 30px;
  padding: 20px;
}
</style>