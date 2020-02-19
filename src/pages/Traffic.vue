<template>
  <div id="traffic" class="traffic main-container">
    <h1 class="title">地點</h1>
    <p class="content">
      集思北科大會議中心感恩廳<br/>
      台北市大安區忠孝東路三段1號億光大樓
    </p>
    <gophercon-map width="100%" height="650px" />
    <div class="traffic-flow">
      <img src="@/assets/images/traffic-flow.svg" alt="">
    </div>
    <div class="hint">
      <p>
        <font-awesome-icon :icon="['fas', 'angle-left']" />
        <span>左右滑動路線圖以檢視更多</span>
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import GopherConMap from '@/components/GopherConMap.vue';

@Component({
  components: {
    GopherConMap
  }
})
export default class Traffic extends Vue {
}
</script>
