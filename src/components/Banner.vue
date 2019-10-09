<template>
  <div id="banner" class="banner-container">
    <div class="banner-bg" ref="sightContainer">
      <Sight
        :width="sight.width"
        :height="sight.height"
        :spot="sight.spot"
      />
    </div>
    <header class="banner-header">
      <h1 class="title">COSCUP 2019 來台講</h1>
      <h2 class="subtitle">
        <ruby>來用台語講開源</ruby>
      </h2>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { AppState } from '../store/types/app';
import Sight from '@/components/Sight.vue';

const namespace: string = 'app';

@Component({
  components: {
    Sight
  }
})
export default class Banner extends Vue {
  @Action('setSight', { namespace }) private setSight: any;
  @Getter('sight', { namespace }) private sight: any;

  public mounted () {
    this.measureSightSize();
  }

  private measureSightSize () {
    const sightContainer: any = this.$refs.sightContainer;

    this.setSight({
      width: sightContainer.clientWidth,
      height: sightContainer.clientHeight,
      spot: {
        x: sightContainer.clientWidth / 2.0,
        y: sightContainer.clientHeight / 2.0
      }
    });
  }
}
</script>
