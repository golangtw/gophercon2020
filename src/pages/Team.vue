<template>
  <div class="team-container main-container">
    <div class="sitcon-group">
      <p>SITCON團隊</p>
    </div>
    <div class="tab-container card-container">
      <div class="tab card toggle">
        <p>
          <span>贊助</span>
          <span>Sponsor</span>
        </p>
      </div>
      <div class="tab card">
        <p>
          <span>工作人員</span>
          <span>Staff</span>
        </p>
      </div>
      <div class="tab card">
        <p>
          <span>來參加的你！</span>
          <span>You!</span>
        </p>
      </div>
    </div>
    <div v-for="entry in Object.entries(sponsorList)" :key="`sponsor-level-${entry[0]}`" class="sponsor-container">
      <h2 class="level">{{ sponsorLevelText[entry[0]] }}</h2>
      <div class="card-container org-container">
        <div v-for="sponsor in entry[1]" :key="sponsor.slug" class="card org" @click="clickSponsor(sponsor)">
          <img :alt="sponsor.name" :src="sponsor.image" />
          <h3>{{ sponsor.name }}</h3>
          <p>{{ sponsor.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import sponsorData from '@/../public/json/sponsor.json';

interface Sponsor {
  name: string;
  slug: string;
  image: string;
  description: string;
  url?: string;
}

interface SponsorList {
  [level: string]: Sponsor[];
}

@Component
export default class Team extends Vue {
  public sponsorLevelText = {
    'holder': '主辦單位',
    'co-holder': '共同主辦',
    'co-organizer': '協辦單位',
    'level-1': '深耕級',
    'level-2': '前瞻級',
    'level-3': '新芽級',
    'thank': '特別感謝'
  };

  get sponsorList (): SponsorList {
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
        url
      });
    });
    return sponsorList;
  }

  public clickSponsor (sponsor: Sponsor) {
    if (!sponsor.url) {
      return;
    }
    window.open(sponsor.url);
  }
}
</script>

<style lang="scss" scoped>
.team-container {
  // padding-left: 180px;
  // padding-right: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  .sponsor-container {
    width: 100%;
  }

  h2.level {
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 2em;
    text-align: center;
  }

  .sitcon-group {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 2em;
    width: 100%;
    margin-bottom: 2em;

    p {
      font-weight: bold;
      width: 11em;
      padding-bottom: 0.66em;
      border-bottom: 6px solid black;
      border-radius: 8px;
    }
  }

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
  }

  .tab-container {
    .tab {
      border: solid black 4px;
      border-radius: 16px;
      transform: skewX(-15deg);
      transform-origin: center;
      padding: 18px 24px;
      margin-bottom: 2em;

      &.toggle {
        background: black;
        color: white;
      }

      p {
        transform-origin: center;
        transform: skewX(15deg);
        display: flex;
        width: 100%;
        flex-direction: column;
        text-align: center;

        span {
          font-weight: bold;
        }

        span:first-child {
          // title
          font-size: 3em;
          margin-bottom: 0.33em;
        }

        span:last-child {
          font-size: 1.33em;
        }
      }
    }
  }

  .org-container {
    margin-bottom: 3em;
    box-sizing: border-box;

    .org {
      border: 6px solid black;
      border-radius: 18px;
      margin-bottom: 2em;
      min-height: 540px;

      img {
        // icon
        width: 100%;
        height: 200px;
        margin-bottom: 3em;
      }
      h3 {
        // dad's name
        font-size: 1.5em;
        margin-bottom: 1em;
        font-weight: bold;
        line-height: 1.66em;
      }
      p {
        // dad's info
        font-size: 1.2em;
        line-height: 1.66em;
        word-wrap:break-word;
        text-align: justify;
      }
    }
  }
}
</style>