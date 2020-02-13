<template>
  <div
    id="app"
    :class="[`theme-${ theme.toLowerCase() }`, $route.name === 'CFP' ? 'cfp' : 'main', isInApp() ? 'in-app' : '']"
  >
    <Navbar v-if="$route.name !== 'CFP' && !isInApp()"/>
    <router-view/>
    <Popup
      :isOpen="isPopup"
      :content="popupContent"
    />
    <SponsorSection/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import Navbar from '@/components/Navbar.vue';
import Popup from '@/components/Popup.vue';
import Footer from '@/components/Footer.vue';
import SponsorSection from '@/components/Sponsor.vue';

import { TemplateState } from '@/store/types/template';
import { DeviceType, AppMode, ThemeType } from '@/store/types/app';

import head from '@/util/head';

@Component({
  components: {
    Navbar,
    Popup,
    Footer,
    SponsorSection
  }
})
export default class App extends Vue {
  @Action('toggleTheme', { namespace: 'app' }) private toggleTheme!: (theme: ThemeType) => void;
  @Action('toggleMode', { namespace: 'app' }) private toggleMode!: (mode: AppMode) => void;
  @Action('toggleDevice', { namespace: 'app' }) private toggleDevice!: (device: DeviceType) => void;
  @Action('togglePopup', { namespace: 'app' }) private togglePopup!: (status: boolean) => void;
  @Action('togglePopupContent', { namespace: 'app' }) private togglePopupContent!: (content: string) => void;
  @Action('getSunRiseSunSetData', { namespace: 'sunRiseSunSet' }) private getSunRiseSunSetData!: () => Promise<void>;
  @Getter('device', { namespace: 'app' }) private device!: DeviceType;
  @Getter('mode', { namespace: 'app' }) private mode!: AppMode;
  @Getter('theme', { namespace: 'app' }) private theme!: ThemeType;
  @Getter('isPopup', { namespace: 'app' }) private isPopup!: boolean;
  @Getter('popupContent', { namespace: 'app' }) private popupContent!: string;
  @Getter('sunrise', { namespace: 'sunRiseSunSet' }) private sunrise!: Date;
  @Getter('sunset', { namespace: 'sunRiseSunSet' }) private sunset!: Date;
  @Getter('submitInfo', { namespace: 'template' }) private submitInfo!: string;
  @Getter('openSubmit', { namespace: 'template' }) private openSubmit!: string;
  @Getter('loudly', { namespace: 'template' }) private loudly!: string;

  public async mounted () {
    this.detectPopupFromLoadURL();
    this.detectAppMode();
    this.detectDeviceType();
    window.addEventListener('resize', this.detectDeviceType);

    await this.detectSystemPrefersColorSchema();

    window.matchMedia('(prefers-color-scheme: dark)').addListener(async () => {
      await this.detectSystemPrefersColorSchema();
    });
  }

  @Watch('$route')
  public onChangeRoute () {
    this.detectPopupFromLoadURL();
  }

  public destroyed () {
    window.removeEventListener('resize', this.detectDeviceType);
  }

  private isInApp (): boolean {
    return this.mode === AppMode.APP;
  }

  private detectedEgg (): boolean {
    const now: Date = new Date();

    return (
      now.getTime() > new Date('2019-10-26').getTime() &&
      now.getTime() < new Date('2019-11-27').getTime()
    );
  }

  private detectAppMode (): void {
    const isApp: boolean = this.$route.query.mode === 'app';

    if (isApp) {
      this.toggleMode(AppMode.APP);
    } else {
      this.toggleMode(AppMode.WEB);
    }
  }

  private detectDeviceType (): void {
    const isDesktop: boolean = window.matchMedia('(min-width: 1024px)').matches;

    if (isDesktop) {
      this.toggleDevice(DeviceType.DESKTOP);
    } else {
      this.toggleDevice(DeviceType.MOBILE);
    }
  }

  private async detectSystemPrefersColorSchema (): Promise<void> {
    const isDarkMode: boolean = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const isLightMode: boolean = window.matchMedia(
      '(prefers-color-scheme: light)'
    ).matches;

    if (isLightMode) {
      this.detectedEgg()
        ? this.toggleTheme(ThemeType.RAINBOW_LIGHT)
        : this.toggleTheme(ThemeType.LIGHT);
    } else if (isDarkMode) {
      this.detectedEgg()
        ? this.toggleTheme(ThemeType.RAINBOW_DARK)
        : this.toggleTheme(ThemeType.DARK);
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
    const isDay: boolean =
      now.getTime() > this.sunrise.getTime() &&
      now.getTime() < this.sunset.getTime();

    let themePrefix: string = '';

    if (isEgg) {
      themePrefix = 'RAINBOW_';
    } else {
      themePrefix = '';
    }

    if (isDay) {
      themePrefix += 'LIGHT';
    } else {
      themePrefix += 'DARK';
    }

    this.toggleTheme(ThemeType[themePrefix as keyof typeof ThemeType]);
  }

  private detectPopupFromLoadURL (): void {
    if (this.$route.query && this.$route.query.popUp) {
      switch (this.$route.query.popUp) {
        case 'submitInfo':
          this.togglePopup(true);
          this.togglePopupContent(this.submitInfo);
          break;
        case 'openSubmit':
          this.togglePopup(true);
          this.togglePopupContent(this.openSubmit);
          break;
        case 'loudly':
          this.togglePopup(true);
          this.togglePopupContent(this.loudly);
          break;
        default: break;
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>

<style lang="scss" scoped>
.nav-bar-height {
  height: 112px;
  @media screen and (max-width: 900px) {
    height: 60px;
  }
}
</style>
