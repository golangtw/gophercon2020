<template>
  <div id="activity" class="main-container">
    <h1 class="title">活動</h1>
    <div class="activity-tabbar">
      <div class="activity-head">
        <p>活</p>
        <p>動</p>
      </div>
      <div
        v-for="activity in activities"
        :key="`activity-${activity.name}`"
        class="activity-tab"
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
}
</script>
