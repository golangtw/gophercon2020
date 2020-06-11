<template>
  <nav id="nav" class="navbar">
    <div class="navbar-container">
      <div
        class="logo"
        @click="$router.push({ name: 'Home' })"
      >
        <!--
        <img class="logo-icon__normal" src="@/assets/images/logo-dark.svg" />
        <img class="logo-icon__mobile" src="@/assets/images/favicon.png" />
        -->
        <div class="logo-text">
          <div class="logo-text__gophercon font-bold"><span class="font-black">GopherCon TW</span></div>
          <div class="logo-text__2020 font-bold"><span>2020</span></div>
        </div>
      </div>
      <div class="menu" :class="{ toggled: isMenuToggled }">
        <div class="menu-mask" @click.self="toggleMenu(false)"></div>
        <div class="menu-container">
          <header>
            <div class="define-logo">
              <div class="define-text">
                <div class="logo-text-container">
                  <span class="logo-text__gophercon">GopherCon TW</span>
                  <span class="logo-text__2020">2020</span>
                </div>
              </div>
            </div>
            <div class="close-button-container">
              <span class="close-button" @click.self="toggleMenu(false)">+</span>
            </div>
          </header>
          <router-link
            v-for="item in menu"
            :key="item.name"
            :to="item.path"
            class="menu-item font-bold"
            :class="{ active: $route.name.includes(item.name) }"
          >
            <span>{{ item.meta.label }}</span>
          </router-link>
        </div>
      </div>
      <img
        src="@/assets/images/toggle-button.svg"
        class="toggle-button"
        @click="toggleMenu(!isMenuToggled)"
      />
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
