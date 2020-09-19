<template>
  <div id="sponsor">
    <div class="sponsor-container">
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
