<template>
  <div
    id="app"
    :class="`theme-${ theme.toLowerCase() }`"
  >
    <Navbar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import Navbar from '@/components/Navbar.vue';

const namespace: string = 'app';

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  @Action('toggleTheme', { namespace }) private toggleTheme: any;
  @Getter('theme', { namespace }) private theme: any;
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
