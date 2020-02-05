<template>
  <div id="venue" class="main-container">
    <h1 class="title">會場地圖</h1>
    <div class="map-container">
      <div style="width: 100%; position: relative">
        <img src="@/assets/images/3F.svg" alt class="map f3" />
        <div class="floor-container">
          <div class="floor">3F</div>
          <div class="floor">4F</div>
        </div>
      </div>
      <img src="@/assets/images/4F.svg" alt class="map f4" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import Map3F from '@/components/Venue/Map3F.vue';
// import Map4F from '@/components/Venue/Map4F.vue';

@Component
/* ({
  components: { Map3F, Map4F }
}) */
export default class Venue extends Vue { }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/color";

#venue {
  .map-container {
    position: relative;
    width: 72%;

    .map {
      width: 100%;
      margin-bottom: 60px;
    }

    .f3 {
      //margin-top: -10%;
      //margin-bottom: -10%;
      margin-left: 2.3%; // to EXACTLY align center
    }

    .f4 {
      //margin-top: -10%;
      //margin-bottom: -8%;
      margin-left: 2.3%; // to EXACTLY align center
    }

    .floor-container {
      background: $black;
      position: absolute;
      right: -20%;
      bottom: -10%;
      transform: skewX(-15deg);
      transform-origin: center;
      border-radius: 18px;

      .floor {
        color: $white;
        transform: skewX(15deg);
        padding: 28px;
        font-size: 54px;
      }
    }
  }

  // Where is .floor-box ???
  /*
  .floor-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    right: 0;
    top: calc(50% - 320px / 2);
    height: 320px;
    width: 180px;
    overflow: hidden;
    background-color: $black;
    border-radius: 24px;
    transform: skewX(-15deg);

    @media screen and (max-width: 1600px) {
      height: 260px;
      width: 140px;
      top: calc(50% - 260px / 2);
      border-radius: 12px;
    }

    @media screen and (max-width: 1440px) {
      height: 200px;
      width: 120px;
      top: calc(50% - 200px / 2);
      right: 60px;
    }

    @media screen and (max-width: 1200px) {
      height: 180px;
      width: 100px;
      top: calc(50% - 180px / 2);
      right: 50px;
    }

    @media screen and (max-width: 1024px) {
      height: 100px;
      width: 60px;
      top: calc(50% - 100px / 2);
      right: 30px;
    }

    @media screen and (max-width: 675px) {
      height: 60px;
      width: 30px;
      top: calc(50% - 60px / 2);
      right: 15px;
      border-radius: 6px;
    }

    p {
      color: $white;
      font-size: 60px;
      margin: 48px;
      transform: skewX(15deg);
      cursor: pointer;

      @media screen and (max-width: 1600px) {
        font-size: 50px;
        margin: 32px;
      }

      @media screen and (max-width: 1440px) {
        font-size: 42px;
        margin: 20px;
      }

      @media screen and (max-width: 1200px) {
        font-size: 40px;
        margin: 16px;
      }

      @media screen and (max-width: 1024px) {
        font-size: 32px;
        margin: 8px;
      }

      @media screen and (max-width: 675px) {
        font-size: 16px;
        margin: 4px;
      }
    }
  }
  */
}
</style>
