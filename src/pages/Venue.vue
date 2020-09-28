<template>
  <div id="venue" class="main-container">
    <LogoTop v-if="$store.state.app.device !== 'mobile'" />
    <div class="background-image">
      <div class="image-wrapper">
        <img src="https://gophercon.golang.tw/2020/img/subpage-bg.png"
           srcset="https://gophercon.golang.tw/2020/img/subpage-bg@2x.png 2x,https://gophercon.golang.tw/2020/img/subpage-bg@3x.png 3x"
           class="Group-9">
        <img src="https://gophercon.golang.tw/2020/img/graphic-direction-1.png"
             srcset="https://gophercon.golang.tw/2020/img/graphic-direction-1@2x.png 2x,https://gophercon.golang.tw/2020/img/graphic-direction-1@3x.png 3x" class="direction-1">
        <img src="https://gophercon.golang.tw/2020/img/graphic-direction-2.png"
             srcset="https://gophercon.golang.tw/2020/img/graphic-direction-2@2x.png 2x,https://gophercon.golang.tw/2020/img/graphic-direction-2@3x.png 3x" class="direction-2">
      </div>
    </div>
    <div id="venue" class="main-container">
      <h1 class="title">會場地圖</h1>
      <div class="map-container">
        <img src="@/assets/images/3F.svg" alt class="map map-3f" />
        <img src="@/assets/images/4F.svg" alt class="map map-4f" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LogoTop from '../components/LogoTop.vue';

@Component({
  components: {
    LogoTop,
  }
})

export default class Venue extends Vue { }
</script>
