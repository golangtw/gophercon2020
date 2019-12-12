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
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

const namespace: string = 'app';

@Component({
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: false
    },
    content: {
      type: String,
      required: true
    }
  }
})
export default class Popup extends Vue {
  @Action('togglePopup', { namespace }) private togglePopup: any;

  private closePopup (): void {
    this.$router.push({ query: {} })
    this.togglePopup(false);
  }
}
</script>
