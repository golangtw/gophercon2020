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
    top: 24px;
    z-index: 1009;
    height: 0;

    a {
        position: relative;
    }
    img {
        @include for-size(xs) {
            width: 200px;
            height: 67px;
        }
        @include for-size(sm) {
            width: 200px;
            height: 67px;
        }
        @include for-size(md) {
            width: 300px;
            height: 100px;
        }
        @include for-size(lg) {
            width: 300px;
            height: 100px;
        }
        @include for-size(xl) {
            width: 457px;
            height: 153px;
        }
    }
  }

</style>
