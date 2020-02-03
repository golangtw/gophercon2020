<template>
  <footer
    :class="{ 'popuped': isPopup }" 
    class="footer-container"
  >
    <hr class="footer-line">
    <div id="brand" class="footer">
      <p>
        <span class="font-bold">學生計算機年會</span>
        <span class="font-bold">Students' Information Technology Conference</span>
      </p>
    </div>
    <div id="contact" class="footer">
      <p>
        <span class="font-bold">聯絡我們</span>
        <span class="font-bold"><a href="mailto:contact@sitcon.org" class="font-bold">contact@sitcon.org</a></span>
      </p>
    </div>
    <div id="past" class="footer">
      <p>
        <span class="font-bold">歷年網站</span>
        <span class="font-bold">
          <a
            v-for="i in 7"
            :key="`website-${2012 + i}`"
            :href="`https://sitcon.org/${ 2012 + i }/`"
            target="_blank"
            rel="noopener"
            class="font-bold"
          >{{ 2012 + i }}</a>
        </span>
      </p>
    </div>
    <div id="media" class="footer">
      <p>
        <span class="font-bold">社群媒體</span>
        <span class="font-bold">
          <a
            v-for="media in communityMedia"
            :key="`media-${ media.icon[1] }`"
            :href="media.link"
            target="_blank"
            rel="noopener"
          >
            <font-awesome-icon :icon="media.icon"/>
          </a>
        </span>
      </p>
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
      icon: [ 'fab', 'youtube' ],
      link: 'https://sitcon.org/youtube'
    },
    {
      icon: [ 'fab', 'facebook-f' ],
      link: 'https://sitcon.org/facebook'
    },
    {
      icon: [ 'fab', 'twitter' ],
      link: 'https://sitcon.org/twitter'
    },
    {
      icon: [ 'fab', 'telegram-plane' ],
      link: 'https://sitcon.org/telegram'
    },
    {
      icon: [ 'fab', 'flickr' ],
      link: 'https://sitcon.org/flickr'
    }
  ];
}
</script>
