<template>
  <div id="venue" class="main-container">
    <h1 class="title">會場地圖</h1>
    <div class="map-container">
      <Map3F class="map"/>
      <Map4F class="map"/>
      <div class="floor-box">
        <p @click="$router.push({ hash: '#map-3F' })">3F</p>
        <p @click="$router.push({ hash: '#map-4F' })">4F</p>
      </div>
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
