<template>
  <div id="traffic" class="traffic main-container">
    <h1 class="title">Location 地點</h1>
    <p class="content">
      集思台大會議中心<br/>
      台北市大安區羅斯福路四段85號B1 <br/>
      GIS NTU Convention Center<br/>
      Taipei City, Da’an District, Section 4, Roosevelt Rd, No.85 B1
    </p>
    <gopher-con-map width="100%" height="650px" />
    <div class="traffic-flow">
      <img src="@/assets/images/traffic-flow.png" alt="">
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
