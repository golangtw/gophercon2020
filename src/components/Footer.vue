<template>
  <footer :class="{ 'popuped': isPopup }" class="footer-container column-flex extend">
    <div class="top-box extend column-flex">
      <div id="brand" class="column-flex">
        <p class="font-bold">學生計算機年會</p>
        <p class="font-bold">Students' Information Technology Conference</p>
      </div>
      <div class="contact-and-media-container column-flex">
        <div id="media" class="column-flex extend">
          <p class="font-bold">
            <a
              v-for="media in communityMedia"
              :key="`media-${ media.icon[1] }`"
              :href="media.link"
              target="_blank"
              rel="noopener"
            >
              <font-awesome-icon :icon="media.icon" />
            </a>
          </p>
        </div>
        <div id="contact" class="column-flex extend">
          <p>
            <a href="mailto:contact@sitcon.org" class="font-bold">contact@sitcon.org</a>
          </p>
        </div>
      </div>
    </div>
    <div id="past" class="column-flex extend">
      <a
        v-for="i in 7"
        :key="`website-${2012 + i}`"
        :href="`https://sitcon.org/${ 2012 + i }/`"
        target="_blank"
        rel="noopener"
        class="font-bold"
      >{{ 2012 + i }}</a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class Footer extends Vue {
  @Getter('isPopup', { namespace: 'app' }) private isPopup!: boolean;

  private communityMedia = [
    {
      icon: ['fab', 'youtube'],
      link: 'https://sitcon.org/youtube'
    },
    {
      icon: ['fab', 'facebook-f'],
      link: 'https://sitcon.org/facebook'
    },
    {
      icon: ['fab', 'twitter'],
      link: 'https://sitcon.org/twitter'
    },
    {
      icon: ['fab', 'telegram-plane'],
      link: 'https://sitcon.org/telegram'
    },
    {
      icon: ['fab', 'flickr'],
      link: 'https://sitcon.org/flickr'
    }
  ];
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/color";

.column-flex {
  display: flex;
  flex-direction: column;
}

.extend {
  width: 100%;
}

a {
  color: white;
  text-decoration: none;
}

p,
#past a {
  font-size: 18pt;
  line-height: 1.33em;
  @media screen and (max-width: 1280px) {
    font-size: 14pt;
  }
  @media screen and (max-width: 480px) {
    font-size: 9pt;
  }
}

#media {
  a {
    height: 42px;
    margin-right: 36px;
    transition: all ease-in-out 0.3s;
    &:hover {
      color: $tone;
    }
    @media screen and (max-width: 1280px) {
      height: 32px;
      margin-right: 28px;
    }
    @media screen and (max-width: 900px) {
      height: 28px;
      margin-right: 22px;
    }
    @media screen and (max-width: 480px) {
      height: 21px;
      margin-right: 18px;
    }
  }
}

.footer-container {
  box-sizing: border-box;
  background: black;
  color: white;
  padding: 65px 5%;
  @media screen and (max-width: 900px) {
    padding: 30px 16% 0 16px;
  }

  .top-box {
    display: flex;
    flex-direction: row;
    min-height: 10em;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      min-height: initial;
    }

    #brand,
    .contact-and-media-container {
      width: 50%;
      box-sizing: border-box;
      padding-left: 5%;
      padding-right: 5%;
      @media screen and (max-width: 900px) {
        width: 100%;
        padding-left: initial;
      }
    }

    .contact-and-media-container {
      @media screen and (max-width: 900px) {
        flex-direction: column-reverse;
      }
    }

    #brand {
      border-right: 3px white solid;
      @media screen and (max-width: 900px) {
        border-right: initial;
        border-bottom: 1px solid white;
        padding-bottom: 1.5em;
        margin-bottom: 1.5em;
      }

      p:first-child {
        margin-bottom: 0.8em;
      }
    }

    .contact-and-media-container {
      #media {
        margin-bottom: 36px;

        @media screen and (max-width: 900px) {
          margin-top: 1.5em;
          margin-bottom: 1.5em;
        }

        a {
          // icon buttons
          display: inline-block;
          width: auto;

          svg {
            height: 100%;
            width: auto;
          }
        }
      }
    }
  }

  #past {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 36px;
    padding: 0 7%;
    box-sizing: border-box;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
}
</style>
