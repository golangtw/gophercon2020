<template>
  <div id="sponsor">
    <div class="card-container individual-sponsor">
      <div class="card">
        <h2>我們歡迎個人贊助</h2>
        <p>SITCON 學生計算機年會為學生自發組成籌辦的研討會，秉持著以學生為主軸的核心價值，提供一個經驗交流與資訊技術實務分享的平台，進而達到「學以致用、教學相長」的目標。</p>
        <p>
          維繫這樣的交流平台，需要多人的努力及貢獻，亦十分需要在資金上的支持。
          <br />希望能藉由您的一份力量，來促成活動的舉行，讓更多學生能在舞台上展現自我成長。
          <br />歡迎您參與贊助，支持 SITCON、讓我們將每年的活動辦得盡善盡美！
        </p>
        <p class="give-me-money">
          <a
            href="https://bit.ly/donatesitcon2020"
            target="_blank"
            rel="noopener"
          >個人贊助辦法</a>
        </p>
        <p class="give-me-money">
          企業贊助亦歡迎來信
          <a href="mailto:contact@sitcon.org">contact@sitcon.org</a>
        </p>
      </div>
    </div>
    <div
      v-for="entry in 0"
      :key="`sponsor-level-${entry[0]}`"
      class="sponsor-container"
    >
      <h2 class="level">{{ sponsorLevelText[entry[0]] }}</h2>
      <div :class="`card-container ${entry[0] === 'holder' ? 'host-container' : 'org-container'}`">
        <div
          v-for="sponsor in entry[1]"
          :key="sponsor.slug"
          :class="`card ${entry[0] === 'holder' ? 'host' : 'org'}`"
        >
          <div class="img-container">
            <a :href="`${sponsor.url}`" target="_blank" rel="noopener">
              <img :alt="sponsor.name" :src="sponsor.image" />
            </a>
          </div>
          <div class="text-container">
            <h3>{{ sponsor.name }}</h3>
            <p>{{ showReadmoreButton(sponsor) ? `${sponsor.description.substr(0, 60)}...` : sponsor.description }}</p>
            <p v-show="showReadmoreButton(sponsor)" class="readmore">
              <a @click="clickReadmore">Read more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

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

interface SponsorList {
  [level: string]: SponsorData[];
}

@Component
export default class Sponsor extends Vue {}
</script>
