<template>
  <footer>
    <div class="footer-container">
      <div id="brand" class="footer">
        <p>
          <span class="font-bold">GopherCon TW</span>
          <span class="font-bold">Gopher Conference Taiwan</span>
        </p>
      </div>
      <div id="contact" class="footer">
        <p>
          <span class="font-bold">Contact 聯絡我們</span>
          <span class="font-bold"
            ><a href="mailto:contact@golang.tw" class="font-bold"
              >contact@golang.tw</a
            ></span
          >
        </p>
      </div>
      <div id="past" class="footer">
        <p>
          <span class="font-bold">歷年網站</span>
          <span class="font-bold">
            <a
              v-for="i in 1"
              :key="`website-${2019 + i}`"
              :href="`https://gophercon.golang.tw/${2019 + i}/`"
              target="_blank"
              rel="noopener"
              class="font-bold"
              >{{ 2019 + i }}</a
            >
          </span>
        </p>
      </div>
      <div id="media" class="footer">
        <p>
          <span class="font-bold">社群媒體</span>
          <span class="font-bold">
            <a
              v-for="media in communityMedia"
              :key="`media-${media.icon[1]}`"
              :href="media.link"
              target="_blank"
              rel="noopener"
            >
              <font-awesome-icon :icon="media.icon" />
            </a>
          </span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  private communityMedia = [
    {
      icon: ["fab", "meetup"],
      link: "https://www.meetup.com/golang-taipei-meetup",
    },
    {
      icon: ["fab", "github"],
      link: "https://github.com/golangtw",
    },
    {
      icon: ["fab", "facebook-f"],
      link: "https://www.facebook.com/golangtaipei/",
    },
    {
      icon: ["fab", "telegram-plane"],
      link: "https://t.me/golangtw",
    },
    {
      icon: ["fab", "youtube"],
      link: "https://www.youtube.com/channel/UCjnIy_GQAuszZurUIO3zg9Q",
    },
    {
      icon: ["fab", "twitter"],
      link: "https://twitter.com/golangtw",
    },
  ];
}
</script>
