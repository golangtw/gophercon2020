<template>
  <div id="home" class="main-container">
    <a href="/2020/" class="Logo">
      <img src="https://gophercon.golang.tw/2020/img/logo.svg" class="Logo">
    </a>
    <div class="info">
      <div class="badge-container">
        <a href="https://www.papercall.io/gophercon-2020-taiwan" target="_blank" rel="noopener"><div class="text">會議徵稿</div></a>
      </div>
      <div class="badge-container">
        <div class="text">會議門票</div>
      </div>
    </div>
    <div class="spotlight-wrapper">
      <div class="spotlight sharp-back-taton" ref="gopherconTatonMask">
        <h1 class="title has-prefix-icon">
          <span class="inner font-black"></span>
          <span class="inner font-black">活動資訊 Info</span>
        </h1>
        <div class="content"><b>時間：</b>2020/11/14</div>
        <div class="content"><b>地點：</b><div>集思台大會議中心<br/>台北市大安區羅斯福路四段85號B1</div></div>
      </div>
      <div class="spotlight sharp-back-taton" ref="gopherconTatonMask">
        <h1 class="title has-prefix-icon">
          <span class="inner font-black"></span>
          <span class="inner font-black">關於 About</span>
        </h1>
        <p class="content">Gopher Conference Taiwan 自 2020 年發起，由 Golang Taipei 社群舉辦，長期投身推廣 Golang 程式語言與相關技術，希望引領更多軟體從業人員使用 Golang 語言，對 Golang 有興趣的朋友可以一同參與社群。</p>
        <p class="content">GopherCon TW 2020 邀請身為 Golang 使用者的你，向大家分享您的經驗與技術，期待您能在演講桌前，與我們一起 <a href="https://www.papercall.io/gophercon-2020-taiwan" target="_blank" rel="noopener">have fun with golang</a>。</p>
        <p class="content">Gopher Conference Taiwan is a conference held by Golang Taipei User Group since 2020. It's aim is promoting Go language and Go's communities. The event is held with talks, sponsor, and communities booths. Whoever you are a Golang coder, open source promoter, or even a newcomer, we sincerely welcome you to be part of GopherCon TW!</p>
        <p class="content">Call for Papers! We are looking for talks in Golang related areas. Join us and <a href="https://www.papercall.io/gophercon-2020-taiwan" target="_blank" rel="noopener">have fun with golang</a> by sharing your Golang experiences!</p>
      </div>
      <div class="spotlight sharp-back-taton" ref="gopherconTatonMask">
        <h1 class="title has-prefix-icon">
          <span class="inner font-black"></span>
          <span class="inner font-black">活動 Activity</span>
        </h1>
        <p class="content">今年我們有這些活動可以讓大家一起參與：</p>
        <p class="content">
          <ul>
            <li>Booths 攤位活動：<br>攤位的目的是在促進會眾或相關資訊社群交流。多元的活動讓你在聽完議程意猶未盡之餘，更能充分交流！休息時間，別忘記到場外的攤位逛逛！</li>
          </ul>
        </p>
        <p class="content">
          <ul>
            <li>Lightning Talk 閃電秀：<br>閃電秀在所有議程結束後、閉幕前舉辦，是每個演講包含設置投影片僅限五分鐘的刺激活動。如果要報名閃電秀，請在註冊櫃檯的「閃電秀」罐中投入你的講題與姓名，我們會在中午抽出中選名單。</li>
          </ul>
        </p>
      </div>
      <div class="spotlight sharp-back-taton" ref="gopherconTatonMask">
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
      <div class="spotlight sharp-back-taton" ref="gopherconTatonMask">
        <h1 class="title has-prefix-icon">
          <span class="inner font-black"></span>
          <span class="inner font-black">行為準則 Code of Conduct</span>
        </h1>
        <p class="content">參加者不可有騷擾言行，大會不容忍任何的騷擾或歧視，無分國籍、種族、語言、性別、性取向、年齡、身心狀況、信仰、職業、資歷、政治傾向、智力，每一位參加者都應該獲得同樣的尊重。</p>
        <p class="content">彼此欣賞，每位參加者都應該抱持專業的態度與行為，GopherCon 的成員來自不同的專業分工、技術背景與應用領域，任何貶低社群中其它成員的言行都是不適當的。</p>
        <p class="content">體貼他人，任何形式的性暗示，都不適於大會中的任何場合。這些場合包含但不限於演講、開放空間，社群媒體。請避免源自刻板印象的言行。會議中請把手機調為靜音，或是其它不會影響他人的模式。</p>
        <p class="content">研討會籌備團隊有權調整任何違反此準則的行為。僅需根據籌備團隊的裁決，違反準則者可能必須離開會場，並不得要求退費。</p>
        <p class="content">Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import axios from "axios";

