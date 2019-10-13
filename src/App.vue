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
  @Action('getSunRiseSunSetData', { namespace: 'sunRiseSunSet' }) private getSunRiseSunSetData: any;
  @Getter('theme', { namespace }) private theme: any;
  @Getter('sunrise', { namespace: 'sunRiseSunSet' }) private sunrise: any;
  @Getter('sunset', { namespace: 'sunRiseSunSet' }) private sunset: any;

  public async mounted () {
    await this.getSunRiseSunSetData();
    this.toggleThemeViaSunRiseSunSet();

    setInterval(() => {
      this.toggleThemeViaSunRiseSunSet();
    }, 1000);
  }

  private toggleThemeViaSunRiseSunSet () {
    const now = new Date();

    if (now.getTime() > this.sunrise.getTime() && now.getTime() < this.sunset.getTime()) {
      this.toggleTheme('LIGHT');
    } else {
      this.toggleTheme('DARK');
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
