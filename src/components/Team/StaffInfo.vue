<template>
  <div class="staff-info">
    <img
      class="staff-info--avatar"
      :src="`https://www.gravatar.com/avatar/${member.emailHash}?s=320&d=https://golang.tw/2020/img/gophercon-logo.png&r=g`"
      :alt="`${member.name}'s Avatar`"
    />
    <div class="staff-info--name">{{ member.name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Person {
  emailHash: string;
  name: string;
}

@Component
export default class StaffInfo extends Vue {
  @Prop({ default: {} }) member!: Person;
}
</script>

<style lang="scss" scoped>
.staff-info {
  text-align: center;

  .staff-info--avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .staff-info--name {
    margin-top: 8px;
    font-family: SourceHanSansTW, 'Noto Sans TC', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #333943;
  }
}
</style>
