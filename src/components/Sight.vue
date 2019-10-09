<template>
  <svg
    v-if="width > 0 && height > 0"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`">
    <defs>
      <filter id="f1" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
      </filter>
    </defs>
    <g stroke="rgb(59, 156, 96)"
      stroke-opacity="0.26"
      fill="none"
      >
      <path v-for="x in steps(width / 16, width / 8 - 6, 6)"
        :key="x"
        :d="`M ${width - x} 0 L ${spot.x} ${spot.y}`"
        />
      <path v-for="x in steps(width / 8 - 3, width / 4, 6)"
        :key="x"
        :d="`M ${width - x} 0 L ${spot.x} ${spot.y}`"
        stroke-width="2"
        />
      <path v-for="x in steps(width / 4 + 3, width / 8 * 3, 6)"
        :key="x"
        :d="`M ${width - x} 0 L ${spot.x} ${spot.y}`"
        />
    </g>
    <g stroke="rgb(59, 156, 96)"
      stroke-opacity="0.41"
      fill="none"
      >
      <path v-for="x in steps(width / 16, width / 8 - 6, 6)"
        :key="x"
        :d="`M ${width - x} ${height + 1} L ${spot.x} ${spot.y}`"
        />
      <path v-for="x in steps(width / 8 - 3, width / 4, 6)"
        :key="x"
        :d="`M ${width - x} ${height + 1} L ${spot.x} ${spot.y}`"
        stroke-width="2"
        />
      <path v-for="x in steps(width / 4 + 3, width / 8 * 3, 6)"
        :key="x"
        :d="`M ${width - x} ${height + 1} L ${spot.x} ${spot.y}`"
        />
    </g>
    <g stroke="rgb(59, 156, 96)"
      stroke-opacity="0.08"
      fill="none"
      >
      <path v-for="dy in steps(width / 16, width / 8 - 6, 6)"
        :key="dy"
        :d="`M 0 ${(height - dy) / 4 + height / 2} L ${spot.x} ${spot.y}`"
        />
      <path v-for="dy in steps(width / 8 - 3, width / 4, 6)"
        :key="dy"
        :d="`M 0 ${(height - dy) / 4 + height / 2} L ${spot.x} ${spot.y}`"
        stroke-width="2"
        />
      <path v-for="dy in steps(width / 4 + 3, width / 8 * 3, 6)"
        :key="dy"
        :d="`M 0 ${(height - dy) / 4 + height / 2} L ${spot.x} ${spot.y}`"
        />
    </g>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    spot: {
      type: Object,
      required: true
    }
  }
})
export default class Sight extends Vue {
  private steps (start: number, end: number, step: number) {
    const generator = function* () {
      for (let i = start; i < end; i += step) {
        yield i;
      }
    };
    return [...generator()];
  }
}
</script>