<template>
  <div class="badge-component">
    <div class="badge-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';

.badge-component {
  z-index: 1;
  background-image: url('~@/assets/images/badge-960-below.svg');
  background-repeat: no-repeat;
  padding: 20px 66px 12px 62px;

  @include for-size(xl) {
    width: 190px;
    height: 67px;
    padding-left: 28px;
    background-image: url('https://gophercon.golang.tw/2020/img/badge-1280.svg');
  }

  .badge-content,
  .badge-content div {
    width: 96px;
    height: 35px;
    font-family: SourceHanSansTW, Noto Sans TC, Din, Microsoft JhengHei, Avenir,
      Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #343942;
  }
}
</style>
