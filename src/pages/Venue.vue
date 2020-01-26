<template>
  <div id="venue" class="main-container">
    <main class="venue-container">
      <div>
        <h1 class="bold">活動地圖</h1>
        <ActivityBar :items="items" />
        <p>上面這個 bar 的 mobile layout 不知怎麼弄 owo</p>
        <!-- 2020 的 svg 下載不了，先用 2019 代替 -->
        <img src="@/../public/img/venue-3f.svg" alt="3樓場地平面圖" />
        <img src="@/../public/img/venue-4f.svg" alt="4樓場地平面圖" />
        <p>2020 的 svg 下載不了，先用 2019 代替</p>
        <p>venue 的 mobile layout 參考 desktop 嗎0.0</p>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/CFP/Banner.vue';
import Footer from '@/components/CFP/Footer.vue';
import ActivityBar from '@/components/venue/ActivityBar.vue';

const testData = (() => {
  let c = 0 as number;
  return () => {    return {
      icon: {
        url: 'https://userpic.codeforces.com/1149973/avatar/131d7e20bf5b72d.jpg',
        alt: '白羊豪可愛 >///<'
      },
      text: '文字測試',
      id: ++c
    };
  };
})();


@Component({
  components: {
    Banner,
    Footer,
    ActivityBar
  }
})
export default class extends Vue {
  private data () {
    const testItems = [];
    for (let i = 0; i < 6; i++) { testItems.push(testData()); }
    return { items: testItems };
  }
}
</script>

<style scoped>
.venue-container {
  padding: 16px 150px;
}

h1,
p {
  text-align: center;
  padding: 1em;
}

h1 {
  font-size: 48px;
}

img {
  max-width: 100%;
  margin: 5% 4% 5% 10%;
}
</style>