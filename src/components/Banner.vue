<template>
  <div id="banner" class="banner-container">
    <div class="banner-bg" ref="sightContainer">
    </div>
    <header class="banner-header">
      <h1 class="title">Call for Paper</h1>
      <h2 class="subtitle">稿件徵求中！</h2>
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
