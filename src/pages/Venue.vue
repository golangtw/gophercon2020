<template>
  <div id="venue" class="main-container">
    <h1 class="title">會場地圖</h1>
    <div class="map-container">
      <img src="@/assets/images/3F.svg" alt class="map map-3f" />
      <img src="@/assets/images/4F.svg" alt class="map map-4f" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Venue extends Vue { }
</script>
