<template>
  <div id="home" class="main-container"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  public mounted () {
    // Temprary redirect to CFP.
    this.$router.push({
      name: 'CFP'
    });
  }
}
</script>
