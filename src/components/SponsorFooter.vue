<template>
  <section
    id="sponsor"
    class="sponsor-footer-container"
    :class="{ 'popuped': isPopup }"
  >
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
import { Getter } from 'vuex-class';

import sponsorData from '@/../public/json/sponsor.json';

@Component
export default class SponsorFooter extends Vue {
  @Getter('isPopup', { namespace: 'app' }) private isPopup!: boolean;

  private sponsors: any = {};

  public mounted () {
    this.getSponsor();
  }

  private getSponsor (): void {
    this.sponsors = sponsorData.map((data) => {
      return {
        ...data,
        image: `https://sitcon.org/2020/img/sponsors/${data.image}`
      };
    });
  }
}
</script>
