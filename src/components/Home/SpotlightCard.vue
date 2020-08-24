<template>
  <div class="spotlight-card-wrapper">
    <h2 class="spotlight-card--title">
      <slot name="spotlight-card-title"></slot>
    </h2>
    <div class="spotlight-card--content">
      <slot name="spotlight-card-content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.spotlight-card {
  &-wrapper {
    padding: 40px 24px;
    background-color: $white;
    opacity: 0.9;
    color: $dark-5;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  &--title {
    font-family: SourceHanSansTW, Noto Sans TC, Din, Microsoft JhengHei, Avenir,
      Helvetica, Arial, sans-serif;
    color: $blue-6;
    font-size: 24px;
    font-weight: 900;

    margin-bottom: 24px;
  }

  &--content {
    p {
      font-family: SourceHanSansTW, Noto Sans TC, Din, Microsoft JhengHei,
        Avenir, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #333943;
      margin-bottom: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }

    ul {
      margin-bottom: 24px;
      margin-left: 14px;
      list-style: disc;

      li {
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        margin-bottom: 14px;
      }
    }
  }
}
</style>