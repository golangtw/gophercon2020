<template>
  <nav id="nav">
    <div class="nav-inner-container">
      <div class="logo">
        <img class="logo__icon--normal" src="@/assets/images/logo-dark.svg">
        <img class="logo__icon--mobile" src="@/assets/images/favicon.png">
        <div class="logo__text">
          <div class="text__sitcon font-bold">SITCON</div>
          <div class="text__2020 font-bold">2020</div>
        </div>
      </div>
      <img src="@/assets/images/toggle-button.svg" class="toggle-button" @click="toggleMenu(!isMenuToggled)" />
      <div class="menu" :class="{ toggled: isMenuToggled }">
        <div class="menu__mask" @click.self="toggleMenu(false)">
          <div class="menu-inner-container">
            <header>
              <div class="define-logo">
                <img class="define-icon" src="@/assets/images/favicon.png">
                <div class="define-text">
                  <img src="@/assets/images/define-dark.svg" />
                  <div class="text-container">
                    <span class="text__sitcon">SITCON</span>
                    <span class="text__2020">2020</span>
                  </div>
                </div>
              </div>
              <!-- <img src="@/assets/images/toggle-button.svg" class="close-button" @click.self="toggleMenu(false)" /> -->
              <div class="close-button-container">
                <span class="close-button" @click.self="toggleMenu(false)">+</span>
              </div>
            </header>
            <router-link
              v-for="item in menu"
              :key="item.name"
              :to="item.path"
              class="menu__item font-bold"
              :class="{ active: $route.name.includes(item.name) }"
            >
              <span>{{ item.meta.label }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
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

  @Watch('$route')
  public onChangeRoute () {
    this.toggleMenu(false);
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/color";
@import "@/assets/scss/variables";
$mobile: 900px;

#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $navbar-height;
  z-index: 999;
  background-color: $white;

  @media screen and (max-width: $mobile) {
    height: $navbar-height-mobile;
  }

  .nav-inner-container {
    display: flex;
    height: 100%;
    padding: 0 5%;

    @media screen and (max-width: $mobile) {
      padding: 0 16px;
    }

    .logo {
      display: flex;
      align-items: center;

      img.logo__icon--normal {
        width: 48px;
        height: 48px;

        @media screen and (max-width: $mobile) {
          display: none;
        }
      }

      img.logo__icon--mobile {
        display: none;
        width: 32px;
        height: 32px;

        @media screen and (max-width: $mobile) {
          display: inline-block;
        }
      }

      .logo__text {
        display: none;
        margin-left: 8px;

        @media screen and (max-width: $mobile) {
          display: block;
        }

        & .text__sitcon {
          font-weight: 700;
        }

        & .text__2020 {
          font-size: 12px;
          color: $dark-1;
        }
      }
    }

    .toggle-button,
    .menu {
      margin-left: auto;
    }

    .toggle-button {
      display: none;

      @media screen and (max-width: $mobile) {
        display: inline-block;
      }
    }
  
    @media screen and (min-width: $mobile + 1) {
      .menu {
        .menu__mask {
          height: 100%;
          .menu-inner-container {
            height: 100%;
            display: flex;

            header {
              display: none;
            }

            .menu__item {
              display: flex;
              justify-content: center;
              align-items: center;
              min-width: 100px;
              height: 100%;
              padding: 0 12px;

              span {
                position: relative;
                display: block;

                &:before {
                  content: "";
                  position: absolute;
                  left: 50%;
                  bottom: -28px;
                  transform: translateX(-50%);
                  border-bottom: 4px solid $black;
                  width: 0;
                  transition: width cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.3s;
                }
              }

              &.active span:before {
                width: 100%;
              }

              &:hover {
                background: #f1f1f1;
              }
            }
          }
        }
      }
    }


    @media screen and (max-width: $mobile) {
      .menu {
        display: none;
      }

      .menu.toggled {
        display: block;
        .menu__mask {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba($color: #000000, $alpha: 0.6);
          z-index: 9999;
          
          .menu-inner-container {
            width: 80%;
            height: 100%;
            margin-left: auto;
            background-color: $white;
            display: flex;
            flex-direction: column;
            z-index: 99999;

            header {
              display: flex;
              height: $navbar-height-mobile;
              padding: 0 16px 32px 16px;

              .define-logo {
                display: flex;
                align-items: center;

                img.define-icon {
                  width: 32px;
                  height: 32px;
                }

                .define-text {
                  transform: scale(0.8);

                  img {
                    height: 22px;
                  }

                  .text__sitcon,
                  .text__2020 {
                    font-size: 12px;
                  }
                }
              }

              .close-button-container {
                margin-left: auto;
                height: 48px;

                span {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 48px;
                  height: 48px;
                  font-size: 56px;
                  transform: rotate(45deg) translate(12px, -6px);
                }
              }
            }

            .menu__item {
              display: flex;
              align-items: center;
              width: 60%;
              margin-left: auto;
              padding: 16px;
              border-radius: 10px;
              transform: skewX(-10deg) translateX(32px);

              span {
                margin-left: auto;
                transform: skewX(10deg) translateX(-40px);
              }

              &.active,
              &:hover {
                background: $black;
                color: $white;
              }
            }
          }
        }
      }
    }
  }
}

</style>