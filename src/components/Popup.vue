<template>
  <main
    v-if="isOpen"
    class="popup-container"
  >
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
    <article
      v-html="content"
      class="popup-content"
    />
  </main>
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
      window.scrollTo({ top: 0 });
    }
  }

  public mounted () {
    this.detectMetaContent();
  }

  private closePopup (): void {
    if (this.$route.name === 'CFP') {
      this.$router.push({ query: {} });
    }

    this.togglePopup(false);
    setTimeout(() => {
      window.scrollTo({ top: this.popupOffsetTop });
    }, 10);
    setTimeout(() => {
      this.setPopupOffsetTop(0);
    }, 100);
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
