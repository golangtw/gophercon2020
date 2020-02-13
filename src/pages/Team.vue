<template>
  <div id="team" class="main-container">
    <div class="main-content">
      <div
        v-if="!isInApp()"
        class="tab-container"
      >
        <div
          v-for="tab in tabs"
          :key="`tab-${tab.name}`"
          class="tab"
          :class="{ toggle: tab.name === $route.name }"
          @click="$router.push({ name: tab.name })"
        >
          <p>
            <span>{{ tab.meta.label[0] }}</span>
            <span>{{ tab.meta.label[1] }}</span>
          </p>
        </div>
      </div>
      <transition :name="transitionDirect.toLowerCase()">
        <keep-alive>
          <router-view class="teams-subview transition-group"/>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Route } from 'vue-router';

import { Component, Watch, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import { AppMode } from '@/store/types/app';
import { MenuItem } from '@/store/types/menu';

enum TransitionDirect {
  SLIDE_LEFT = 'slide-left',
  SLIDE_RIGHT = 'slide-right'
}

@Component
export default class Team extends Vue {
  @Getter('mode', { namespace: 'app' }) private mode!: AppMode;
  @Getter('menu', { namespace: 'menu' }) private menu!: MenuItem[];

  private tabs: MenuItem[] = [];
  private transitionDirect: TransitionDirect = TransitionDirect.SLIDE_LEFT;

  @Watch('$route')
  public onChangeRoute (to: Route, from: Route) {
    this.detectTransitionDirect(to, from);
  }

  public mounted () {
    this.tabs = this.menu.filter((item) => item.name === 'Team')[0].children as MenuItem[];
  }

  private isInApp (): boolean {
    return this.mode === AppMode.APP;
  }

  private detectTransitionDirect (to: Route, from: Route): void {
    if (to.meta.index < from.meta.index) {
      this.transitionDirect = TransitionDirect.SLIDE_RIGHT;
    } else {
      this.transitionDirect = TransitionDirect.SLIDE_LEFT;
    }
  }
}
</script>
