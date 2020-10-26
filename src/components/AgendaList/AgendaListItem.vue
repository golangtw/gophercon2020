<template>
  <div :class="itemClasses" @click="onClick">
    <div class="g-agenda-list-item__time">
      {{ time }}
    </div>
    <div class="g-agenda-list-item__speaker">
      {{ speaker }}
    </div>
    <div class="g-agenda-list-item__title">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AgendaListItem extends Vue {
  @Prop() private time!: string;
  @Prop() private speaker!: string;
  @Prop() private title!: string;

  get isClickable() {
    return !!this.speaker;
  }

  get itemClasses() {
    return {
      'g-agenda-list-item': true,
      '--clickable': this.isClickable,
    };
  }

  private onClick(event: Event) {
    if (this.isClickable) {
      this.$emit('click', event);
    }
  }
}
</script>

<style lang="scss" scoped>
.g-agenda-list-item {
  width: 448px;
  padding: 16px 24px;
  margin-bottom: 4px;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: normal;
  background-color: #ffffff;
  cursor: default;

  &:last-child {
    margin-bottom: 40px;
  }

  &__time {
    margin-bottom: 4px;
    line-height: normal;
    color: #61c3ff;
  }

  &__title {
    line-height: 1.71;
    color: #6d7278;
  }

  &__speaker {
    margin-bottom: 4px;
    line-height: 1.71;
    color: #333943;
  }

  &.--clickable {
    cursor: pointer;

    & > .g-agenda-list-item__title {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.5;
      color: #333943;
    }
  }
}
</style>
