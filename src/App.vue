<template>
  <div
    id="app"
    :class="`theme-${ theme.toLowerCase() }`"
  >
    <Navbar/>
    <router-view/>
    <Popup
      :isOpen="isPopup"
      :content="popupContent"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import Navbar from '@/components/Navbar.vue';
import Popup from '@/components/Popup.vue';
import { TemplateState } from './store/types/template';

import head from './util/head';
head.reset();

@Component({
  components: {
    Navbar,
    Popup
  }
})
export default class App extends Vue {
  @Action('toggleTheme', { namespace: 'app' }) private toggleTheme: any;
  @Action('toggleDevice', { namespace: 'app' }) private toggleDevice: any;
  @Action('togglePopup', { namespace: 'app' }) private togglePopup: any;
  @Action('togglePopupContent', { namespace: 'app' }) private togglePopupContent: any;
  @Action('getSunRiseSunSetData', { namespace: 'sunRiseSunSet' }) private getSunRiseSunSetData: any;
  @Getter('device', { namespace: 'app' }) private device: any;
  @Getter('theme', { namespace: 'app' }) private theme: any;
  @Getter('isPopup', { namespace: 'app' }) private isPopup: any;
  @Getter('popupContent', { namespace: 'app' }) private popupContent: any;
  @Getter('validPopupTypes', { namespace: 'app' }) private validPopupTypes: any;
  @Getter('sunrise', { namespace: 'sunRiseSunSet' }) private sunrise: any;
  @Getter('sunset', { namespace: 'sunRiseSunSet' }) private sunset: any;
  @Getter('submitInfo', { namespace: 'template' }) private submitInfo: any;
  @Getter('openSubmit', { namespace: 'template' }) private openSubmit: any;
  @Getter('loudly', { namespace: 'template' }) private loudly: any;

  public async mounted () {
    this.detectDeviceType();
    window.addEventListener('resize', this.detectDeviceType);

    await this.detectSystemPrefersColorSchema();

    window.matchMedia('(prefers-color-scheme: dark)').addListener(async () => {
      await this.detectSystemPrefersColorSchema();
    });

    this.detectedPageBehaviorWithinUrlFallback();
  }

  public destroyed () {
    window.removeEventListener('resize', this.detectDeviceType);
  }

  private detectedEgg (): boolean {
    const now: Date = new Date();

    return now.getTime() > new Date('2019-10-26').getTime() && now.getTime() < new Date('2019-11-27').getTime();
  }

  private detectDeviceType (): void {
    const isDesktop: boolean = window.matchMedia('(min-width: 1024px)').matches;

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

  private detectedPageBehaviorWithinUrlFallback (): void {
    this.detectedPopUp();
    this.detectedHashHook();
  }

  private detectedPopUp (): void {
    if (this.$route.query.popUp && this.validPopupTypes.includes(this.$route.query.popUp)) {
      const popupToken = this.$route.query.popUp as keyof TemplateState;
      const template: TemplateState = {
        submitInfo: this.submitInfo as string,
        openSubmit: this.openSubmit as string,
        loudly: this.loudly as string
      };
      const popupContent = template[popupToken] as string;

      this.togglePopupContent(popupContent);
      this.togglePopup(true);

      setTimeout(() => {
        this.detectedPopupHashHook();
      }, 500);
    }
  }

  private detectedHashHook (): void {
    if (this.$route.hash) {
      const target = document.querySelector(this.$route.hash) as HTMLElement;

      window.scrollTo({ top: target.offsetTop });
    }
  }

  private detectedPopupHashHook (): void {
    if (this.$route.hash) {
      const target = document.querySelector(`.popup-content>${this.$route.hash}`) as HTMLElement;
      const popUp = document.querySelector(`.popup-content`) as HTMLElement;
      const popupPadding = 24;

      return window.scrollTo({
        top: target.offsetTop + popUp.offsetTop - popupPadding,
        behavior: 'smooth'
      });
    }
  }
}
</script>
