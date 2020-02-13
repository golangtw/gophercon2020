<template>
  <div
    id="banner"
    class="banner-container"
    :style="{
      '--viewbox-width': `${(sight.width + sight.gap) * 3}px`,
      '--viewbox-height': `${sight.offset + (sight.height + sight.gap) * 3}px`,
      '--box-width': `${(sight.width)}px`,
      '--box-height': `${(sight.height)}px`,
      '--box-gap': `${sight.gap}px`,
      '--sight-offset': `${sight.offset}px`
     }"
  >
    <div class="banner-bg" ref="sightContainer">
      <Sight
        :containerWidth="sight.containerWidth"
        :containerHeight="sight.containerHeight"
        :width="sight.width"
        :height="sight.height"
        :cols="sight.cols"
        :rows="sight.rows"
        :gap="sight.gap"
      />
    </div>
    <header class="banner-header">
      <div class="view-box">
        <h3 class="flag font-bold">SITCON 2020</h3>
        <h1 class="title font-black">Call for<br>Paper</h1>
        <h2 class="subtitle font-black">稿件徵求中！</h2>
      </div>
      <div class="view-box">
        <div class="define">
          <p class="code font-black font-italic">#define</p>
          <p
            v-if="theme.includes('RAINBOW')"
            class="code font-black font-italic"
          >
            GenderEquality
          </p>
          <p class="code font-black font-italic">student</p>
          <p class="code font-black font-italic">2020</p>
          <p class="code font-black font-italic">future</p>
          <p class="code font-black font-italic">programmer</p>
          <div class="board">
            <h1 class="date font-black">3/28（六）</h1>
            <h3>中央研究院</h3>
            <h2 class="font-bold">人文社會科學館</h2>
          </div>
        </div>
      </div>
      <div class="view-box side-menu">
        <a
          @click="processPopup('submitInfo')"
          class="button"
        >
          <p>投稿資訊</p>
        </a>
        <a
          @click="processPopup('openSubmit')"
          class="button smaller"
        >
          <p>開放式議程</p>
        </a>
        <a
          @click="processPopup('loudly')"
          class="button"
        >
          <p>大鳴大放</p>
        </a>
        <a
          class="button"
          @click="$router.push({ hash: '#sponsor' })"
        >
          <p>贊助資訊</p>
        </a>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { AppState } from '@/store/types/app';
import Sight from './Sight.vue';
import { DeviceType } from '../../store/types/app';

@Component({
  components: {
    Sight
  }
})
export default class Banner extends Vue {
  @Action('setSightMeasure', { namespace: 'app' }) private setSightMeasure: any;
  @Action('togglePopup', { namespace: 'app' }) private togglePopup: any;
  @Action('togglePopupContent', { namespace: 'app' }) private togglePopupContent: any;
  @Getter('device', { namespace: 'app' }) private device: any;
  @Getter('theme', { namespace: 'app' }) private theme: any;
  @Getter('sight', { namespace: 'app' }) private sight: any;
  @Getter('submitInfo', { namespace: 'template' }) private submitInfo: any;
  @Getter('openSubmit', { namespace: 'template' }) private openSubmit: any;
  @Getter('loudly', { namespace: 'template' }) private loudly: any;

  @Watch('device')
  public onDeviceChanged (val: string, newVal: string) {
    this.measureSightSize();
  }

  public mounted () {
    this.measureSightSize();

    window.addEventListener('resize', this.measureSightSize);
  }

  public destroyed () {
    window.removeEventListener('resize', this.measureSightSize);
  }

  private measureSightSize (): void {
    const sightContainer: any = this.$refs.sightContainer;

    const sightOffset: number = sightContainer.offsetTop;
    const boxCols: number = this.device === DeviceType.MOBILE ? Math.floor((sightContainer.clientWidth + 12) / 100) : 8;
    const boxRows: number = 3;
    const boxGap = this.device === DeviceType.MOBILE ? 27 : 40;
    const boxWidth: number = (sightContainer.clientWidth - boxGap * (boxCols - 1)) / boxCols;
    const boxHeight: number = boxWidth;
    const containerWidth: number = boxWidth * boxCols + boxGap * (boxCols - 1);
    const containerHeight: number = boxHeight * boxRows + boxGap * (boxRows - 1);

    this.setSightMeasure({
      offset: sightOffset,
      containerWidth,
      containerHeight,
      width: boxWidth,
      height: boxHeight,
      cols: boxCols,
      rows: boxRows,
      gap: boxGap
    });
  }

  private processPopup (hook: string): void {
    this.$router.push({ query: { popUp: hook } });
  }
}
</script>
