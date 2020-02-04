<template>
  <section class="sponsor-container" id="sponsor">
    <a href="#"><img src="@/assets/images/sponsors/coscup.png"></a>
    <a href="#"><img src="@/assets/images/sponsors/sitcon.png"></a>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Sponsor extends Vue {
}
</script>

<style lang="scss" scoped>
.sponsor-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  img {
      max-height: 160px;
  }
}
</style>