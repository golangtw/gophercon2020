<template>
  <div id="sponsor" class="traffic container">
    <LogoTop v-if="$store.state.app.device !== 'mobile'" />
    <div class="background-image">
      <div class="image-wrapper">
        <img
          src="https://gophercon.golang.tw/2020/img/subpage-bg.png"
          srcset="
            https://gophercon.golang.tw/2020/img/subpage-bg@2x.png 2x,
            https://gophercon.golang.tw/2020/img/subpage-bg@3x.png 3x
          "
          class="Group-9"
        />
        <img
          src="https://gophercon.golang.tw/2020/img/graphic-map-1.png"
          srcset="
            https://gophercon.golang.tw/2020/img/graphic-map-1@2x.png 2x,
            https://gophercon.golang.tw/2020/img/graphic-map-1@3x.png 3x
          "
          class="map-1"
        />
        <img
          src="https://gophercon.golang.tw/2020/img/graphic-map-2.png"
          srcset="
            https://gophercon.golang.tw/2020/img/graphic-map-2@2x.png 2x,
            https://gophercon.golang.tw/2020/img/graphic-map-2@3x.png 3x
          "
          class="map-2"
        />
        <img
          src="https://gophercon.golang.tw/2020/img/graphic-map-3.png"
          srcset="
            https://gophercon.golang.tw/2020/img/graphic-map-3@2x.png 2x,
            https://gophercon.golang.tw/2020/img/graphic-map-3@3x.png 3x
          "
          class="map-3"
        />
      </div>
    </div>
    <div class="content">
      <div class="card-container individual-sponsor">
        <div class="card">
          <h2 class="font-black subtitle">地點</h2>
          <p class="paragraph" style="text-align: center;">
            集思台大會議中心<br />
            台北市大安區羅斯福路四段85號B1 <br />
            GIS NTU Convention Center<br />
            Taipei City, Da’an District, Section 4, Roosevelt Rd, No.85 B1
          </p>
        </div>
      </div>
      <div class="sponsor-wrapper">
        <div class="sponsor-card-container">
          <h2 class="sponsor-level">
            <span class="sponsor-level-text">交通地圖</span>
          </h2>
        </div>
				<div class="sponsor-card">
					<gopher-con-map width="100%" height="650px" />
				</div>
        <div class="traffic-flow" style="width: 100%;">
          <img src="@/assets/images/traffic-flow.png" alt="" style="width: 100%; object-fit: contain;"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import GopherConMap from '@/components/GopherConMap.vue';
import LogoTop from '../components/LogoTop.vue';

@Component({
  components: {
    GopherConMap,
    LogoTop,
  },
})
export default class Traffic extends Vue {}
</script>
