<template>
  <div id="nav" class="navbar">
    <nav class="menu-container">
      <div class="logo"></div>
      <div class="menu">
        <div
          v-for="item in menu"
          :key="item.name"
          :class="{ active: $route.name.includes(item.name) }"
          class="menu-item"
        >
          <router-link 
            :to="item.path"
            class="font-bold"
          >
            {{ item.meta.label }}
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import { MenuItem } from '../store/types/menu';

@Component
export default class Navbar extends Vue {
  @Getter('menu', { namespace: 'menu' })
  private menu!: MenuItem[];
}
</script>
