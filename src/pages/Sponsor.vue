<template>
  <div id="sponsor" class="container">
    <LogoTop v-if="$store.state.app.device !== 'mobile'" />
    <div class="background-image">
      <div class="image-wrapper">
        <img
          src="https://gophercon.golang.tw/2020/img/subpage-bg.png"
          srcset="
            https://gophercon.golang.tw/2020/img/subpage-bg@2x.png 2x,
            https://gophercon.golang.tw/2020/img/subpage-bg@3x.png 3x
          "
          class="Group-9"
        />
        <img
          src="https://gophercon.golang.tw/2020/img/graphic-sponsor-1.png"
          srcset="
            https://gophercon.golang.tw/2020/img/graphic-sponsor-1@2x.png 2x,
            https://gophercon.golang.tw/2020/img/graphic-sponsor-1@3x.png 3x
          "
          class="sponsor-1"
        />
        <img
          src="https://gophercon.golang.tw/2020/img/graphic-sponsor-2.png"
          srcset="
            https://gophercon.golang.tw/2020/img/graphic-sponsor-2@2x.png 2x,
            https://gophercon.golang.tw/2020/img/graphic-sponsor-2@3x.png 3x
          "
          class="sponsor-2"
        />
      </div>
    </div>
    <div class="content">
      <div class="sponsor-wrapper">
        <div
          v-for="(leveledSponsors, sponsorOrder) in sponsorList"
          :key="sponsorOrder"
          :class="`sponsor-card-container ${leveledSponsors[0]}`"
        >
          <h2 class="sponsor-level">
            <span class="sponsor-level-text">{{
              sponsorLevelText[leveledSponsors[0]]
            }}</span>
          </h2>
          <div class="sponsor-card">
            <div
              v-for="sponsor in leveledSponsors[1]"
              :key="sponsor.id"
              class="sponsor-card-header"
            >
              <div class="sponsor-card-toggle" @click="toggleSponsor(sponsor)">
                <div :class="getImgContainerClasses(sponsor)">
                  <img
                    :src="`https://gophercon.golang.tw/2020/img/sponsors/${sponsor.image}`"
                    :alt="`${sponsor.name}`"
                  />
                </div>
                <!-- Toggled content in mobile -->
                <div
                  v-if="isSelectedInMobile(sponsor)"
                  class="sponsor-card-content"
                >
                  <a
                    :href="selectedSponsor.url"
                    target="_blank"
                    rel="noopener"
                    class="sponsor-text"
                  >
                    {{ selectedSponsor.name }}
                    <link-icon />
                  </a>
                  <div class="sponsor-text-container layout-flex-md-50">
                    <p
                      v-html="selectedSponsor.description"
                      class="sponsor-text"
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Toggled content in desktop -->
          <div
            v-if="isSelectedInDesktop(leveledSponsors[0])"
            class="sponsor-card-content"
          >
            <a :href="selectedSponsor.url" target="_blank" rel="noopener">
              {{ selectedSponsor.name }}
              <link-icon />
            </a>
            <div class="sponsor-text-container layout-flex-md-50">
              <p v-html="selectedSponsor.description" class="sponsor-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import sponsorData from '@/../public/json/sponsor.json';

import LogoTop from '../components/LogoTop.vue';
import Sponsor from '../components/Team/Sponsor.vue';
import LinkIcon from '../components/icons/Link.vue';

@Component({
  components: {
    LogoTop,
    Sponsor,
    LinkIcon,
  },
})
export default class SponsorPage extends Vue {
  private sponsorLevelText = {
    holder: '主辦單位',
    'co-holder': '共同主辦',
    'co-organizer': '協辦單位',
    'level-1': '鑽石級',
    'level-2': '金級',
    'level-3': '銀級',
    thank: '特別感謝',
    media: '媒體夥伴',
  };

  private sponsorList: object = {};

  private selectedSponsor: object = {};

  public mounted() {
    this.processSponsor();
  }

  private isSponsorSelected(id): boolean {
    return this.selectedSponsor.id === id;
  }

  private isLevelSelected(level): boolean {
    return this.selectedSponsor.level === level;
  }

  private getImgContainerClasses(sponsor): object {
    return {
      [sponsor.level]: true,
      'sponsor-img-container': true,
      '--active': this.isSponsorSelected(sponsor.id),
    };
  }

  private static isMobile(): boolean {
    return !window.matchMedia('(min-width: 768px)').matches;
  }

  private isSelectedInDesktop(level): boolean {
    return !SponsorPage.isMobile() && this.isLevelSelected(level);
  }

  private isSelectedInMobile(sponsor): boolean {
    return SponsorPage.isMobile() && this.isSponsorSelected(sponsor.id);
  }

  private processSponsor(): void {
    this.sponsorList = sponsorData;
  }

