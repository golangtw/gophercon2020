<template>
  <section class="sponsor-container" id="sponsor">
    <a 
      v-for="sponsor in sponsors"
      :key="`sponsor-${sponsor.slug}`"
      :href="`#${sponsor.slug}`"
      target="_blank"
      rel="noopener"
    >
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
  align-items: center;

  width: 100%;
  box-sizing: border-box;
  padding: 80px 140px;
  @media screen and (max-width: 1280px) {
    padding: 4em 2em;
  }
  @media screen and (max-width: 900px) {
    padding: 4em 1em;
  }

  a {
    img {
      max-width: 320px;
      @media screen and (max-width: 1280px) {
        max-width: 210px;
      }
      @media screen and (max-width: 900px) {
        max-width: 25vw;
      }
    }
  }
}
</style>