<template>
  <div id="sponsor" class="container">
    <LogoTop />
    <div class="background-image">
      <div class="image-wrapper">
        <img
          src="https://gophercon.golang.tw/2020/img/subpage-bg.png"
          srcset="https://gophercon.golang.tw/2020/img/subpage-bg@2x.png 2x, https://gophercon.golang.tw/2020/img/subpage-bg@3x.png 3x"
          class="Group-9"
        />
        <img
          src="https://gophercon.golang.tw/2020/img/graphic-sponsor-1.png"
          srcset="https://gophercon.golang.tw/2020/img/graphic-sponsor-1@2x.png 2x, https://gophercon.golang.tw/2020/img/graphic-sponsor-1@3x.png 3x"
          class="sponsor-1"
        />
        <img
          src="https://gophercon.golang.tw/2020/img/graphic-sponsor-2.png"
          srcset="https://gophercon.golang.tw/2020/img/graphic-sponsor-2@2x.png 2x, https://gophercon.golang.tw/2020/img/graphic-sponsor-2@3x.png 3x"
          class="sponsor-2"
        />
      </div>
    </div>
    <div class="content">
      <div class="card-container individual-sponsor">
        <div class="card">
          <h2 class="font-black subtitle">我們歡迎個人贊助</h2>
          <p
            class="paragraph"
          >Gopher Conference 為 Golang Taipei 自發組成籌辦的研討會，秉持著以社群成員為主軸的核心價值，提供一個經驗交流與資訊技術實務分享的平台。</p>
          <p class="paragraph">
            維繫這樣的交流平台，需要多人的努力及貢獻，亦十分需要在資金上的支持。
            <br />希望能藉由您的一份力量，來促成活動的舉行，讓更多 Golang 使用者能在舞台上展現自我成長。
            <br />歡迎您參與贊助，支持 GopherCon、讓我們將每年的活動辦得盡善盡美！
          </p>
          <p class="paragraph">
            <a
              href="https://bit.ly/donategophercon2020"
              target="_blank"
              rel="noopener"
              class="font-bold"
            >個人贊助辦法</a>
          </p>
          <p class="paragraph">
            企業贊助亦歡迎來信
            <a class="font-bold" href="mailto:contact@golang.tw">contact@golang.tw</a>
          </p>
        </div>
      </div>
      <div class="sponsor-wrapper">
        <div v-for="order in sponsorOrderText" :key="order" class="sponsor-card">
          <h2 class="sponsor-level">
            <span class="sponsor-text">{{ sponsorLevelText[order] }}</span>
          </h2>
          <div class="sponsor-card">
            <div
              class="sponsor-card-content"
              style="display: flex; justify-content: flex-start; align-items: center;"
            >
              <div
                v-for="sponsor in filterSponsor(order)"
                :key="sponsor.slug"
                v-on:click="handleClick(order, sponsor)"
                class="sponsor-img-container"
              >
                <img
                  :alt="sponsor.name"
                  :src="`https://gophercon.golang.tw/2020/img/sponsors/${sponsor.image}`"
                  style="margin-right: 4px;"
                />
              </div>
            </div>
          </div>
          <div
            :id="`${order}`"
            class="sponsor-card-content"
            style="background-color: #f0f2f4;padding: 16px;"
          >
            <a :href="state.url" target="_blank" rel="noopener">
              <span>{{ state.name }}</span>
            </a>
            <div class="sponsor-text-container layout-flex-md-50">
              <p class="sponsor-text">{{ state.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import _ from 'lodash';
import { markdown } from 'markdown';

import { DeviceType } from '@/store/types/app';

import sponsorData from '@/../public/json/sponsor.json';

import LogoTop from '../components/LogoTop.vue';
import Sponsor from '../components/Team/Sponsor.vue';

interface SponsorData {
  name: string;
  slug: string;
  image: string;
  description: string;
  url?: string;
  readmore: boolean;
}
import { Route } from 'vue-router';

@Component({
  components: {
    LogoTop,
    Sponsor
  }
})
export default class SponsorPage extends Vue {
  private sponsorOrderText = [
    'level-1',
    'level-2',
    'level-3',
    'co-organizer',
    'thank',
  ];

  private sponsorLevelText = {
    holder: '主辦單位',
    'co-holder': '共同主辦',
    'co-organizer': '協辦單位',
    'level-1': '鑽石級',
    'level-2': '金級',
    'level-3': '銀級',
    thank: '特別感謝',
    media: '媒體夥伴'
  };

  private sponsorList: object = {};

  private state: SponsorData = {
    name: '',
    slug: '',
    image: '',
    description: '',
    readmore: false,
  };

  public mounted() {
    this.processSponsor();
  }

  private processSponsor(): void {
    this.sponsorList = sponsorData;
  }

  private markdownParser(rawContent: string): string {
    return markdown.toHTML(rawContent);
  }

  private filterSponsor(level: string): any {
    return sponsorData.filter(sponsor => sponsor.level === level);
  }

  private handleClick(order: string, sponsor: any): void {
    this.sponsorOrderText.forEach(text => {
      const element = document.querySelector<HTMLDivElement>(`#${text}`);
      console.log(element, text, order, sponsor);
      if (element && text !== order) {
        element.style.display = 'none';
      } else if (element && text === order) {
        element.style.display = 'block';
        this.state = sponsor;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/variables.scss';

$logo-margin-bottom: 20px;

#sponsor {
  min-width: 375px;
  width: 100%;

  @include for-size(xs) {
    padding-top: calc(
      #{$navbar-height-mobile} + 36px + 84px + #{$logo-margin-bottom}
    );
  }
  @include for-size(sm) {
    padding-top: calc(
      #{$navbar-height-mobile} + 36px + 100px + #{$logo-margin-bottom}
    );
  }
  @include for-size(md) {
    padding-top: calc(
      #{$navbar-height-mobile} + 36px + 153px + #{$logo-margin-bottom}
    );
  }
  @include for-size(lg) {
    padding-top: calc(#{$navbar-height} + 28px + 153px + 20px);
  }
  @include for-size(xl) {
    padding-top: calc(#{$navbar-height} - 32px + 153px + 20px);
  }

  .background-image {
    position: fixed;
    background-color: #fff;
    height: calc(100vw / 16 * 9);
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 0;
    transform-origin: 0 0;
    margin-top: $navbar-height-mobile;
    z-index: -10;

    @include for-size(lg) {
      margin-top: $navbar-height;
    }

    .image-wrapper {
      position: relative;
    }

    .Group-9 {
      &-container {
        position: relative;
        width: 100%;
        height: 100%;
      }

      width: 100%;
      height: auto;
    }

    .sponsor-1 {
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .sponsor-2 {
      position: absolute;
      left: 5%;
      bottom: 45%;
    }
  }

  .content {
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 40px;

    @include for-size(md) {
      width: 688px;
    }
    @include for-size(lg) {
      width: 716px;
    }
    @include for-size(xl) {
      width: 716px;
    }
  }
}

.card-container.individual-sponsor {
  font-family: SourceHanSansTW;
  margin-bottom: 40px;

  @include for-size(xs) {
    padding: 0 16px;
  }
  @include for-size(sm) {
    padding: 0 16px;
  }
  @include for-size(md) {
    padding: 0 68px;
  }
  @include for-size(lg) {
    padding: 0 82px;
  }
  @include for-size(xl) {
    padding: 0 82px;
  }

  h2.subtitle {
    margin-bottom: 24px;
    text-align: center;
    font-size: 24px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #44484f;
  }

  p {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #343942;
  }
}

.sponsor-wrapper {
  background-color: #f7f8f9;
  padding-top: 40px;
  padding-bottom: 40px;

  @include for-size(xs) {
    margin-left: 16px;
    margin-right: 16px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @include for-size(sm) {
    margin-left: 16px;
    margin-right: 16px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @include for-size(md) {
    margin-left: 40px;
    margin-right: 40px;
    padding-left: 68px;
    padding-right: 68px;
  }
  @include for-size(lg) {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 82px;
    padding-right: 82px;
  }
  @include for-size(xl) {
    padding-left: 82px;
    padding-right: 82px;
  }

  .sponsor-card {
    margin-top: 16px;
  }

  .sponsor-card-content {
    display: none;
  }

  h2.sponsor-name {
    margin-bottom: 24px;
  }

  span {
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #7bd6eb;
    &.sponsor-level {
      font-size: 14px;
    }
  }

  .sponsor-img-container {
    cursor: pointer;
    img {
      width: 100px;
      max-width: 100px;
    }
  }

  p.sponsor-text {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #333943;
  }
}
</style>
