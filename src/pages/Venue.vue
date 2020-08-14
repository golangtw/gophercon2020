<template>
  <div id="venue" class="main-container">
    <a href="/2020/" class="Logo">
      <img src="https://gophercon.golang.tw/2020/img/logo.svg" class="Logo">
    </a>
    <div class="background-image">
      <img src="https://gophercon.golang.tw/2020/img/subpage-bg.png"
           srcset="https://gophercon.golang.tw/2020/img/subpage-bg@2x.png 2x,https://gophercon.golang.tw/2020/img/subpage-bg@3x.png 3x"
           class="Group-9">
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

@Component
export default class Venue extends Vue { }
</script>
