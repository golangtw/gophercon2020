<template>
  <div id="cfp" class="main-container">
    <Banner/>
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
      title.innerHTML = 'Call for Paper｜稿件徵求中！ — SITCON 2020';
    }

    metaList[3].setAttribute('content', 'Call for Paper｜稿件徵求中！ — SITCON 2020');
    metaList[5].setAttribute('content', 'https://sitcon.org/2020/cfp/');
    metaList[6].setAttribute('content', 'https://sitcon.org/2020/img/cfp-og.png');
  }
}
</script>
