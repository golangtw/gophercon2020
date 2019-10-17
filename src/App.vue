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
  @Action('toggleDevice', { namespace }) private toggleDevice: any;
  @Action('getSunRiseSunSetData', { namespace: 'sunRiseSunSet' }) private getSunRiseSunSetData: any;
  @Getter('device', { namespace }) private device: any;
  @Getter('theme', { namespace }) private theme: any;
  @Getter('sunrise', { namespace: 'sunRiseSunSet' }) private sunrise: any;
  @Getter('sunset', { namespace: 'sunRiseSunSet' }) private sunset: any;

  public async mounted () {
    await this.detectSystemPrefersColorSchema();
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', this.detectSystemPrefersColorSchema);

    this.detectDeviceType();
    window.addEventListener('resize', this.detectDeviceType);
  }

  public destroyed () {
    window.removeEventListener('change', this.detectSystemPrefersColorSchema);
    window.removeEventListener('resize', this.detectDeviceType);
  }

  private detectDeviceType () {
    const isDesktop: boolean = window.matchMedia('(min-width: 1024px)').matches;

    if (isDesktop) {
      this.toggleDevice('DESKTOP');
    } else {
      this.toggleDevice('MOBILE');
    }
  }

  private async detectSystemPrefersColorSchema () {
    const isDarkMode: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isLightMode: boolean = window.matchMedia('(prefers-color-scheme: light)').matches;
    const isNotSpecified: boolean = window.matchMedia('(prefers-color-scheme: no-preference)').matches;

    if (isNotSpecified) {
      await this.getSunRiseSunSetData();
      this.toggleThemeViaSunRiseSunSet();

      setInterval(() => {
        this.toggleThemeViaSunRiseSunSet();
      }, 1000);
    } else if (isDarkMode) {
      this.toggleTheme('DARK');
    } else {
      this.toggleTheme('LIGHT');
    }
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
