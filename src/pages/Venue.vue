<template>
  <div id="venue" class="main-container">
    <h1 class="title">會場地圖</h1>
    <div class="map-container">
      <img src="@/assets/images/3F.svg" alt="" class="map">
      <img src="@/assets/images/4F.svg" alt="" class="map">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Map3F from '@/components/Venue/Map3F.vue';
import Map4F from '@/components/Venue/Map4F.vue';

@Component({
  components: {
    Map3F,
    Map4F
  }
})
export default class Venue extends Vue {
}
</script>
