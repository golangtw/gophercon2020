<template>
  <div class="g-footer">
    <!--
    <div v-if="showSponsors" class="g-footer-sponsors">
      <div class="sponsor">
        <img src="https://gophercon.golang.tw/2020/img/sponsors/chungyo.png" alt="chung yo group" />
      </div>
      <div class="sponsor">
        <img src="https://gophercon.golang.tw/2020/img/sponsors/ocf.png" alt="open culture foundation" />
      </div>
      <div class="sponsor">
        <img src="https://gophercon.golang.tw/2020/img/sponsors/jetbrains.png" alt="jetbrain" />
      </div>
    </div>
    -->
    <div class="g-footer-socialMedia">
      <div class="g-footer-socialMedia--text">
        <span>Contact us in one of the following social networks</span>
      </div>
      <div class="g-footer-socialMedia--icons">
        <div
          v-for="(s, i) in socialMedia"
          :key="`media-${i}`"
          class="media-icon"
        >
          <a :href="s.link" target="_blank" rel="noopener">
            <img :src="s.imgSrc" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="g-footer-copyright">
      <div class="g-footer-copyright--image">
        <LogoBottom />
      </div>
      <div class="g-footer-copyright--text">
        <span>
          Copyright © 2010-2020 GopherCon Taiwan. All rights reserved.
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import LogoBottom from './LogoBottom.vue';

@Component({
  components: {
    LogoBottom,
  },
})
export default class Footer extends Vue {
  @Prop() private showSponsors!: boolean;
  private socialMedia = [
    {
      imgSrc: '@/assets/icons/mail.png',
      link: 'mailto:contact@golang.tw',
    },
    {
      imgSrc: '@/assets/icons/meetup.png',
      link: 'https://www.meetup.com/golang-taipei-meetup',
    },
    {
      imgSrc: '@/assets/icons/github.png',
      link: 'https://github.com/golangtw',
    },
    {
      imgSrc: '@/assets/icons/facebook.png',
      link: 'https://www.facebook.com/golangtaipei/',
    },
    {
      imgSrc: '@/assets/icons/telegram.png',
      link: 'https://t.me/golangtw',
    },
    {
      imgSrc: '@/assets/icons/twitter.png',
      link: 'https://twitter.com/golangtw',
    },
    {
      imgSrc: '@/assets/icons/youtube.png',
      link: 'https://www.youtube.com/channel/UCjnIy_GQAuszZurUIO3zg9Q',
    },
  ];
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

@mixin iconColor($color) {
  path {
    fill: $color;
  }
}

.g-footer {
  position: absolute;
  z-index: 10;
  width: 100%;
  font-family: Noto Sans TC, sans-serif;

  &-sponsors {
    display: flex;
    padding: 80px 48px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #ffffff;

    & > .sponsor {
      display: flex;
      width: 260px;
      margin: 20px 40px;
      justify-content: center;

      img {
        min-height: 64px;
        max-height: 150px;
        object-fit: contain;

        @media (max-width: $screen-md) {
          min-height: 56px;
          max-height: 64px;
        }
      }
    }
  }

  &-socialMedia {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 37px 100px;
    background: #e8e8e8;

    &--text {
      display: flex;
      margin-top: 40px;
      margin-bottom: 20px;
      justify-content: center;
      color: #343942;
      text-align: center;

      span {
        font-size: 18px;
        font-weight: 300;
        letter-spacing: normal;
        line-height: normal;
      }
    }

    &--icons {
      display: flex;
      max-width: $screen-md;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;

      & > .media-icon {
        width: 40px;
        height: 40px;
        margin: 8px 12px;

        & > a {
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }

  &-copyright {
    padding: 40px 45px;
    background: #4e687e;

    &--image {
      display: flex;
      margin-top: 40px;
      justify-content: center;
    }

    &--text {
      display: flex;
      margin-top: 40px;
      justify-content: center;
      color: #bbfad7;
      text-align: center;

      span {
        font-size: 14px;
        font-weight: 300;
        letter-spacing: normal;
        line-height: normal;
      }
    }
  }
}
</style>
