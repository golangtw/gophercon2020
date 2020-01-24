<template>
  <div id="venue" class="main-container">
    <main class="spotlight-container">
      <div class="spotlight">
        <h1 class="bold">活動地圖</h1>
        <ActivityBar />
        <!-- 2020 的 svg 下載不了，先用 2019 代替 -->
        <img src="@/../public/img/venue-3f.svg" alt="3樓場地平面圖" />
        <img src="@/../public/img/venue-4f.svg" alt="4樓場地平面圖" />
        <p>2020 的 svg 下載不了，先用 2019 代替</p>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/CFP/Banner.vue';
import Footer from '@/components/CFP/Footer.vue';
import ActivityBar from '@/components/ActivityBar.vue';

@Component({
  components: {
    Banner,
    Footer,
    ActivityBar
  }
})
export default class Venue extends Vue {}
</script>

<style scoped>
img {
  position: relative;
  max-width: 100%;
  margin: 5% 5% 5% 7%;
}
</style>