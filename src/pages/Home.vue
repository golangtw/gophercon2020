<template>
  <div id="home" class="main-container">
    <header class="header">
      <h1 class="title font-black">SITCON 2020</h1>
      <h2 class="subtitle font-black">學生計算機年會</h2>
      <p class="date font-bold">3/28</p>
      <p class="location font-bold">中央研究院 — 人文社會科學館</p>
    </header>
    <div class="spotlight-container">
      <div class="spotlight">
        <h1 class="title">
          <span>什麼是 SITCON</span>
          <span>About Students’ Information Technology Conference</span>
        </h1>
        <p class="content">
          SITCON 學生計算機年會是一個由各校同學於網路串聯發起，鼓勵自發學習、切磋成長的學生社群。從 2013 年以來，籌備團隊便致力於連結對資訊相關領域有興趣的學生，
          在每年三月的年會分享彼此所學；各地參與者也透過定期聚、夏令營等不同面向的活動，推廣創新、教學相長、以及開源貢獻的社群理念與精神。
        </p>
      </div>
      <div class="spotlight">
        <h1 class="title">
          <span>行為準則</span>
          <span>Code of Conduct</span>
        </h1>
        <p class="content">
          SITCON 冀望打造屬於學生自己的舞台，而我們也致力於為社群中的每位成員提供更友善、開放的環境。我們相信每位參與社群活動的夥伴都值得被尊重，而我們會盡力提供最安全的環境，讓參與 SITCON 盛會的每位朋友能夠認識個體間的差異、在社群中相互扶助、並鼓勵每個人揮灑屬於自己生命的色彩。<br/>
          因此，若有幸能在 SITCON 社群與您見面，無論您是以會眾、贊助商、工作人員、或是講者的身份參加活動，我們都希望您遵守以下的行為準則：
          
          <ul>
            <li>尊重每一位參與者，將對方的感受放在心上。</li>
            <li>避免使用帶有侮辱、歧視、或具有潛在騷擾意涵的言語及手勢。</li>
            <li>多關心周遭的社群夥伴，適度詢問對方是否需要協助。</li>
            <li>當遭遇危險、或發現事情不對勁時，適時尋求工作人員的支援與協助。</li>
            <li>在年會裡多交朋友，珍惜彼此相聚的時光！</li>
          </ul>

          以下的行為是不被社群所容忍的：

          <ul>
            <li>針對性別、性向、種族、外貌、宗教、年齡、身體狀況或個人身份的挑釁或冒犯。</li>
            <li>任何形式的性騷擾、言語及肢體霸凌。</li>
            <li>公開發表、展示或放映含有侮辱、歧視、仇恨、暴力、或是性暗示的言論、影像、或錄影。</li>
            <li>無故干擾議程或活動的正常進行，無視工作人員或會眾的制止。</li>
            <li>干擾、攻擊會場網路，未經同意側錄封包或散佈隱私資訊。</li>
            <li>違反法律的行為。</li>
          </ul>
          
          為了確保每位參與者的安全，我們將恪守以上規則。違反行為準則的參與者，我們將採取必要且合理的手段予以介入，包含但不限於將參與者請離現場、自相關名冊除名或列為不受歡迎對象，或在必要時移送警察機關法辦。若您或他人遇到了以上情況、或是有任何其他顧慮，都請立即尋求 SITCON 工作人員的協助。 我們誠摯的邀請來到 SITCON 的朋友一同履行以上承諾，將 SITCON 打造為更友善、更溫暖的所在；讓每一位參與者，都能在社群的交流中共同成長、在人與人的互動中找到自信——而這正是我們所珍惜的、屬於學生社群的真正精神。
        </p>
      </div>
      <div class="spotlight">
        <h1 class="title">
          <span>活動</span>
          <span>Activities</span>
        </h1>
        <p class="content">
          SITCON 冀望打造屬於學生自己的舞台，而我們也致力於為社群中的每位成員提供更友善、開放的環境。我們相信每位參與社群活動的夥伴都值得被尊重，而我們會盡力提供最安全的環境，讓參與 SITCON 盛會的每位朋友能夠認識個體間的差異、在社群中相互扶助、並鼓勵每個人揮灑屬於自己生命的色彩。<br/>
          因此，若有幸能在 SITCON 社群與您見面，無論您是以會眾、贊助商、工作人員、或是講者的身份參加活動，我們都希望您遵守以下的行為準則：
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import head from '@/util/head';

@Component
export default class Home extends Vue {
  public mounted () {
    head.reset();
  }
}
</script>
