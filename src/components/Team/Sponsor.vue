<template>
  <div id="sponsor">
    <div
      v-for="entry in Object.entries(sponsorList)"
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
            <img :alt="sponsor.name" :src="sponsor.image" @click="clickSponsor(sponsor)" />
          </div>
          <div class="text-container">
            <h3>{{ sponsor.name }}</h3>
            <p>{{ sponsor.description.length > 100 && !sponsor.readmore ? `${sponsor.description.substr(0, 100)}...` : sponsor.description }}</p>
            <p v-show="sponsor.description.length > 100 && !sponsor.readmore" class="readmore">
              <a @click="sponsor.readmore = true">Read more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
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
export default class Sponsor extends Vue {
  public sponsorLevelText = {
    'holder': '主辦單位',
    'co-holder': '共同主辦',
    'co-organizer': '協辦單位',
    'level-1': '深耕級',
    'level-2': '前瞻級',
    'level-3': '新芽級',
    'thank': '特別感謝'
  };

  public sponsorList: SponsorList = {};

  public clickSponsor (sponsor: SponsorData) {
    if (!sponsor.url) {
      return;
    }
    window.open(sponsor.url);
  }

  public created () {
    const sponsorList: SponsorList = {};
    sponsorData.forEach((data) => {
      const { name, slug, image, level, description, url } = data;
      if (!sponsorList[data.level]) {
        sponsorList[data.level] = [];
      }
      sponsorList[data.level].push({
        name,
        slug,
        image: require(`@/assets/images/sponsors/${image}`),
        description,
        url,
        readmore: false
      });
    });
    this.sponsorList = sponsorList;
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/team';

// Common layout for host and all sponsors
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;

  .card {
    display: flex;
    flex-direction: column;
    width: 29%;
    padding: 24px;
    box-sizing: border-box;
    margin-right: 6.5%;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  .img-container {
    // icon
    width: 100%;
    min-height: 180px;
    margin-bottom: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      max-width: 100%;
      &:hover {
        cursor: pointer;
      }
    }
  }
}

// Layout for host (i.e. SITCON)
.host-container {
  width: 100%;
  margin-bottom: 5em;

  .host {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
    justify-content: flex-start;
    margin-right: 0;
    border-radius: 18px;
    border: 6px solid black;

    .img-container {
      width: 29%;
      // min-height: 200px;
      margin-right: 6.5%;
      margin-bottom: 0;
    }

    .text-container {
      width: 0%;
      flex-grow: 1;
    }
  }
}

// Layout for organizations other than the host (i.e. sponsor)
.org-container {
  margin-bottom: 3em;
  box-sizing: border-box;

  .org {
    border: 6px solid black;
    border-radius: 18px;
    margin-bottom: 2em;
    min-height: 540px;
  }

  @media screen and (max-width: 1536px) {
    .card {
      margin-right: 6%;
      width: 47%;
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
}

// Mobile layout for host/organization container and cards
@media screen and (max-width: $mobile) {
  .host-container,
  .org-container {
    display: block;

    .card {
      display: block;
      width: 100%;
      min-height: 50vw;
      border-width: 2px;
      padding: 1em;

      .img-container {
        width: 50%;
        float: right;
        min-height: 33vw;
        margin: 0;
      }
      .text-container {
        width: 100%;
      }
    }
  }
}

// Text style and size of cards
.card-container {
  h3 {
    // Daddy's name
    font-size: 1.5em;
    margin-bottom: 1em;
    font-weight: bold;
    line-height: 1.66em;
  }
  p {
    // Daddy's info
    font-size: 1.35em;
    word-wrap: break-word;
    line-height: 1.66em;
  }

  @media screen and (max-width: $mobile) {
    h3,
    p {
      font-size: 1.25em;
      line-height: 1.5em;
    }
  }

  @media screen and (max-width: 768px) {
    h3,
    p {
      font-size: 1em;
      line-height: 1.5em;
    }
  }
}

// Style of the read-more text
.readmore {
  margin-top: 0.5em;
  margin-bottom: 0;
  text-align: end;

  a {
    color: $tone;
    cursor: pointer;

    &:hover {
      color: $light-tone;
    }
  }
}
</style>