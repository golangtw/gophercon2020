<template>
  <div id="nav" :class="{ 'popuped': isPopup }" class="navbar">
    <nav class="menu-container">
      <div class="logo bar">
        <div class="logo-container">
          <img src="/favicon.png" class="navbar-icon" />
          <p class="sitcon20">
            <span class="title">SITCON</span>
            <span class="subtitle">20</span>
          </p>
        </div>
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
            <img src="/favicon.png" class="navbar-icon" />
          </div>
          <div class="title-container">
            <p class="define">define</p>
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
          <router-link :to="item.path" class="font-bold">{{ item.meta.label }}</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { MenuItem } from '../store/types/menu';

@Component
export default class Navbar extends Vue {
  @Action('toggleMenu', { namespace: 'menu' }) private toggleMenu!: () => void;
  @Getter('menu', { namespace: 'menu' }) private menu!: MenuItem[];
  @Getter('toggle', { namespace: 'menu' }) private isMenuToggled!: boolean;
  @Getter('isPopup', { namespace: 'app' }) private isPopup!: boolean;
}
</script>
