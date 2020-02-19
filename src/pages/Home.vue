<template>
  <div id="home" class="main-container">
    <div class="background-video">
      <video id="video-player" class="video-container" autoplay="autoplay" loop="true" muted="true" playsInine playsinline>
        <source class="video" src="https://golang.tw/2020/video/bg-h264.mp4" type="video/mp4">
      </video>
    </div>
    <header class="header">
      <div class="inner-container">
        <h1 class="title font-black">GopherCon 2020</h1>
        <h2 class="subtitle font-black">學生計算機年會</h2>
        <h3 class="keywords font-black">#define student</h3>
      </div>
    </header>
    <div class="info">
      <div class="left-container">
        <div>
          <div>
            <p class="date font-bold">3/28</p>
            <p class="location font-bold">中央研究院 — 人文社會科學館</p>
          </div>
        </div>
      </div>
      <div class="right-container">
        <p class="kktix">
          <a href="https://gophercon.kktix.cc/events/gophercon2020" target="_blank" rel="noopener">
            <span>免費報名</span>
          </a>
          <a href="https://bit.ly/donategophercon2020" target="_blank" rel="noopener">
            <span>贊助取票</span>
          </a>
        </p>
      </div>
    </div>
    <div class="spotlight-container">
      <GopherConTatonMask :width="gopherconTatonMaskWidth" :height="gopherconTatonMaskHeight"/>
      <div class="spotlight sharp-back-taton gophercon-back-taton" ref="gopherconTatonMask">
        <div class="gophercon placeholder">
          <img src="@/../public/img/icons/GopherCon-taton-cliped.svg" alt="">
        </div>
        <h1 class="title has-prefix-icon">
          <img class="prefix-icon" src="@/assets/images/sharp-white.svg" />
          <span class="inner font-black">什麼是 GopherCon</span>
          <span class="inner font-black">About GopherCon</span>
        </h1>
        <p class="content">學生計算機年會（Students’ Information Technology Conference）自 2013 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。</p>
        <p class="content">二十一世紀已經過了五分之一，今年，我們期待帶著豐沛熱情的你，能和我們一起在 2020 年這麼一個「承先啟後」的年份，綜觀不同領域發展與事件脈絡，自主學習感興趣之專長與技術，彼此分享、相濡以沫。在 GopherCon 2020 裡，願所有與會者皆能拓展視野，鍛鍊與發展自我，找到向前邁步的勇氣與目標。相信身為學生的我們，也將能重新定義自我、定義未來！</p>
        <p class="content">GopherCon 2020 邀請身為學生的你，向大家分享您的經驗與技術，期待您能在演講桌前，與我們一起 <a href="https://golang.tw/2020/cfp#call-for-define" target="_blank" rel="noopener">#define stuent</a>。</p>
      </div>
      <div
        id="call-for-define"
        :class="{ 'on-send': onSend }"
        class="spotlight sharp-back-taton"
        ref="bulletScreen"
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
        <h1 class="title has-prefix-icon">
          <img class="prefix-icon" src="@/assets/images/sharp-white.svg" />
          <span class="inner font-black">Call for #define</span>
          <span class="inner font-black">#define student</span>
        </h1>
        <p class="content">今年 GopherCon 以 #define student 作為 slogan，希望能夠重新定義學生的價值。同時我們也想知道有什麼大家想瞭解的議題或重新定義的事物，不論是你期望在 GopherCon 見到的議題、認同的字彙、想要大家知道的技術，歡迎來和大家分享你的看法，一起 define anything。</p>
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
      <div class="spotlight sharp-back-taton">
        <h1 class="title has-prefix-icon">
          <img class="prefix-icon" src="@/assets/images/sharp-white.svg" />
          <span class="inner font-black">活動</span>
          <span class="inner font-black">Activity</span>
        </h1>
        <p class="content">
          延續過去有的雙向交流，今年我們有這些活動可以讓大家一起參與：

          <ul>
            <li>
              <span>
                天使計畫：<br>
                天使計劃是一個提供會眾們交流機會的活動，在主辦方隨機配對後，讓有經驗的天使帶領初心者，協助他們瞭解這個年會。而這次也會繼續沿用去年的改變：依照天使的意願，除了天使與初心者一對一的交流，也會有一位天使帶兩位初心者的情況，讓兩位初心者能互相認識。
              </span>
            </li>
            <li>
              <span>
                大會導遊團：<br>
                第一次參加 Conference 嗎？第一次來到 GopherCon 嗎？是個怕生的人嗎？?到了現場人山人海，不知道從何逛起？不管你是哪種，我們聽見你的聲音了。<br>
                為了照顧第一次參與 Conference 的你，我們舉辦了 GopherCon 導遊團，由走訪總召、幹部、講者、攤位，帶您一步步了解 GopherCon 的各個面向、運作模式，並認識學生計算機年會的核心概念！
              </span>
            </li>
            <li>
              <span>
                攤位活動：<br>
                社群攤位的目的是在促進會眾跟學生社團或相關資訊社群交流。多元的活動讓你在聽完議程意猶未盡之餘，更能充分交流！休息時間，別忘記到場外的攤位逛逛！
              </span>
            </li>
            <li>
              <span>
                Lightning Talk 閃電秀：<br>
                Lightning Talk，中文譯為「閃電秀」，又稱 data blitz（資料閃電戰），顧名思義即為「閃電一般短的演講」。包含準備與連接投影機的時間在內，每位講者僅有 3 分鐘的時間。講者必須以飛快的速度，進行簡潔扼要的分享。要是沒能在 3 分鐘結束，會被直接切斷投影機訊號！無論是對台上的講者，或是台下的聽眾，都是十分刺激又轟動全場的體驗唷！Lightning Talk 將會在年會當天早上 10 點於白板區開放報名，先搶先贏，並在所有議程結束後、閉幕前，在國際會議廳進行演講。
              </span>
            </li>
          </ul>

          今年我們也新增了特別活動：

          <ul>
            <li>
              <span>
                開放式議程：<br>
                開放式議程跳脫過往講者對聽眾這種單向的資訊傳遞，期待藉由主講者與與會者的雙向交流，碰撞出更多的觀點與討論。在開放式議程，你可以參與一個圓桌會議，一起腦力激盪，甚至參與一場競賽！任何你想得到的非傳統議程形式都有機會在開放式議程中進行。
              </span>
            </li>
          </ul>
        </p>
      </div>
      <div class="spotlight sharp-back-taton">
        <h1 class="title has-prefix-icon">
          <img class="prefix-icon" src="@/assets/images/sharp-white.svg" />
          <span class="inner font-black">問答</span>
          <span class="inner font-black">Q &amp; A</span>
        </h1>
        <p class="content">
          <ul>
            <li>
              <span>
                Q1.　什麼樣的人適合參與年會？<br>
                A1.　Gopher Conference致力於資訊的推廣，無論是已經身在資訊領域，抑或是還沒踏進資訊領域的學生，只要有想一窺資訊世界的心都適合來參與！
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
          <img class="prefix-icon" src="@/assets/images/sharp-white.svg" />
          <span class="inner font-black">行為準則</span>
          <span class="inner font-black">Code of Conduct</span>
        </h1>
        <p class="content">
          GopherCon 冀望打造屬於學生自己的舞台，而我們也致力於為社群中的每位成員提供更友善、開放的環境。我們相信每位參與社群活動的夥伴都值得被尊重，而我們會盡力提供最安全的環境，讓參與 GopherCon 盛會的每位朋友能夠認識個體間的差異、在社群中相互扶助、並鼓勵每個人揮灑屬於自己生命的色彩。<br/>
          因此，若有幸能在 GopherCon 社群與您見面，無論您是以會眾、贊助商、工作人員、或是講者的身份參加活動，我們都希望您遵守以下的行為準則：

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

          為了確保每位參與者的安全，我們將恪守以上規則。違反行為準則的參與者，我們將採取必要且合理的手段予以介入，包含但不限於將參與者請離現場、自相關名冊除名或列為不受歡迎對象，或在必要時移送警察機關法辦。若您或他人遇到了以上情況、或是有任何其他顧慮，都請立即尋求 GopherCon 工作人員的協助。 我們誠摯的邀請來到 GopherCon 的朋友一同履行以上承諾，將 GopherCon 打造為更友善、更溫暖的所在；讓每一位參與者，都能在社群的交流中共同成長、在人與人的互動中找到自信——而這正是我們所珍惜的、屬於學生社群的真正精神。
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
import BulletScreen from '@/components/CFP/BulletScreen.vue';

import { ThemeType } from '../store/types/app';

import head from '@/util/head';

@Component({
  components: {
    BulletScreen,
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
    this.measureBulletScreenSize();
    this.continuePlayVideoWhenFocusBack();
    window.addEventListener('resize', this.measureMaskSize);
    window.addEventListener('resize', this.measureBulletScreenSize);
  }

  public destroyed () {
    window.removeEventListener('resize', this.measureMaskSize);
    window.removeEventListener('resize', this.measureBulletScreenSize);
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
