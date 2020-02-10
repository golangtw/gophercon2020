<template>
  <div id="nav" :class="{ 'popuped': isPopup }" class="navbar">
    <nav class="menu-container">
      <div class="logo bar">
        <img src="@/assets/images/logo-dark.svg" class="navbar-icon icon--desktop" />
        <img src="@/assets/images/favicon.png" class="navbar-icon icon--mobile" />
        <div class="title-container">
          <p class="title font-bold">SITCON</p>
          <p class="subtitle font-bold">2020</p>
        </div>
        <div class="toggle-container" @click="toggleMenu(!isMenuToggled)">
          <img src="@/assets/images/toggle-button.svg" class="navbar-icon" />
        </div>
      </div>
      <div class="menu" :class="{ toggle: isMenuToggled }">
        <div class="bar">
          <div class="logo-container">
            <img src="@/assets/images/favicon.png" class="icon" />
          </div>
          <div class="title-container">
            <img src="@/assets/images/define-dark.svg" class="define" />
            <p class="sitcon20">
              <span class="title">SITCON</span>
              <span class="subtitle">20</span>
            </p>
          </div>
          <div class="toggle-container" @click="toggleMenu(!isMenuToggled)">
            <img src="@/assets/images/toggle-button.svg" class="navbar-icon" />
          </div>
        </div>
        <div
          v-for="item in menu"
          :key="item.name"
          :class="{ active: $route.name.includes(item.name) }"
          class="menu-item"
        >
          <router-link :to="item.path" class="font-bold">
            <span>{{ item.meta.label }}</span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { MenuItem } from '../store/types/menu';

@Component
export default class Navbar extends Vue {
  @Action('toggleMenu', { namespace: 'menu' }) private toggleMenu!: (
    status: boolean
  ) => void;
  @Getter('menu', { namespace: 'menu' }) private menu!: MenuItem[];
  @Getter('toggle', { namespace: 'menu' }) private isMenuToggled!: boolean;
  @Getter('isPopup', { namespace: 'app' }) private isPopup!: boolean;

  @Watch('$route')
  public onChangeRoute () {
    this.toggleMenu(false);
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/color";
$mobile: 900px;

.navbar {
  width: 100%;
  background: $white;
  position: fixed;
  z-index: 10000;
  display: flex;
  flex-direction: row;
  height: 152px;
  @media screen and (max-width: $mobile) {
    height: initial;
  }

  &.popuped {
    position: fixed;
    filter: blur(3px);
  }

  .bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 0 24px;

    .logo-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .title-container {
      display: flex;
      align-items: center;
      margin-left: 16px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .toggle-container {
      display: flex;
      align-items: center;
      // Align right
      margin-left: auto;
    }
  }

  .menu-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0;
    padding-top: 12px;
    padding-bottom: 12px;

    .logo {
      width: 400px;

      @media screen and (max-width: $mobile) {
        width: 100%;
      }

      .logo-container .sitcon20 {
        @media screen and (max-width: $mobile) {
          display: none;
        }
      }

      .title-container {
        .subtitle {
          font-size: 0.75em;
          margin-top: 0.5em;
          color: $dark-1;
        }
      }

      .title-container,
      .toggle-container {
        @media screen and (min-width: $mobile +1) {
          display: none;
        }
      }
    }

    .menu {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      background-color: $white;
      margin-right: 140px;
      justify-content: flex-end;

      .icon {
        width: 32px;
        height: 32px;
      }

      .bar {
        display: none;
        width: 100%;
      }

      @media screen and (max-width: $mobile) {
        display: none;

        &.toggle {
          display: flex;
          position: absolute;
          right: 0;
          width: 275px;
          height: 100vh;
          z-index: 0;
          margin: 0;

          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-end;
        }

        .bar {
          display: flex;
          padding-bottom: 12px;
        }
      }

      .menu-item > a {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        color: $black;
        padding: 24px 12px;
        box-sizing: border-box;

        @media screen and (max-width: $mobile) {
          transform: initial;
          height: initial;
          align-items: flex-end;
          padding: 0 24px;
          width: 100%;
        }

        span {
          position: relative;
          display: block;
          width: 112px;
          margin-top: 25px;
          margin-bottom: 46px;
          position: relative;
          text-align: center;
          font-size: 12pt;
          padding: 0;
          text-decoration: none;
          color: $black;

          @media screen and (max-width: $mobile) {
            transform: initial;
            margin: 1em 0;
            text-align: end;
          }

          &:before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -28px;
            width: 0%;
            border-bottom: 4px solid $black;
            transition: width cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.3s;

            @media screen and (max-width: $mobile) {
              display: none;
            }
          }
        }

        &:hover {
          background: #f1f1f1;
        }
      }

      .menu-item.active span:before {
        width: 100%;
      }
    }
  }
}

.navbar-icon {
  width: 68px;
  height: 68px;

  &.icon--mobile {
    display: none;
  }

  @media screen and (max-width: $mobile) {
    width: 36px;
    height: 36px;

    &.icon--desktop {
      display: none;
    }

    &.icon--mobile {
      display: inline;
    }
  }
}

.sitcon20 {
  font-weight: bold;
  font-size: 8px;
  margin-top: 6px;

  &,
  span {
    letter-spacing: 4px;
  }

  .title {
    color: $black;
  }

  .subtitle {
    color: #8e8e8e;
  }
}

.define {
  width: 68px;
}
</style>