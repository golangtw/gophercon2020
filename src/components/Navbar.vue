<template>
  <div id="nav">
    <nav class="menu">
      <ul>
        <li>
          <router-link></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {}
</script>