import GopherConTatonMask from "@/components/GopherConTatonMask.vue";
// import BulletScreen from '@/components/CFP/BulletScreen.vue';

import { ThemeType } from "../store/types/app";

import head from "@/util/head";

@Component({
  components: {
    // BulletScreen,
    GopherConTatonMask,
  },
})
export default class Home extends Vue {
  @Action("toggleTheme", { namespace: "app" }) private toggleTheme!: (
    theme: ThemeType
  ) => void;
  private gopherconTatonMaskHeight: number = 0;
  private gopherconTatonMaskWidth: number = 0;
  private defineString: string = "";
  private onSend: boolean = false;
  private bulletScreenWidth: number = 0;
  private bulletScreenHeight: number = 0;

  @Watch("$route")
  public onRouteChange() {
    this.continuePlayVideoWhenFocusBack();
  }

  public mounted() {
    head.reset();
    this.measureMaskSize();
    // this.measureBulletScreenSize();
    this.continuePlayVideoWhenFocusBack();
    window.addEventListener("resize", this.measureMaskSize);
    // window.addEventListener('resize', this.measureBulletScreenSize);
  }

  public destroyed() {
    window.removeEventListener("resize", this.measureMaskSize);
    // window.removeEventListener('resize', this.measureBulletScreenSize);
  }

  private measureMaskSize(): void {
    this.gopherconTatonMaskHeight = (this.$refs
      .gopherconTatonMask as Element).clientHeight;
    this.gopherconTatonMaskWidth = (this.$refs
      .gopherconTatonMask as Element).clientWidth;
  }

  private continuePlayVideoWhenFocusBack(): void {
    const videoPlayerDOM = document.getElementById(
      "video-player"
    ) as HTMLMediaElement;
    if (videoPlayerDOM && videoPlayerDOM.paused) {
      videoPlayerDOM.play();
    }
  }

  private toggleSendAnimate(): void {
    this.onSend = true;
    setTimeout(() => {
      this.defineString = "";
      this.onSend = false;
    }, 3000);
  }

  private measureBulletScreenSize(): void {
    const bulletScreen: any = this.$refs.bulletScreen;

    this.bulletScreenWidth = bulletScreen.clientWidth;
    this.bulletScreenHeight = bulletScreen.clientHeight;
  }

  private async sendDefineForm(): Promise<void> {
    if (this.defineString) {
      try {
        // Detect Egg
        if (
          this.defineString.toLowerCase().trim().replace(/ /g, "") ===
          "genderequality"
        ) {
          this.toggleTheme(ThemeType.RAINBOW_DARK);
        }

        const defineString = this.defineString;
        this.toggleSendAnimate();
        await axios.post(
          `https://docs.google.com/forms/d/e/1FAIpQLSf60kH6sRpI_7ctpKi8ptcI7cG2OpvGmW3SjWUGcyiDEekQ4w/formResponse?entry.2121946644=${defineString}`
        );
      } catch (error) {
        // tslint:disable:no-console
        console.error("Google Form POST", error);
        // tslint:enable
      }
    }
  }
}
</script>
