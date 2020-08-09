<template>
  <div id="home" class="main-container">
    <a href="/2020/" class="Logo">
      <img src="https://gophercon.golang.tw/2020/img/logo.svg" class="Logo">
    </a>
    <div class="background-image">
      <img src="https://gophercon.golang.tw/2020/img/group-9.png"
       srcset="https://gophercon.golang.tw/2020/img/group-9@2x.png 2x,https://gophercon.golang.tw/2020/img/group-9@3x.png 3x"
       class="Group-9">
    </div>
    <div class="info">
        <div class="badge-container">
          <div class="text">贊助取票</div>
        </div>
        <div class="badge-container">
          <div class="text">會議徵稿</div>
        </div>
    </div>
    <div class="spotlight-container">
      <div class="spotlight sharp-back-taton" ref="gopherconTatonMask">
        <h1 class="title has-prefix-icon">
          <span class="inner font-black"></span>
          <span class="inner font-black">關於 About</span>
        </h1>
        <p class="content">Gopher Conference Taiwan 自 2020 年發起，由 Golang Taipei 社群舉辦，長期投身推廣 Golang 程式語言與相關技術，希望引領更多軟體從業人員使用 Golang 語言，對 Golang 有興趣的朋友可以一同參與社群。</p>
        <p class="content">GopherCon TW 2020 邀請身為 Golang 使用者的你，向大家分享您的經驗與技術，期待您能在演講桌前，與我們一起 <a href="https://gophercon.golang.tw/2020/cfp#call-for-golang" target="_blank" rel="noopener">have fun with golang</a>。</p>
        <p class="content">Gopher Conference Taiwan is a conference held by Golang Taipei User Group since 2020. It's aim is promoting Go language and Go's communities. The event is held with talks, sponsor, and communities booths. Whoever you are a Golang coder, open source promoter, or even a newcomer, we sincerely welcome you to be part of GopherCon TW!</p>
        <p class="content">Call for Papers! We are looking for talks in Golang related areas. Join us and <a href="https://gophercon.golang.tw/2020/cfp#call-for-paper" target="_blank" rel="noopener">have fun with golang</a> by sharing your Golang experiences!</p>
    </div>
      <div class="spotlight sharp-back-taton">
        <h1 class="title has-prefix-icon">
          <span class="inner font-black"></span>
          <span class="inner font-black">活動 Activity</span>
        </h1>
        <p class="content">
          今年我們有這些活動可以讓大家一起參與：</br>
          This years, we also have some activities to be involved:
          <ul>
            <li>
              <span>
                Community Booths 攤位活動：<br>
                社群攤位的目的是在促進會眾或相關資訊社群交流。多元的活動讓你在聽完議程意猶未盡之餘，更能充分交流！休息時間，別忘記到場外的攤位逛逛！
              </span>
            </li>
            <li>
              <span>
                Lightning Talk 閃電秀：<br>
                Lightning Talk，中文譯為「閃電秀」，又稱 data blitz（資料閃電戰），顧名思義即為「閃電一般短的演講」。包含準備與連接投影機的時間在內，每位講者僅有 3 分鐘的時間。講者必須以飛快的速度，進行簡潔扼要的分享。要是沒能在 3 分鐘結束，會被直接切斷投影機訊號！無論是對台上的講者，或是台下的聽眾，都是十分刺激又轟動全場的體驗唷！Lightning Talk 將會在年會當天早上 10 點於白板區開放報名，先搶先贏，並在所有議程結束後、閉幕前，在國際會議廳進行演講。
              </span>
            </li>
          </ul>
        </p>
      </div>
      <div class="spotlight sharp-back-taton">
        <h1 class="title has-prefix-icon">
          <span class="inner font-black"></span>
          <span class="inner font-black">Q &amp; A</span>
        </h1>
        <p class="content">
          <ul>
            <li>
              <span>
                Q1.　什麼樣的人適合參與 GopherCon TW ？<br>
                A1.　Gopher Conference Taiwan 致力於 Golang 的推廣，無論是已經身在資訊領域，或是還沒踏進資訊領域的學生，只要想一窺資訊世界，都適合來參與！
              </span>
            </li>
            <li>
              <span>
                Q2.　若有其他問題應該如何詢問？<br>
                A2.　有任何問題都歡迎寄信至 <a href="mailto:contact@golang.tw">contact@golang.tw</a> 喔！
              </span>
            </li>
          </ul>
        </p>
      </div>
      <div class="spotlight sharp-back-taton">
        <h1 class="title has-prefix-icon">
          <span class="inner font-black"></span>
          <span class="inner font-black">行為準則</span>
        </h1>
        <p class="content">
          GopherCon TW 致力於為社群中的每位成員提供更友善、開放的環境。我們相信每位參與社群活動的夥伴都值得被尊重，而我們會盡力提供最安全的環境，讓參與 GopherCon TW 盛會的每位朋友能夠認識個體間的差異、在社群中相互扶助、並鼓勵每個人揮灑屬於自己生命的色彩。<br/>
          因此，若有幸能在 GopherCon TW 社群與您見面，無論您是以會眾、贊助商、工作人員、或是講者的身份參加活動，我們都希望您遵守以下的行為準則：

          <ul>
            <li><span>尊重每一位參與者，將對方的感受放在心上</span></li>
            <li><span>避免使用帶有侮辱、歧視、或具有潛在騷擾意涵的言語及手勢</span></li>
            <li><span>多關心周遭的社群夥伴，適度詢問對方是否需要協助</span></li>
            <li><span>當遭遇危險、或發現事情不對勁時，適時尋求工作人員的支援與協助</span></li>
            <li><span>在年會裡多交朋友，珍惜彼此相聚的時光！</span></li>
          </ul>

          以下的行為是不被社群所容忍的：

          <ul>
            <li><span>針對性別、性向、種族、外貌、宗教、年齡、身體狀況或個人身份的挑釁或冒犯</span></li>
            <li><span>任何形式的性騷擾、言語及肢體霸凌</span></li>
            <li><span>公開發表、展示或放映含有侮辱、歧視、仇恨、暴力、或是性暗示的言論、影像、或錄影</span></li>
            <li><span>無故干擾議程或活動的正常進行，無視工作人員或會眾的制止</span></li>
            <li><span>干擾、攻擊會場網路，未經同意側錄封包或散佈隱私資訊</span></li>
            <li><span>違反法律的行為</span></li>
          </ul>

          為了確保每位參與者的安全，我們將恪守以上規則。違反行為準則的參與者，我們將採取必要且合理的手段予以介入，包含但不限於將參與者請離現場、自相關名冊除名或列為不受歡迎對象，或在必要時移送警察機關法辦。若您或他人遇到了以上情況、或是有任何其他顧慮，都請立即尋求 GopherCon TW 工作人員的協助。 我們誠摯的邀請來到 GopherCon TW 的朋友一同履行以上承諾，將 GopherCon TW 打造為更友善、更溫暖的所在；讓每一位參與者，都能在社群的交流中共同成長、在人與人的互動中找到自信——而這正是我們所珍惜的、屬於開放社群的真正精神。
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import axios from 'axios';

