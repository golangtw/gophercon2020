<template>
  <section class="sponsor-container" id="sponsor">
    <a v-for="sponsor in sponsors" :key="`sponsor-${sponsor.slug}`" :href="`#${sponsor.slug}`">
      <img :alt="sponsor.name" :src="sponsor.image" />
    </a>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import sponsorData from '@/../public/json/sponsor.json';

@Component
export default class Sponsor extends Vue {
  get sponsors () {
    return sponsorData.map((data) => {
      const { name, slug, image } = data;
      return {
        name,
        slug,
        image: require(`@/assets/images/sponsors/${image}`)
      };
    });
  }
}
</script>

<style lang="scss" scoped>
.sponsor-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  
  width: 100%;
  box-sizing: border-box;
  padding: 80px 140px;
  @media screen and (max-width: 900px) {
    padding: 1em;
  }

  img {
    max-height: 160px;

    @media screen and (max-width: 900px) {
      max-height: 54px;
    }
  }
}
</style>