<template>
  <div id="banner" class="banner-container">
    <div class="banner-bg" ref="sightContainer">
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

const namespace: string = 'app';

@Component({})
export default class Banner extends Vue {
}
</script>
