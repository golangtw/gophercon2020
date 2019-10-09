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
      <h3
        v-if="$route.name === 'CFP'"
        class="flag"
      >
        Call of Paper｜徵稿開催
      </h3>
      <h1 class="title bold">
        <span>COSCUP 2019 </span>
        <span v-html="parser('來/Laí/台/Taí/講/Gàng/')"/>
      </h1>
      <h2 
        class="subtitle"
        v-html="parser('來/Laí/用/Yòng/台/Taí/語/Gí/講/Gong/開/Kai/源/Yuán/')"
      />
      <p class="content">
        <span class="date">Dec. 21, 2019</span>
        <span class="place"><font-awesome-icon :icon="['fas', 'map-marker-alt']"/> 臺中科技大學</span>
      </p>
      <h2
        v-if="$route.name === 'CFP'"
        class="button"
      >
        <a v-html="parser('我/Wǒ/要/Yaò/投/Toú/稿/Gaǒ/')"></a>
      </h2>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { AppState } from '@/store/types/app';
import { pinYinParser } from '@/util/parser';
import Sight from '@/components/Sight.vue';

const namespace: string = 'app';

@Component({
  components: {
    Sight
  }
})
export default class Banner extends Vue {
  private parser = pinYinParser;

  @Action('setSight', { namespace }) private setSight: any;
  @Getter('sight', { namespace }) private sight: any;

  public mounted () {
    this.measureSightSize();

    window.addEventListener('resize', this.measureSightSize);
  }

  private measureSightSize () {
    const sightContainer: any = this.$refs.sightContainer;

    if (sightContainer.clientWidth > 840) {
      this.setSight({
        width: sightContainer.clientWidth,
        height: sightContainer.clientHeight,
        spot: {
          x: sightContainer.clientWidth / 2.0 + 140,
          y: sightContainer.clientHeight / 2.0 + 50
        }
      });
    } else {
      this.setSight({
        width: sightContainer.clientWidth,
        height: sightContainer.clientHeight,
        spot: {
          x: sightContainer.clientWidth + 50,
          y: sightContainer.clientHeight / 2.0 + 50
        }
      });
    }
  }
}
</script>
