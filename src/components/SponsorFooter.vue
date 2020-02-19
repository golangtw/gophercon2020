<template>
  <section id="sponsor" class="sponsor-footer-container">
    <div 
      v-for="sponsor in sponsors"
      :key="`sponsor-${sponsor.slug}`"
      :id="sponsor.slug"
      class="sponsor"
      target="_blank"
      rel="noopener"
    >
      <a :href="`${sponsor.url}`" target="_blank" rel="noopener">
        <img :alt="sponsor.name" :src="sponsor.image" />
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import sponsorData from '@/../public/json/sponsor.json';

@Component
export default class SponsorFooter extends Vue {
  private sponsors: any = {};

  public mounted () {
    this.getSponsor();
  }

  private getSponsor (): void {
    this.sponsors = sponsorData
      .filter((sponsor) => sponsor.level !== 'media' && sponsor.level !== 'thank')
      .map((sponsor) => {
        return {
          ...sponsor,
          image: `https://golang.tw/2020/img/sponsors/${sponsor.image}`
        };
      });
  }
}
</script>
