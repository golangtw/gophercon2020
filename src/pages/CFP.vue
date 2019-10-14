<template>
  <div id="cfp" class="main-container">
    <Banner
      :class="{ 'popuped': isPopup }"
    />
    <main class="spotlight-container">
      <div class="spotlight">
        <h1 class="title">
          <span class="sub">About</span>
          <span class="font-bold">關於 SITCON</span>
        </h1>
        <p class="paragraph">SITCON 學生計算機年會係一學生自發組成的研討會，秉持著以學生為主軸的核心價值，藉以凝聚與傳遞學生的力量。希望藉由提供一個經驗交流與資訊技術實務分享的平台，使已有成就者能夠傳承己身經驗，嶄露頭角者在激盪中獲得靈感與啟發，並同時讓初入茅廬者得以對資訊科學有更深入的了解；進而達到「學以致用、教學相長」的目標。</p>
      </div>
      <div class="spotlight">
        <h1 class="title">
          <span class="sub">Call for Sponsor</span>
          <span class="font-bold">贊助徵求</span>
        </h1>
        <p class="paragraph">
          SITCON 的運作，除了眾多努力的志工，也還是少不了金錢的支持。<br>
          如果認同 SITCON 的理念與作為，歡迎加入成為支持 SITCON 運作的一份子！
        </p>
        <p class="paragraph">
          歡迎聯繫 <a href="mailto:contact@sitcon.org" class="font-black">contact@sitcon.org</a>
        </p>
      </div>
    </main>
    <main class="popup-pre-content" ref="popupPreContent">
      <ul class="summary">
        <li><a href="#example">投稿主題範例</a></li>
        <li><a href="#coc">Code of Conduct 行為準則</a></li>
        <li><a href="#session-type">議程種類</a></li>
        <li><a href="#paper-rule">投稿方式</a></li>
        <li><a href="#paper-trail">審稿方式</a></li>
        <li><a href="#notice">投稿注意事項</a></li>
      </ul>
      <h1 id="example" class="title font-black">投稿主題範例</h1>
      <p class="paragraph">
        「新世代的網路挑戰」是 2017 的主題，投稿不一定要以此為主題，但若有與主題關聯之投稿，能夠與之相呼應，我們非常歡迎！<br>
        我們特別期待以學生為主體的投稿，可以是從學生角度出發的經驗分享、技術分享，或是探討學生相關議題等等，不過廣義來說，只要是與資訊技術、電腦相關的講題，都歡迎投稿！<br>
        以下的投稿範例可以提供一些靈感，或是您可以參與投稿者小聚，亦可前往 SITCON 前幾屆的網站（ 2013、2014、 2015、2016、2017）查看過去的議程。
      </p>
      <h2 class="subtitle font-bold">開源貢獻</h2>
      <p class="paragraph">
        經驗分享<br>
        教學<br>
        <br>
        範例：我貢獻XX專案的經歷、如何翻譯自由軟體、如何開始自己的開源專案
      </p>
      <h2 class="subtitle font-bold">技術入門</h2>
      <p class="paragraph">
        網頁<br>
        資訊安全<br>
        作業系統<br>
        其他技術<br>
        網路系統<br>
        <br>
        範例：Bitcoin 簡介
      </p>
      <h2 class="subtitle font-bold">其他</h2>
      <p class="paragraph">
        新觀念、新想法<br>
        成果分享<br>
        <br>
        範例：到底什麼是雲端、自製XX成果
      </p>
      <h2 class="subtitle font-bold">學校經驗</h2>
      <p class="paragraph">
        資訊教育<br>
        參與校務系統開發<br>
        校務系統資訊安全<br>
        程式競賽<br>
        社團經營<br>
        實驗室、專題<br>
        <br>
        範例：高中資訊教育現狀、我參加程式競賽所學到的東西
      </p>
      <h2 class="subtitle font-bold">工作經驗、社群經驗</h2>
      <p class="paragraph">
        打工接案<br>
        社群、活動參與<br>
        實習<br>
        <br>
        範例：如何找實習、如何開公司
      </p>
      <h2 class="subtitle font-bold">進階技術</h2>
      <p class="paragraph">
        我們也歡迎深度技術議程；我們會根據議程的性質為您挑選最適合的演講廳。<br>
        <br>
        範例：Raspberry Pi 電路實作、Functional programming and C++
      </p>
      <h1 id="coc" class="title font-black">Code of Conduct 行為準則</h1>
      <p class="paragraph">
        SITCON 非常歡迎女性、跨性別與多元背景的投稿者。為了讓大家都能愉快的參加 SITCON，我們鼓勵所有參與者閱讀年會的行為守則（Code of Conduct），共同創造一個友善的環境。
      </p>
      <h1 id="session-type" class="title font-black">議程種類</h1>
      <h2 class="subtitle font-bold">Presentation</h2>
      <p class="paragraph">Presentation 會有完整 30 分鐘的議程加上 10 分鐘的問答時間，讓您有充分的時間展示想法以及與會眾互動。</p>
      <h2 class="subtitle font-bold">Espresso</h2>
      <p class="paragraph">Espresso 為包含問答時間僅有 10 分鐘的短講，挑戰講者提供最為濃縮與精華的議程。</p>
      <h1 id="paper-rule" class="title font-black">投稿方式</h1>
      <p class="paragraph">
        稿件均經議程組形式審查，交予該領域之審稿委員審稿；審稿委員由業界人士、學界人士及 SITCON 議程組員組成。
      </p>
      <h2 class="subtitle font-bold">格式</h2>
      <p class="paragraph">Espresso 與 Presentation 的投稿格式相同</p>
      <ul>
        <li>投稿類型：必填，請寫明所欲投稿為 Presentation 或 Espresso。</li>
        <li>題目 Title：必填，20 全形字以下。</li>
        <li>摘要 Abstract：必填，含標點符號 150 ~ 250 全形字，使用於宣傳以及網站。</li>
        <li>演講大綱 Outline：必填，請說明該議程的大綱以及時間長度規劃。</li>
        <li>目標受眾 Target Audience：必填，請說明該演講的目標受眾為怎麼樣的人。</li>
        <li>詳細說明 Description：必填，不限字數，請說明這個議程你認爲重要的相關細節，以利審稿委員更瞭解你的作品。我們強烈建議您詳細填寫此項，以增加入選機率。</li>
        <li>關鍵字 Key Words：選填，請提供幾個與議程直接相關的關鍵字。</li>
        <li>附件 Attachment：選填，可以附上程式碼、投影片草稿或任何你認爲有助於我們瞭解你的議程的附件。</li>
      </ul>
      <h2 class="subtitle font-bold">個人資料</h2>
      <p class="paragraph">請至 Profile 中填寫，以下只列出必填項目</p>
      <ul>
        <li>電子郵件 Email：能讓大會聯絡的電子信箱。</li>
        <li>暱稱／名字 Name：公開於講者海報及網站的稱呼。</li>
        <li>電話號碼 Phone：用於大會聯絡、確認資訊用的電話號碼。</li>
        <li>其他聯絡方式 Anything else we can contact you：其他任何我們能聯絡您的方式。</li>
      </ul>
      <p class="paragraph">一個半形字元計為 0.5 個全形字元，一切投稿相關規定事項以本文件為準。</p>
      <h1 id="paper-trail" class="title font-black">審稿方式</h1>
      <p class="paragraph">審稿委員主要針對以下項目進行篩選：</p>
      <ul>
        <li>稿件內容：包含的知識分享、經驗案例、想法觀點是否獨特等；題目鼓勵與年會主題相關，但不影響評分。</li>
        <li>表達能力：提供的資料是否有條理、文句暢通，提供資料（尤其是稿件的詳細說明）之完整度，我們偏好完整的資料，讓審稿委員更清楚了解演講細節。</li>
        <li>適合聽眾：稿件是否適合 SITCON 大多數的會眾，若經我們評估比較小眾的議程可能會被安排至較小的演講廳。</li>
      </ul>
      <h1 id="notice" class="title font-black">投稿注意事項</h1>
      <ul>
        <li>SITCON 2019 採用 Google Forms 接收投稿。</li>
        <li>同一帳號僅能為一人使用，一人能投多份稿件。</li>
        <li>SITCON 2019 將會有 4 軌議程同時進行。</li>
        <li>上述審稿方式不考慮稿件內容的技術難度，我們仍以稿件是否能夠吸引人、高品質、適合聽眾（即上述篩選方式）為考量。</li>
        <li>為鼓勵投稿，大會提供投稿人一組邀請碼 （一人一組，非一稿一組），可優先報名參與本年會，獲選講者請使用講者身分入場，並可將邀請碼給他人使用。</li>
        <li>在截稿之前，投稿者可以隨時修改已投的稿件。</li>
        <li>SITCON 議程組得經作者同意，轉換 Presentation 或 Espresso 稿件之投稿類型。</li>
        <li>凡稿件經接受者，年會將頒予感謝狀以表彰投稿人之熱情付出與貢獻。</li>
        <li>議程題目跟摘要會放置於官網以及會前發行的電子報中。</li>
      </ul>
      <p class="paragraph">
        若有任何問題或需投稿建議請 Email 至 SITCON 議程組信箱 <a href="mailto:session@sitcon.org" class="font-bold">session@sitcon.org</a>。
      </p>
      <h2 class="subtitle font-bold">錄影以及記錄</h2>
      <p class="paragraph">
        所有議程皆會錄影並以 CC BY 3.0 授權釋出，若不希望被錄影與釋出可以與議程組聯絡。
      </p>
      <p class="paragraph">
        本屆 SITCON 提供入選講者試講及彩排的機會。試講除了讓大會工作人員先行對議程內容、演講習慣有初步了解外，也可以讓講者熟悉現場流程、找出能讓簡報更生動精采的模式。彩排則讓講者熟悉現場設備環境、攝影機位置，並且測試 Live Demo 情境。希望講者能夠共同參與試講及彩排，一起使年會議程品質更臻完美。
      </p>
      <h2 class="subtitle font-bold">試講</h2>
      <p class="paragraph">
        試講讓講者在演講前有練習的機會，比照年會時間安排供講者講完整場演講，並有議程組人員提供建議（如簡報、台風等），講者可以自由參加，自行選擇最接近的場次，入選後將由議程組與您協調精確時間。
      </p>
      <p class="paragraph">
        所有場次將依報名情況舉辦，並提供投影機、音響、簡報筆、倒數計時器等設備。預計舉辦北部、中部、南部、東部場等，時間約為二月份或三月初，地點另行通知。
      </p>
      <p class="paragraph">
        補助：依照客運價格標準補助講者至最近試講場地的全額或部分車馬費。
      </p>
      <h2 class="subtitle font-bold">彩排</h2>
      <ul>
        <li>日期：2019/3/23（六）。</li>
        <li>場地：使用場地與正式年會相同，細節將於稿件錄取後通知。</li>
        <li>時間：一人約 5～10 分鐘，如有 Live Demo 或是特殊需求，可提前與議程組安排時間。</li>
        <li>流程：講者可以嘗試操作設備，測試 Live Demo 連結及切換方式，也可以演練部分簡報內容。</li>
        <li>提供設備：與年會當天場地的設備相同，有麥克風、倒數計時器、簡報筆等。</li>
      </ul>
      <h2 class="subtitle font-bold">注意</h2>
      <ul>
        <li>除非內容明顯偏離講題或不符事實，我們不會要求講者對演講內容進行修正。</li>
        <li>為了維護所有講者的權利，試講時間恕不接受更改，請各位講者者準時參與。</li>
      </ul>
    </main>
    <Popup
      :isOpen="isPopup"
      :content="popupContent"
    />
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import Banner from '@/components/Banner.vue';
import Footer from '@/components/Footer.vue';
import Popup from '@/components/Popup.vue';

const namespace: string = 'app';

@Component({
  components: {
    Banner,
    Footer,
    Popup
  }
})
export default class CFP extends Vue {
  @Getter('isPopup', { namespace }) private isPopup: any;

  private popupContent: string = '';

  public mounted () {
    const title = document.querySelector('head>title');
    const metaList = Array.from(document.querySelectorAll('head>meta'));

    if (title) {
      title.innerHTML = 'Call for Paper｜稿件徵求中！ — SITCON 2020';
    }

    metaList[3].setAttribute('content', 'Call for Paper｜稿件徵求中！ — SITCON 2020');
    metaList[5].setAttribute('content', 'https://sitcon.org/2020/cfp/');
    metaList[6].setAttribute('content', 'https://sitcon.org/2020/img/cfp-og.png');

    const popupPre = this.$refs.popupPreContent as Element;

    this.popupContent = popupPre.innerHTML;
  }
}
</script>
