<template>
  <div id="sponsor" class="container">
    <LogoTop />
    <div class="content">
      <div class="card-container individual-sponsor">
        <div class="card">
          <h2 class="font-black subtitle">我們歡迎個人贊助</h2>
          <p class="paragraph">Gopher Conference 為 Golang Taipei 自發組成籌辦的研討會，秉持著以社群成員為主軸的核心價值，提供一個經驗交流與資訊技術實務分享的平台。</p>
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
        <div
          v-for="sponsor in sponsorList"
          :key="sponsor.slug"
          class="sponsor-card"
        >
          <h2 class="sponsor-name">
            <span class="sponsor-level">{{ sponsorLevelText[sponsor.level] }}</span><br/>
            <span>{{ sponsor.name }}</span>
           </h2>
          <div class="sponsor-card-content layout-flex-md">
            <div class="sponsor-img-container layout-flex-md-50">
              <a :href="`${sponsor.url}`" target="_blank" rel="noopener">
                <img :alt="sponsor.name" :src="`https://gophercon.golang.tw/2020/img/sponsors/${sponsor.image}`" />
              </a>
            </div>
            <div class="sponsor-text-container layout-flex-md-50"
                v-if="sponsor.description">
                <p class="sponsor-text">{{ sponsor.description }}</p>
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
  },
})
export default class SponsorPage extends Vue {
  private sponsorLevelText = {
    'holder': '主辦單位',
    'co-holder': '共同主辦',
    'co-organizer': '協辦單位',
    'level-1': '鑽石級',
    'level-2': '金級',
    'level-3': '銀級',
    'thank': '特別感謝',
    'media': '媒體夥伴'
  };

  private sponsorList: object = {};

  public mounted () {
    this.processSponsor();
  }

  private processSponsor (): void {
    this.sponsorList = sponsorData;
  }

  private markdownParser (rawContent: string): string {
    return markdown.toHTML(rawContent);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';

#sponsor {
  min-width: 375px;
  width: 100%;

  @include for-size(xs) {
    padding-top: 159px;
  }
  @include for-size(sm) {
    padding-top: 165px;
  }
  @include for-size(md) {
    padding-top: 165px;
  }
  @include for-size(lg) {
    padding-top: 165px;
  }
  @include for-size(xl) {
    padding-top: 216px;
  }

  background-image: url('~@/assets/images/subpage-bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

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

  > .sponsor-card:not(:last-child) {
    margin-bottom: 40px;
  }

  h2.sponsor-name {
    margin-bottom: 24px;

    span {
      font-size: 24px;
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
  }

  .sponsor-img-container {
    padding-right: 24px;
    margin-bottom: 24px;

    img {
      width: 100%;
      max-width: 100%;
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
