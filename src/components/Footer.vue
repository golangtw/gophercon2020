<template>
  <footer id="footer" class="footer-container column-flex extend">
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
              class="tone-trans"
            >
              <font-awesome-icon :icon="media.icon" />
            </a>
          </p>
        </div>
        <div id="contact" class="column-flex extend">
          <p>
            <a href="mailto:contact@sitcon.org" class="font-bold tone-trans">contact@sitcon.org</a>
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
        class="font-bold tone-trans"
      >{{ 2012 + i }}</a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
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
