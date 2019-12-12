<template>
  <svg
    v-if="width > 0 && height > 0"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="containerWidth"
    :height="containerHeight"
    :viewBox="`0 0 ${containerWidth} ${containerHeight}`">
  >
    <defs>
      <filter id="f1" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
      </filter>
    </defs>
    <g
      v-for="x in cols"
      :key="`col-${x}`"
    >
      <rect
        v-for="y in rows"
        :key="`row-${y}`"
        :x="(x - 1) * (width + gap)"
        :y="(y - 1) * (height + gap)"
        :width="width"
        :height="height"
        :class="`box-${x}-${y}`"
        class="box"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Sight extends Vue {
  @Prop({ required: true }) private containerWidth!: number;
  @Prop({ required: true }) private containerHeight!: number;
  @Prop({ required: true }) private width!: number;
  @Prop({ required: true }) private height!: number;
  @Prop({ required: true }) private cols!: number;
  @Prop({ required: true }) private rows!: number;
  @Prop({ required: true }) private gap!: number;
}
</script>