  private toggleSponsor(sponsor: any): void {
    if (this.selectedSponsor.id === sponsor.id) {
      this.selectedSponsor = {};
    } else {
      this.selectedSponsor = sponsor;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/variables.scss';

$logo-margin-bottom: 20px;

#sponsor {
  min-width: 375px;
  width: 100%;

  @include for-size(xs) {
    padding-top: calc(
      #{$navbar-height-mobile} + 36px + 84px + #{$logo-margin-bottom}
    );
  }
  @include for-size(sm) {
    padding-top: calc(
      #{$navbar-height-mobile} + 36px + 100px + #{$logo-margin-bottom}
    );
  }
  @include for-size(md) {
    padding-top: calc(
      #{$navbar-height-mobile} + 36px + 153px + #{$logo-margin-bottom}
    );
  }
  @include for-size(lg) {
    padding-top: calc(#{$navbar-height} + 28px + 153px + 20px);
  }
  @include for-size(xl) {
    padding-top: calc(#{$navbar-height} - 32px + 153px + 20px);
  }

  .background-image {
    position: fixed;
    background-color: #fff;
    height: calc(100vw / 16 * 9);
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 0;
    transform-origin: 0 0;
    margin-top: $navbar-height-mobile;
    z-index: -10;

    @include for-size(lg) {
      margin-top: $navbar-height;
    }

    .image-wrapper {
      position: relative;
    }

    .Group-9 {
      &-container {
        position: relative;
        width: 100%;
        height: 100%;
      }

      width: 100%;
      height: auto;
    }

    .sponsor-1 {
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .sponsor-2 {
      position: absolute;
      left: 5%;
      bottom: 45%;
    }
  }

  .content {
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 40px;

    @include for-size(md) {
      width: 688px;
    }
    @include for-size(lg) {
      width: 716px;
    }
    @include for-size(xl) {
      width: 716px;
    }
  }
}

.card-container.individual-sponsor {
  font-family: SourceHanSansTW;
  margin-bottom: 40px;

  @include for-size(xs) {
    padding: 0 16px;
  }
  @include for-size(sm) {
    padding: 0 16px;
  }
  @include for-size(md) {
    padding: 0 68px;
  }
  @include for-size(lg) {
    padding: 0 82px;
  }
  @include for-size(xl) {
    padding: 0 82px;
  }

  h2.subtitle {
    margin-bottom: 24px;
    text-align: center;
    font-size: 24px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #44484f;
  }

  p {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #343942;
  }
}

.sponsor-wrapper {
  background-color: #f7f8f9;
  padding-top: 40px;
  padding-bottom: 40px;

  @include for-size(xs) {
    margin-left: 16px;
    margin-right: 16px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @include for-size(sm) {
    margin-left: 16px;
    margin-right: 16px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @include for-size(md) {
    margin-left: 40px;
    margin-right: 40px;
    padding-left: 68px;
    padding-right: 68px;
  }
  @include for-size(lg) {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 82px;
    padding-right: 82px;
  }
  @include for-size(xl) {
    padding-left: 82px;
    padding-right: 82px;
  }

  .sponsor-card {
    margin-top: 16px;
  }

  h2.sponsor-name {
    margin-bottom: 24px;
  }

  .sponsor-card-container {
    &:not(:first-child) {
      margin-top: 36px;
    }

    .sponsor-card {
      display: flex;

      @include for-size(sm) {
        flex-direction: column;

        .sponsor-card-header {
          &:not(:first-child) {
            margin: 4px 0 0 0;
          }
        }
      }

      @include for-size(md) {
        flex-direction: row;

        .sponsor-card-header {
          &:not(:first-child) {
            margin: 0 0 0 4px;
          }
        }
      }
    }
  }

  .sponsor-card-header {
    .sponsor-card-toggle {
      .sponsor-img-container {
        display: flex;
        justify-content: center;
        background-color: #ffffff;
        border-top: 3px solid transparent;
        cursor: pointer;

        &.level-1.--active {
          border-top-color: #b3f7ff;
        }

        &.level-2.--active {
          border-top-color: #ffb976;
        }

        &.level-3.--active {
          border-top-color: #dddfe2;
        }

        &.co-organizer.--active {
          border-top-color: #61c3ff;
        }

        &.thank.--active {
          border-top-color: #bbfad7;
        }

        img {
          object-fit: contain;
        }
      }
    }
  }

  .sponsor-card-content {
    padding: 16px;
    background-color: #f0f2f4;

    a {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
      letter-spacing: normal;
      color: #61c3ff;

      svg {
        margin-left: 8px;
      }
    }

    .sponsor-text-container {
      margin-top: 10px;
    }
  }

  .sponsor-level-text {
    font-size: 20px;
    font-weight: 300;
    line-height: normal;
    letter-spacing: normal;
    color: #61c3ff;
  }

  p.sponsor-text {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #333943;
  }
}
</style>
