<template>
  <div id="sponsor">
    <div class="card-container individual-sponsor">
      <div class="card">
        <h3>我們歡迎個人贊助</h3>
        <p>SITCON 學生計算機年會為學生自發組成籌辦的研討會，秉持著以學生為主軸的核心價值，提供一個經驗交流與資訊技術實務分享的平台，進而達到「學以致用、教學相長」的目標。</p>
        <p>
          維繫這樣的交流平台，需要多人的努力及貢獻，亦十分需要在資金上的支持。
          <br />希望能藉由您的一份力量，來促成活動的舉行，讓更多學生能在舞台上展現自我成長。
          <br />歡迎您參與贊助，支持 SITCON、讓我們將每年的活動辦得盡善盡美！
        </p>
        <p class="give-me-money">
          <a
            href="https://bit.ly/donatesitcon2020"
            class="tons-trans give-me-money"
            target="_blank"
            rel="noopener"
          >個人贊助辦法</a>
        </p>
        <p class="give-me-money">
          企業贊助亦歡迎來信
          <a
            href="mailto:contact@sitcon.org"
            target="_blank"
            rel="noopener"
            class="give-me-money"
          >contact@sitcon.org</a>
        </p>
      </div>
    </div>
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
            <a :href="`${sponsor.url}`" target="_blank" rel="noopener">
              <img :alt="sponsor.name" :src="sponsor.image" />
            </a>
          </div>
          <div class="text-container">
            <h3>{{ sponsor.name }}</h3>
            <p>{{ sponsor.description.length > 60 && !sponsor.readmore ? `${sponsor.description.substr(0, 60)}...` : sponsor.description }}</p>
            <p v-show="sponsor.description.length > 60 && !sponsor.readmore" class="readmore">
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
@import "@/assets/scss/team";
$mid-screen: 1440px; // Threshold of two-card-per-column layout

p,
a,
div {
  font-size: 13pt;
  @media screen and (max-width: 450px) {
    font-size: 10pt;
  }
}

a.give-me-money {
  text-decoration: underline;
}

p:not(:last-child) {
  margin-bottom: 1.5em;
}

.individual-sponsor {
  display: block;
  .card {
    width: 100%;
  }
  p {
    display: block;
    width: 100%;
  }
  p.give-me-money {
    text-align: center;
  }
}

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
    box-sizing: border-box;
    padding: 24px;
    border-radius: 2em;
    border: 8px solid black;

    img {
      height: 180px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

// Layout for host (i.e. SITCON)
.host-container {
  .host {
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: center;
    margin-right: 0;
    border-radius: 18px;

    img {
      margin-right: 1em;
    }

    .text-container {
      width: 0;
      flex-grow: 1;
    }
  }
}

// Layout for organizations other than the host (i.e. sponsor)
.org-container {
  box-sizing: border-box;
  font-size: 12pt;

  .org {
    min-height: calc((100vw - 500px - 66.5px) * 1.414 / 3);
    align-items: center;

    img {
      margin-bottom: 1em;
    }

    // Three cards per row
    @media screen and (min-width: $mid-screen + 1) {
      width: 31.33%;
      &:not(:nth-child(3n)) {
        margin-right: 3%;
      }
      &:nth-last-child(-n + 3) {
        margin-bottom: 0;
      }
    }

    @media screen and (max-width: $mid-screen) and (min-width: $mobile + 1) {
      width: 48.5%;
      &:nth-child(odd) {
        margin-right: 3%;
      }
      &:nth-last-child(-n + 2) {
        margin-bottom: 0;
      }
    }

    @media screen and (max-width: $mobile) {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 2em;
      }
    }
  }
}

// Mobile layout of cards
@media screen and (max-width: $mobile) {
  .card-container {
    display: flex;
    flex-direction: column;
    .card {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-width: 5px;
      padding: 16px;
      // 1 : sqrt(2)
      min-height: initial;
      height: initial;
      @media screen and (max-width: 480px) {
        min-height: calc((100vw - 32px - 78px) * 1.414);
      }
      .text-container {
        width: 100%;
      }
      img {
        height: 33vw;
        max-height: 180px;
        margin: 0 0 1em 0;
      }
    }
  }
}

// Text style and size of cards
.card-container {
  .text-container {
    width: 100%;
  }
  h3 {
    // Daddy's name
    font-size: 1.5em;
    margin-bottom: 1em;
    font-weight: bold;
    line-height: 1.5em;
    width: 100%;
    text-align: start;

    @media screen and (max-width: $mobile) {
      font-size: 1.25em;
    }
  }
  p {
    // Daddy's info
    word-wrap: break-word;
    line-height: 1.5em;
    text-align: start;
    width: 100%;
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