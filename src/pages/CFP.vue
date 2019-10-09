<template>
  <div id="cfp" class="main-container">
    <Banner/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';

@Component({
  components: {
    Banner
  }
})
export default class CFP extends Vue {}
</script>
