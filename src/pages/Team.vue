<template>
  <div class="main-container team-container">
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
            <p>{{ sponsor.description }}</p>
          </div>
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
$mobile: 900px;

.team-container {
  // padding-left: 180px;
  // padding-right: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  padding-left: 8em !important;
  padding-right: 8em !important;

  @media screen and (max-width: 1280px) {
    padding-left: 4em !important;
    padding-right: 4em !important;
  }

  @media screen and (max-width: 900px) {
    padding-left: 1em !important;
    padding-right: 1em !important;
  }

  @media screen and (max-width: $mobile) {
    // padding-left: 116px !important;
  }

  .sponsor-container {
    width: 100%;
  }

  h2.level {
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 2em;
    text-align: center;
    @media screen and (max-width: $mobile) {
      font-size: 1.66em;
      margin-bottom: 1em;
      text-align: start;
    }
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
      @media screen and (max-width: $mobile) {
        border-bottom: 0;
      }
    }

    @media screen and (max-width: $mobile) {
      margin-bottom: 1em;
      p {
        padding-bottom: initial;
      }
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

  .tab-container {
    .tab {
      border: solid black 4px;
      border-radius: 16px !important;
      transform: skewX(-15deg);
      transform-origin: center;
      padding: 18px 0;
      margin-bottom: 5em;

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
          font-size: 2em;
          @media screen and (max-width: 1440px) {
            font-size: 1.8em;
          }
          margin-bottom: 0.33em;
        }

        span:last-child {
          font-size: 1.33em;
        }
      }
    }

    @media screen and (max-width: $mobile) {
      position: absolute;
      top: 1em;
      left: 1em;
      flex-direction: column;
      width: 80px;
      justify-content: flex-start;
      align-items: center;
      transform: skewY(-15deg);
      transform-origin: center;
      border-radius: 18px;
      background: black;
      padding: 3px;

      .tab {
        width: 100%;
        margin: 0;
        padding-bottom: 1.5em;
        transform: initial;
        border-radius: 9px;

        &:not(.toggle) {
          background: white;
        }

        p {
          display: flex;
          flex-direction: row;
          justify-content: center;
          transform-origin: center;
          transform: skewY(15deg);
          align-items: flex-start;
          span {
            writing-mode: vertical-lr;
          }
          span:last-child {
            // subtitle
            font-size: 0.75em;
            margin-left: 0.75em;
            margin-top: 6px;
          }
        }
      }
    }
  }

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
      }

      .text-container {
        width: 0%;
        flex-grow: 1;
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

  @media screen and (max-width: $mobile) {
    h2.level,
    .host-container,
    .org-container {
      margin-left: 116px;
      width: calc(100% - 116px);
    }

    .host-container,
    .org-container {
      display: block;

      .card {
        display: block;
        width: 100%;
        min-height: 50vw;
        .img-container {
          width: 50%;
          float: right;
          margin: 0;
        }
        .text-container {
          width: 100%;
        }
      }
    }
  }

  .card-container {
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
      word-wrap: break-word;
      // text-align: justify;
    }

    @media screen and (max-width: $mobile) {
      h3,
      p {
        font-size: 1em;
      }
    }
  }
}
</style>