import GopherConTatonMask from '@/components/GopherConTatonMask.vue';
// import BulletScreen from '@/components/CFP/BulletScreen.vue';

import { ThemeType } from '../store/types/app';

import head from '@/util/head';

@Component({
  components: {
    // BulletScreen,
    GopherConTatonMask
  }
})
export default class Home extends Vue {
  @Action('toggleTheme', { namespace: 'app' }) private toggleTheme!: (theme: ThemeType) => void;
  private gopherconTatonMaskHeight: number = 0;
  private gopherconTatonMaskWidth: number = 0;
  private defineString: string = '';
  private onSend: boolean = false;
  private bulletScreenWidth: number = 0;
  private bulletScreenHeight: number = 0;

  @Watch('$route')
  public onRouteChange () {
    this.continuePlayVideoWhenFocusBack();
  }

  public mounted () {
    head.reset();
    this.measureMaskSize();
    // this.measureBulletScreenSize();
    this.continuePlayVideoWhenFocusBack();
    window.addEventListener('resize', this.measureMaskSize);
    // window.addEventListener('resize', this.measureBulletScreenSize);
  }

  public destroyed () {
    window.removeEventListener('resize', this.measureMaskSize);
    // window.removeEventListener('resize', this.measureBulletScreenSize);
  }

  private measureMaskSize (): void {
    this.gopherconTatonMaskHeight = (this.$refs.gopherconTatonMask as Element).clientHeight;
    this.gopherconTatonMaskWidth = (this.$refs.gopherconTatonMask as Element).clientWidth;
  }

  private continuePlayVideoWhenFocusBack (): void {
    const videoPlayerDOM = document.getElementById('video-player') as HTMLMediaElement;
    if (videoPlayerDOM && videoPlayerDOM.paused) {
      videoPlayerDOM.play();
    }
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
}
</script>
