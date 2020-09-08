<template>
  <div class="logo-top">
    <router-link to="/">
      <img src="@/assets/images/logo.svg" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/variables.scss';

.logo-top {
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 1009;
  top: calc(#{$navbar-height-mobile} + 36px);
  height: 0;

  @include for-size(lg) {
    top: calc(#{$navbar-height} + 28px);
  }

  @include for-size(xl) {
    top: calc(#{$navbar-height} -32 px);
  }

  a {
    position: relative;
  }
  img {
    @include for-size(xs) {
      width: 250px;
      height: 84px;
    }
    @include for-size(sm) {
      width: 300px;
      height: 100px;
    }
    @include for-size(md) {
      width: 457px;
      height: 153px;
    }
    @include for-size(lg) {
      width: 457px;
      height: 153px;
    }
    @include for-size(xl) {
      width: 457px;
      height: 153px;
    }
  }
}
</style>
