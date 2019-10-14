<template>
  <main
    v-if="isOpen"
    class="popup-container"
  >
    <div class="popup-close">
      <font-awesome-icon :icon="['fas', 'times']"/>
    </div>
    <article
      v-html="content"
      class="popup-content"
    />
  </main>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

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
}
</script>
