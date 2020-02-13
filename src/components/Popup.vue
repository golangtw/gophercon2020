<template>
  <div
    v-if="isOpen"
    class="popup-container"
  >
    <main class="popup-placeholder">
      <div
        class="popup-close" 
        @click="closePopup()"
      />
      <div
        class="popup-close"
        @click="closePopup()"
      >
        <font-awesome-icon :icon="['fas', 'times']"/>
      </div>
      <div class="popup-content-box">
        <article
          v-html="content"
          class="popup-content"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import head from '@/util/head';

@Component
export default class Popup extends Vue {
  @Prop({ default: false }) private isOpen!: boolean;
  @Prop({ required: true }) private content!: string;

  @Action('togglePopup', { namespace: 'app' }) private togglePopup!: (status: boolean) => void;
  @Action('setPopupOffsetTop', { namespace: 'app' }) private setPopupOffsetTop!: (offset: number) => void;
  @Getter('popupOffsetTop', { namespace: 'app' }) private popupOffsetTop!: number;
  @Getter('isPopup', { namespace: 'app' }) private isPopup!: boolean;

  @Watch('isPopup')
  public onChangePopup (newVal: boolean) {
    if (newVal) {
      this.detectMetaContent();
    }
  }

  public mounted () {
    this.detectMetaContent();
  }

  private closePopup (): void {
    this.$router.go(-1);
  }

  private detectMetaContent (): void {
    const virtualElement: HTMLElement = document.createElement('pre');
    virtualElement.innerHTML = this.content;

    const metaContentElement = virtualElement.querySelector('#meta-content') as HTMLElement;
    if (metaContentElement) {
      const metaContent = JSON.parse(metaContentElement.innerText);

      if (metaContent && metaContent.title) {
        head.title(metaContent.title);
        head.ogTitle(metaContent.title);
        if (metaContent.description) { head.ogDescription(metaContent.description); }
        if (metaContent.image) { head.ogImage(metaContent.image); }
        if (metaContent.url) { head.ogUrl(metaContent.url); }
      }
    }
  }
}
</script>
