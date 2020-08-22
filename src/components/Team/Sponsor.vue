<template>
  <div id="sponsor">
    <div class="sponsor-container">
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
      <div
        v-for="level in Object.keys(sponsorList)"
        :key="`sponsor-level-${level}`"
        class="sponsor-wrapper"
      >
        <h2 class="level font-bold">{{ sponsorLevelText[level] }}</h2>
        <div :class="`card-container ${level === 'holder' ? 'host-container' : 'org-container'}`">
          <div
            v-for="sponsor in sponsorList[level]"
            :key="sponsor.slug"
            :class="[
              `card ${level === 'holder' ? 'host' : 'org'}`,
              sponsorList[level].length === 1 ? 'horizen': ''
            ]"
          >
            <div class="img-container">
              <a :href="`${sponsor.url}`" target="_blank" rel="noopener">
                <img :alt="sponsor.name" :src="`https://gophercon.golang.tw/2020/img/sponsors/${sponsor.image}`" width="262"/>
              </a>
            </div>
            <div class="text-container">
              <h3>{{ sponsor.name }}</h3>
              <p
                v-if="sponsor.description"
                v-html="markdownParser(sponsor.description)"
              ></p>
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

interface SponsorData {
  name: string;
  slug: string;
  image: string;
  description: string;
  url?: string;
  readmore: boolean;
}

@Component
export default class Sponsor extends Vue {
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
    this.sponsorList = _.groupBy(sponsorData, 'level');
  }

  private markdownParser (rawContent: string): string {
    return markdown.toHTML(rawContent);
  }
}
</script>
