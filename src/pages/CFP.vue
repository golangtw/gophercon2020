<template>
  <div id="cfp" class="main-container">
    <Banner/>
    <main class="spotlight-container">
      <div class="spotlight">
        <h1>關於</h1>
        <p>COSCUP 是由台灣開放原始碼社群聯合推動的年度研討會，起源於 2006 年，是台灣自由軟體運動 (FOSSM) 重要的推動者之一。活動包括有講座、攤位、社團同樂會等，除了邀請國際的重量級演講者之外，台灣本土的自由軟體推動者也經常在此發表演說，會議的發起人、工作人員與講者都是志願參與的志工。COSCUP 的宗旨在於提供一個聯結開放原始碼開發者、使用者與推廣者的平台。希望藉由每年一度的研討會，來推動自由及開放原始碼軟體 (FLOSS)。由於有許多贊助商及熱心捐助者，所有議程都是免費參加，但因會場人數限制，通常在一開放網路報名後就會立刻額滿。</p>
        <p>開放原始碼 (Open source) 是在 1998 年出現的名詞，大家早已耳熟能詳。這種在網路上已經進行二、三十年的軟體開發模式之所以能成功，有許多原因。其中一個極為關鍵的因素，就是開發者與使用者的直接接觸。無屏障的交流加速了問題的回報和修補機制，而當這個機制被網路效應放大到極限時，Linus 定律就出現了：「臭蟲難逃眾人法眼」(With enough eyeballs, all bugs are shallow)，軟體品質因此顯著提昇。在開放原始碼的模式中，開發者和使用者中間的人不再是銷售員或客服，而是讓軟體更容易被接受的推廣者 (Promoters)，他們打包套件讓軟體更好裝、寫說明文件讓軟體更易學、辦推廣活動讓更多人接觸到好軟體、在網路上回答問題解決使用者的疑惑，而且不會把開發者藏在背後產生資訊的不對稱。</p>
        <p>開發者 (Coders)、使用者 (Users) 和推廣者 (Promoters) 是讓自由及開放原始碼軟體發光發熱的三大支柱，這個研討會就是專為這三種人舉辦的：你可以是 A 軟體的開發者、B 軟體的推廣者、C 軟體的使用者，不論你是已經踏入自由及開放原始碼軟體領域，還是一直站在門口不知如何入門，歡迎你來參加 COSCUP — Conference for Open Source Coders, Users and Promoters!</p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';

@Component({
  components: {
    Banner
  }
})
export default class CFP extends Vue {
  public mounted () {
    const title = document.querySelector('head>title');
    const metaList = Array.from(document.querySelectorAll('head>meta'));

    if (title) {
      title.innerHTML = 'Call of Paper｜徵稿開催 — COSCUP 2019 來台講';
    }

    metaList[3].setAttribute('content', 'Call of Paper｜徵稿開催 — COSCUP 2019 來台講');
    metaList[5].setAttribute('content', 'https://coscup.org/taigi2019/cfp/');
    metaList[6].setAttribute('content', 'https://coscup.org/taigi2019/img/cfp-og.png');
  }
}
</script>
