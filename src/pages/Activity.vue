<template>
  <div id="activity" class="main-container">
    <div class="activity-tabbar">
      <div class="activity-head">
        <p>活</p>
        <p>動</p>
      </div>
      <div
        v-for="activity in activities"
        :key="`activity-${activity.name}`"
        :class="{ active: $route.params.aid === activity.name }"
        class="activity-tab"
        @click="$router.push({ name: 'ActivityView', params: { aid: activity.name } })"
      >
        <div class="label icon">
          <img :src="activity.icon" :alt="activity.name"/>
        </div>
        <div class="image">
          <img :src="activity.image" :alt="activity.name">
        </div>
        <div class="label name">
          <p>{{ activity.name }}</p>
        </div>
      </div>
    </div>
    <div
      v-for="activity in activities"
      v-show="$route.params.aid === activity.name"
      :key="`activity-showbox-${activity.name}`"
      class="activity-showbox"
    >
      <h1 class="title">
        <span class="font-black">{{ activity.name }}</span>
      </h1>
      <div class="content">
        <p><img :src="activity.image" :alt="activity.name"></p>
        <p v-html="activity.description.replace(/\[([^\[]+)\]\((.*)\)/gm, `<a href='$2' target='_blank' rel='noopener noreferrer'>$1</a>`)"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import activityData from '@/../public/json/activity.json';

interface ActivityPayload {
  name: string;
  description: string;
  icon?: string;
  image?: string;
}

@Component
export default class Activity extends Vue {
  private activities: ActivityPayload[] = activityData;

  public mounted () {
    this.autoAttachFirstTab();
  }

  private autoAttachFirstTab (): void {
    if (this.$route.name === 'Activity') {
      this.$router.push({ name: 'ActivityView', params: { aid: activityData[0].name } });
    }
  }
}
</script>
