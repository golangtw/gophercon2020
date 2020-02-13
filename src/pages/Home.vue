<template>
  <div id="home" class="main-container">
    <div class="background-video">
      <video id="video-player" class="video-container" autoplay="autoplay" loop="true" muted="true" playsInine playsinline>
        <source class="video" src="https://sitcon.org/2020/video/bg-h264.mp4" type="video/mp4">
      </video>
    </div>
    <header class="header">
      <div class="inner-container">
        <h1 class="title font-black">SITCON 2020</h1>
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
          <a href="https://sitcon.kktix.cc/events/sitcon2020" target="_blank" rel="noopener">
            <span>免費報名</span>
          </a>
          <a href="https://bit.ly/donatesitcon2020" target="_blank" rel="noopener">
            <span>贊助取票</span>
          </a>
        </p>
      </div>
    </div>
    <div class="spotlight-container">
      <SitconTatonMask :width="sitconTatonMaskWidth" :height="sitconTatonMaskHeight"/>
      <div class="spotlight sharp-back-taton sitcon-back-taton" ref="sitconTatonMask">
        <div class="sitcon placeholder">
          <img src="@/../public/img/icons/SITCON-taton-cliped.svg" alt="">
        </div>
        <h1 class="title has-prefix-icon">
          <img class="prefix-icon" src="@/assets/images/sharp-white.svg" />
          <span class="inner font-black">什麼是 SITCON</span>
          <span class="inner font-black">About SITCON</span>
        </h1>
        <p class="content">
          學生計算機年會（Students’ Information Technology Conference）自 2013 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
        </p>
        <p class="content">二十一世紀已經過了五分之一，今年，我們期待帶著豐沛熱情的你，能和我們一起在 2020 年這麼一個「承先啟後」的年份，綜觀不同領域發展與事件脈絡，自主學習感興趣之專長與技術，彼此分享、相濡以沫。在 SITCON 2020 裡，願所有與會者皆能拓展視野，鍛鍊與發展自我，找到向前邁步的勇氣與目標。相信身為學生的我們，也將能重新定義自我、定義未來！</p>
        <p class="content">SITCON 2020 邀請身為學生的你，向大家分享您的經驗與技術，期待您能在演講桌前，與我們一起 <a href="https://sitcon.org/2020/cfp#call-for-define" target="_blank" rel="noopener">#define stuent</a>。</p>
      </div>
      <div class="spotlight sharp-back-taton">
        <h1 class="title has-prefix-icon">
          <img class="prefix-icon" src="@/assets/images/sharp-white.svg" />
          <span class="inner font-black">行為準則</span>
          <span class="inner font-black">Code of Conduct</span>
        </h1>
        <p class="content">
          SITCON 冀望打造屬於學生自己的舞台，而我們也致力於為社群中的每位成員提供更友善、開放的環境。我們相信每位參與社群活動的夥伴都值得被尊重，而我們會盡力提供最安全的環境，讓參與 SITCON 盛會的每位朋友能夠認識個體間的差異、在社群中相互扶助、並鼓勵每個人揮灑屬於自己生命的色彩。<br/>
          因此，若有幸能在 SITCON 社群與您見面，無論您是以會眾、贊助商、工作人員、或是講者的身份參加活動，我們都希望您遵守以下的行為準則：

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

          為了確保每位參與者的安全，我們將恪守以上規則。違反行為準則的參與者，我們將採取必要且合理的手段予以介入，包含但不限於將參與者請離現場、自相關名冊除名或列為不受歡迎對象，或在必要時移送警察機關法辦。若您或他人遇到了以上情況、或是有任何其他顧慮，都請立即尋求 SITCON 工作人員的協助。 我們誠摯的邀請來到 SITCON 的朋友一同履行以上承諾，將 SITCON 打造為更友善、更溫暖的所在；讓每一位參與者，都能在社群的交流中共同成長、在人與人的互動中找到自信——而這正是我們所珍惜的、屬於學生社群的真正精神。
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

import SitconTatonMask from '@/components/SitconTatonMask.vue';

import head from '@/util/head';

@Component({
  components: {
    SitconTatonMask
  }
})
export default class Home extends Vue {
  private sitconTatonMaskHeight: number = 0;
  private sitconTatonMaskWidth: number = 0;

  @Watch('$route')
  public onRouteChange () {
    this.continuePlayVideoWhenFocusBack();
  }

  public mounted () {
    head.reset();
    this.measureMaskSize();
    window.addEventListener('resize', this.measureMaskSize);
    this.continuePlayVideoWhenFocusBack();
  }

  public destroyed () {
    window.removeEventListener('resize', this.measureMaskSize);
  }

  private measureMaskSize (): void {
    this.sitconTatonMaskHeight = (this.$refs.sitconTatonMask as Element).clientHeight;
    this.sitconTatonMaskWidth = (this.$refs.sitconTatonMask as Element).clientWidth;
  }


  private continuePlayVideoWhenFocusBack (): void {
    const videoPlayerDOM = document.getElementById('video-player') as HTMLMediaElement;
    if (videoPlayerDOM && videoPlayerDOM.paused) {
      videoPlayerDOM.play();
    }
  }
}
</script>
