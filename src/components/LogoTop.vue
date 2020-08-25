<template>
  <div class="logo-top">
    <router-link to="/">
      <img src="@/assets/images/logo.svg">
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/mixin.scss';

  .logo-top {
    position: fixed;
    width: 100%;
    text-align: center;
    z-index: 1009;
    height: 0;

    @include for-size(lg) {
      top: 100px;
    }

    @include for-size(xl) {
      top: 40px;
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
