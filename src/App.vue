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
    this.detectDeviceType();
    window.addEventListener('resize', this.detectDeviceType);

    await this.detectSystemPrefersColorSchema();

    window.matchMedia('(prefers-color-scheme: dark)').addListener(async () => {
      await this.detectSystemPrefersColorSchema();
    });
  }

  public destroyed () {
    window.removeEventListener('resize', this.detectDeviceType);
  }

  private detectedEgg (): boolean {
    const now: Date = new Date();

    return now.getTime() > new Date('2019-10-26').getTime() && now.getTime() < new Date('2019-11-27').getTime();
  }

  private detectDeviceType (): void {
    const isDesktop: boolean = window.matchMedia('(min-width: 1000px)').matches;

    if (isDesktop) {
      this.toggleDevice('DESKTOP');
    } else {
      this.toggleDevice('MOBILE');
    }
  }

  private async detectSystemPrefersColorSchema (): Promise<void> {
    const isDarkMode: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isLightMode: boolean = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (isLightMode) {
      this.detectedEgg() ? this.toggleTheme('RAINBOW-LIGHT') : this.toggleTheme('LIGHT');
    } else if (isDarkMode) {
      this.detectedEgg() ? this.toggleTheme('RAINBOW-DARK') : this.toggleTheme('DARK');
    } else {
      await this.getSunRiseSunSetData();
      this.toggleThemeViaSunRiseSunSet();

      setInterval(() => {
        this.toggleThemeViaSunRiseSunSet();
      }, 1000);
    }
  }

  private toggleThemeViaSunRiseSunSet (): void {
    const now = new Date();
    const isEgg: boolean = this.detectedEgg();
    const isDay: boolean = now.getTime() > this.sunrise.getTime() && now.getTime() < this.sunset.getTime();

    let themePrefix: string = '';

    if (isEgg) {
      themePrefix = 'RAINBOW-';
    } else {
      themePrefix = '';
    }

    if (isDay) {
      themePrefix += 'LIGHT';
    } else {
      themePrefix += 'DARK';
    }

    this.toggleTheme(themePrefix);
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
