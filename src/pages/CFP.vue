<template>
  <div
    id="cfp"
    class="main-container"
  >
    <Banner/>
    <main class="spotlight-container">
      <div class="spotlight">
        <h1 class="title">
          <span class="sub">About</span>
          <span class="font-black">關於 GopherCon</span>
        </h1>
        <p class="paragraph">Gopher Conference 自 2020 年發起，由 Golang Taipei 社群舉辦，長期投身推廣 Golang 程式語言與相關技術，希望引領更多軟體工程從業人員使用 Golang 語言，對 Golang 有興趣的朋友可以一同參與社群。</p>
        <p class="paragraph">GopherCon TW 2020 邀請身為 Golang 使用者的你，向大家分享您的經驗與技術，期待您能在演講桌前，與我們一起 have fun with golang。</p>
        <p class="content">Gopher Conference is a conference held by Golang Taipei User Group since 2020. Its aim is to promote Go language and Go's communities. The event is held with talks, sponsors, and community booths. Whoever you are a Golang coder, open-source promoter, or even a newcomer, we sincerely welcome you to be part of GopherCon!</>
        <p class="content">Call for Papers! We are looking for talks in Golang related areas. Join us and <a href="https://gophercon.golang.tw/2020/cfp#call-for-paper" target="_blank" rel="noopener">have fun with Golang</a> by sharing your Golang experiences!</p>
      </div>
        <div id="sponsor" class="spotlight">
        <h1 class="title">
          <span class="sub">Call for Sponsor</span>
          <span class="font-black">贊助徵求</span>
        </h1>
        <p class="paragraph">
          GopherCon 的舉辦，除了有賴眾多志工的努力，也需要金錢的支持。<br>
          如果您認同 GopherCon 的理念，歡迎以行動支持 GopherCon 的運作，讓更多交流產生！
          請支持我們的贊助夥伴。
        </p>
        <p class="paragraph">
          <a href="http://bit.ly/donategophercon2020" class="font-bold" target="_blank" rel="noopener noreferrer">個人贊助方案</a>
        </p>
        <p class="paragraph">
          企業合作歡迎聯繫 <a href="mailto:contact@golang.tw" class="font-black">contact@golang.tw</a>
        </p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import Banner from '@/components/CFP/Banner.vue';
// import BulletScreen from '@/components/CFP/BulletScreen.vue';

import { ThemeType } from '@/store/types/app';

import head from '@/util/head';

@Component({
  components: {
    Banner
    // BulletScreen
  }
})
export default class CFP extends Vue {
  @Action('toggleTheme', { namespace: 'app' }) private toggleTheme!: (theme: ThemeType) => void;
  @Getter('isPopup', { namespace: 'app' }) private isPopup!: boolean;

  private defineString: string = '';
  private onSend: boolean = false;
  private bulletScreenWidth: number = 0;
  private bulletScreenHeight: number = 0;

  @Watch('isPopup')
  public onChangePopup (newVal: boolean) {
    if (!newVal) { this.setMeta(); }
  }

  public mounted () {
    this.setMeta();
    // this.measureBulletScreenSize();
    // window.addEventListener('resize', this.measureBulletScreenSize);
  }

  public destroyed () {
    // window.removeEventListener('resize', this.measureBulletScreenSize);
  }

  private toggleSendAnimate (): void {
    this.onSend = true;
    setTimeout(() => {
      this.defineString = '';
      this.onSend = false;
    }, 3000);
  }

  private measureBulletScreenSize (): void {
    const bulletScreen: any = this.$refs.bulletScreen;

    this.bulletScreenWidth = bulletScreen.clientWidth;
    this.bulletScreenHeight = bulletScreen.clientHeight;
  }

  private async sendDefineForm (): Promise<void> {
    if (this.defineString) {
      try {
        // Detect Egg
        if (this.defineString.toLowerCase().trim().replace(/ /g, '') === 'genderequality') {
          this.toggleTheme(ThemeType.RAINBOW_DARK);
        }

        const defineString = this.defineString;
        this.toggleSendAnimate();
        await axios.post(`https://docs.google.com/forms/d/e/1FAIpQLSf60kH6sRpI_7ctpKi8ptcI7cG2OpvGmW3SjWUGcyiDEekQ4w/formResponse?entry.2121946644=${defineString}`);
      } catch (error) {
        // tslint:disable:no-console
        console.error('Google Form POST', error);
        // tslint:enable
      }
    }
  }

  private setMeta (): void {
    head.title('Call for Paper｜稿件徵求中！');
    head.ogTitle('Call for Paper｜稿件徵求中！');
    head.ogDescription('GopherCon TW 2020 邀請身為 Golang 使用者的你，向大家分享您的經驗與技術，期待您能在演講桌前，與我們一起 have fun with golang。');
    head.ogUrl('https://www.papercall.io/gophercon-2020-taiwan');
    head.ogImage('https://gophercon.golang.tw/2020/img/cfp-og.png');
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/CFP/main.scss';
</style>
