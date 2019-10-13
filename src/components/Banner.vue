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
    <header
      class="banner-header"
      :style="{ '--box-width': `${ ((sight.height - (sight.rows - 1) * sight.gap) / sight.rows + sight.gap) * 3 }px` }"
    >
      <div class="view-box">
        <h3 class="flag font-bold">SITCON 2020</h3>
        <h1 class="title font-black">Call for<br>Paper</h1>
        <h2 class="subtitle font-black">稿件徵求中！</h2>
      </div>
      <div class="view-box">
        <div class="define">
          <p class="code font-black font-italic">#define</p>
          <p class="code font-black font-italic">2020</p>
          <p class="code font-black font-italic">Future</p>
          <p class="code font-black font-italic">Student</p>
          <p class="code font-black font-italic">Programmer</p>
          <p class="code font-black font-italic">SecurityGuard</p>
          <div class="board">
            <h1 class="date font-black">3/28（日）</h1>
            <h3>中央研究院</h3>
            <h2 class="font-bold">人文社會科學館</h2>
          </div>
        </div>
      </div>
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
