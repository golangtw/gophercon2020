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

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    containerWidth: {
      type: Number,
      required: true
    },
    containerHeight: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    cols: {
      type: Number,
      required: true
    },
    rows: {
      type: Number,
      required: true
    },
    gap: {
      type: Number,
      required: true
    }
  }
})
export default class Sight extends Vue {
}
</script>
