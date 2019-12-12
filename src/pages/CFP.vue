<template>
  <div id="cfp" class="main-container">
    <Banner :class="{ 'popuped': isPopup }"/>
    <main
      class="spotlight-container"
      :class="{ 'popuped': isPopup }"
    >
      <div class="spotlight">
        <h1 class="title">
          <span class="sub">About</span>
          <span class="font-black">關於 SITCON</span>
        </h1>
        <p class="paragraph">學生計算機年會（SITCON）自 2013 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。</p>
        <p class="paragraph">二十一世紀已經過了五分之一，今年，我們期待帶著豐沛熱情的你，能和我們一起在 2020 年這麼一個「承先啟後」的年份，綜觀不同領域發展與事件脈絡，自主學習感興趣之專長與技術，彼此分享、相濡以沫。在 SITCON 2020 裡，願所有與會者皆能拓展視野，鍛鍊與發展自我，找到向前邁步的勇氣與目標。相信身為學生的我們，也將能重新定義自我、定義未來！</p>
        <p class="paragraph">SITCON 2020 邀請身為學生的你，向大家分享您的經驗與技術，期待您能在演講桌前，與我們一起 #define student。</p>
      </div>
      <div
        id="call-for-define"
        class="spotlight"
        ref="bulletScreen"
        :class="{ 'on-send': onSend }"
      >
        <BulletScreen
          class="sketch-box"
          :class="{ 'on-send': onSend }"
          :msg="defineString"
          :width="bulletScreenWidth"
          :height="bulletScreenHeight"
          :active="onSend"
          :quality="defineString.replace(/[^\x00-\xff]/g, 'xx').length > 10 ? 25 : 50"
        />
        <h1 class="title">
          <span class="sub">Call for #define</span>
          <span class="font-black">#define student</span>
        </h1>
        <p class="paragraph">
          今年 SITCON 以 #define student 作為 slogan，希望能夠重新定義學生的價值，<br>
		  同時我們也想知道有什麼大家想瞭解的議題或重新定義的事物。<br>
        </p>
        <p class="paragraph">
          不論是你期望在 SITCON 見到的議題、認同的字彙、想要大家知道的技術，<br>
		  歡迎來和大家分享你的看法，一起 define anything。
        </p>
        <div class="input-box">
          <label for="define"><span class="font-black">#define</span></label>
          <input
            v-model="defineString"
            type="text"
            name="define"
            placeholder="student"
            class="font-black"
            maxlength="30"
            @keypress.enter="sendDefineForm"
          >
          <span
            class="icon"
            @click="sendDefineForm"
          >
            <font-awesome-icon :icon="['far', 'paper-plane']" />
          </span>
        </div>
      </div>
      <div id="sponsor" class="spotlight">
        <h1 class="title">
          <span class="sub">Call for Sponsor</span>
          <span class="font-black">贊助徵求</span>
        </h1>
        <p class="paragraph">
          SITCON 的舉辦，除了有賴眾多志工的努力，也需要金錢的支持。<br>
          如果您認同 SITCON 的理念，歡迎以行動支持 SITCON 的運作，讓更多交流產生！
        </p>
        <p class="paragraph">
          <a href="http://bit.ly/donatesitcon2020" class="font-bold" target="_blank" rel="noopener noreferrer">個人贊助方案</a>
        </p>
        <p class="paragraph">
          企業合作歡迎聯繫 <a href="mailto:contact@sitcon.org" class="font-black">contact@sitcon.org</a>
        </p>
      </div>
    </main>
    <Popup
      :isOpen="isPopup"
      :content="popupContent"
    />
    <Footer/>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import Banner from '@/components/CFP/Banner.vue';
import BulletScreen from '@/components/CFP/BulletScreen.vue';
import Footer from '@/components/CFP/Footer.vue';
import Popup from '@/components/Popup.vue';

const namespace: string = 'app';

@Component({
  components: {
    Banner,
    BulletScreen,
    Footer,
    Popup
  }
})
export default class CFP extends Vue {
  @Action('toggleTheme', { namespace }) private toggleTheme: any;
  @Getter('isPopup', { namespace }) private isPopup: any;
  @Getter('popupContent', { namespace }) private popupContent: any;

  private defineString: string = '';
  private onSend: boolean = false;
  private bulletScreenWidth: number = 0;
  private bulletScreenHeight: number = 0;

  public mounted () {
    const title = document.querySelector('head>title');
    const metaList = Array.from(document.querySelectorAll('head>meta'));

    if (title) {
      title.innerHTML = 'Call for Paper｜稿件徵求中！ — SITCON 2020';
    }

    metaList[3].setAttribute('content', 'Call for Paper｜稿件徵求中！ — SITCON 2020');
    metaList[4].setAttribute('content', 'SITCON 2020 邀請身為學生的你，向大家分享您的經驗與技術，期待您能在演講桌前，與我們一起 #define student。');
    metaList[5].setAttribute('content', 'https://sitcon.org/2020/cfp/');
    metaList[6].setAttribute('content', 'https://sitcon.org/2020/img/cfp-og.png');

    this.measureBulletScreenSize();
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
          this.toggleTheme('RAINBOW-DARK');
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
}
</script>

<style lang="scss">
@import '../assets/scss/CFP/main.scss';
</style>
