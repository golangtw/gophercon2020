<template>
  <div class="g-footer">
    <div v-if="showSponsors" class="g-footer-sponsors">
      <div class="sponsor">
        <img src="/img/sponsors/chungyo.png" alt="chung yo group" />
      </div>
      <div class="sponsor">
        <img src="/img/sponsors/ocf.png" alt="open culture foundation" />
      </div>
    </div>
    <div class="g-footer-socialMedia">
      <div class="g-footer-socialMedia--text">
        Contact us in one of the following social networks
      </div>
      <div class="g-footer-socialMedia--icons">
        <div class="social-media-icon">
          <a href="mailto:contact@golang.tw">
            <EmailIcon />
          </a>
        </div>
        <div
          v-for="s in socialMedia"
          :key="`media-${s.icon[1]}`"
          class="social-media-icon"
        >
          <a :href="s.link" target="_blank" rel="noopener">
            <font-awesome-icon :icon="s.icon" />
          </a>
        </div>
      </div>
    </div>
    <div class="g-footer-copyright">
      <div class="g-footer-copyright--image">
        <LogoBottom />
      </div>
      <div class="g-footer-copyright--text">
        Copyright © 2010-2020 GopherCon Taiwan. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import LogoBottom from "./LogoBottom.vue";
import EmailIcon from "./icons/Email.vue";

@Component({
  components: {
    EmailIcon,
    LogoBottom,
  },
})
export default class Footer extends Vue {
  @Prop() private showSponsors!:boolean;
  private socialMedia = [
    {
      icon: ["fab", "meetup"],
      link: "https://www.meetup.com/golang-taipei-meetup",
    },
    {
      icon: ["fab", "github"],
      link: "https://github.com/golangtw",
    },
    {
      icon: ["fab", "facebook"],
      link: "https://www.facebook.com/golangtaipei/",
    },
    {
      icon: ["fab", "telegram-plane"],
      link: "https://t.me/golangtw",
    },
    {
      icon: ["fab", "twitter"],
      link: "https://twitter.com/golangtw",
    },
    {
      icon: ["fab", "youtube"],
      link: "https://www.youtube.com/channel/UCjnIy_GQAuszZurUIO3zg9Q",
    },
  ];
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

@mixin iconColor($color) {
  path {
    fill: $color;
  }
}

.g-footer {
  position: absolute;
  z-index: 10;
  width: 100%;

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
        max-height: 80px;
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
    padding: 40px 0 100px;
    background: #e8e8e8;

    &--text {
      display: flex;
      margin-top: 40px;
      padding: 0 16px;
      justify-content: center;
      color: #343942;
      text-align: center;
    }

    &--icons {
      display: flex;
      max-width: $screen-md;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;

      & > .social-media-icon {
        width: 45px;
        height: 45px;
        margin: 24px 32px;
        border-radius: 50%;

        & > a {
          width: 100%;
          height: 100%;

          & > svg {
            width: 100%;
            height: 100%;

            &.fa-meetup {
              @include iconColor(#ea3340);
            }

            &.fa-facebook {
              @include iconColor(#2e76f3);
            }

            &.fa-telegram-plane {
              @include iconColor(#49a7da);
            }

            &.fa-twitter {
              @include iconColor(#4caeef);
            }

            &.fa-youtube {
              @include iconColor(#eb3323);
            }
          }
        }
      }
    }
  }

  &-copyright {
    padding: 40px 16px;
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
    }
  }
}
</style>
