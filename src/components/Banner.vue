<template>
  <div id="banner" class="banner-container">
    <div class="banner-bg" ref="sightContainer">
      <Sight
        :width="sight.width"
        :height="sight.height"
        :cols="sight.cols"
        :rows="sight.rows"
        :gap="sight.gap"
      />
    </div>
    <header class="banner-header">
      <h3 class="flag font-bold">SITCON 2020</h3>
      <h1 class="title font-black">Call for<br>Paper</h1>
      <h2 class="subtitle font-black">稿件徵求中！</h2>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { AppState } from '@/store/types/app';
import Sight from './Sight.vue';

const namespace: string = 'app';

@Component({
  components: {
    Sight
  }
})
export default class Banner extends Vue {
  @Action('setSightMeasure', { namespace }) private setSightMeasure: any;
  @Getter('sight', { namespace }) private sight: any;

  public mounted () {
    this.measureSightSize();
  }

  private measureSightSize () {
    const sightContainer: any = this.$refs.sightContainer;

    this.setSightMeasure({
      width: sightContainer.clientWidth,
      height: sightContainer.clientHeight,
      cols: 10,
      rows: 3,
      gap: 40
    });
  }
}
</script>
