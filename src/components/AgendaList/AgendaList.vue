<template>
  <div class="g-agenda-list">
    <slot></slot>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixin.scss';

.g-agenda-list {
  display: flex;
  width: 343px;
  flex-direction: column;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  @include for-size(md) {
    width: 716px;
  }
}
</style>
