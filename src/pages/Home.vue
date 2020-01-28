<template>
  <div id="home" class="main-container"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import head from '@/util/head';

@Component
export default class Home extends Vue {
  public mounted () {
    head.reset();
  }
}
</script>
