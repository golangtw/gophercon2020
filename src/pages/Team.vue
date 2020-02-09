<template>
  <div class="main-container team-container">
    <div class="main-title">
      <p>SITCON團隊</p>
    </div>
    <div class="main-content">
      <div class="tab-container">
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
      <div class="content-container">
        <div
          v-for="entry in Object.entries(sponsorList)"
          :key="`sponsor-level-${entry[0]}`"
          class="sponsor-container"
        >
          <h2 class="level">{{ sponsorLevelText[entry[0]] }}</h2>
          <div
            :class="`card-container ${entry[0] === 'holder' ? 'host-container' : 'org-container'}`"
          >
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
  readmore: boolean;
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

  public sponsorList: SponsorList = {};

  public clickSponsor (sponsor: Sponsor) {
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
@import "@/assets/scss/color";

$mobile: 900px;

.team-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

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

  .main-title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 2em;
    width: 100%;

    margin-bottom: 2em;
    @media screen and (max-width: $mobile) {
      margin-bottom: 1em;
    }

    p {
      font-weight: bold;
      width: 11em;

      border-bottom: 4px solid black;
      padding-bottom: 0.66em;
      @media screen and (max-width: $mobile) {
        border-width: 0;
        padding-bottom: initial;
      }
    }
  }

  .main-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: $mobile) {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .tab-container,
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
            margin-bottom: 0.33em;

            font-size: 2em;
            @media screen and (max-width: 1440px) {
              font-size: 1.8em;
            }
            @media screen and (max-width: 1050px) {
              font-size: 1.33em;
            }
          }

          span:last-child {
            font-size: 1.33em;
            @media screen and (max-width: 1440px) {
              font-size: 1em;
            }
            @media screen and (max-width: 1280px) {
              font-size: 0.75em;
            }
          }
        }
      }

      @media screen and (max-width: $mobile) {
        border-radius: 10px;
        background: black;
        padding: 0;
        min-height: 0;
        margin-right: 1em;
        width: 76px;

        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        transform: skewY(-15deg);
        transform-origin: center;

        position: sticky;
        top: 68px;

        .tab {
          width: 100%;
          margin: 0;
          padding: 1em 0.4em 1.5em 0.4em;
          transform: initial;
          border-radius: 10px !important;
          border-width: 4px;

          &:not(:first-child) {
            border-top-width: 0;
          }

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
            span:first-child {
              // title
              font-size: 1.44em;
            }
            span:last-child {
              // subtitle
              font-size: 0.66em;
              margin-left: 0.66em;
              margin-top: 3px;
            }
          }
        }
      }
    }

    .content-container {
      flex-grow: 1;
      width: 100%;
      display: flex;
      flex-direction: column;

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
    }
  }
}
</style>