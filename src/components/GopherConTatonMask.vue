<template>
  <div class="svg-mask-wrapper" :style="{ '--width' : `${width}px` }">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 ${width + 144.58} ${height}`"
    >
      <clipPath id="GopherCon-taton-mask">
        <polygon x="0" y="0" :points="`20,20 ${width},0 ${width},${height} 0,${height}`"/>
        <path
          x="0"
          y="0"
          :transform="`translate(${width - 1}, 200) scale(0.7)`"
          d="M61.06,70.36C92.52,46.3,98.76,1.6,98.76,1.6S61.38-7.28,29.92,16.78c-11.6,8.88-19.9,26.8-25.6,38C2.87,57.64,1.42,60.38,0,63V89.27C15.84,88.9,41.11,85.61,61.06,70.36Z"
        />
        <path
          x="0"
          y="0"
          :transform="`translate(${width - 1}, 200) scale(0.7)`"
          d="M144.58,354A186.67,186.67,0,0,0,0,172.14V301.3l34.22-23.55L0,327.47v53l34.22,49.72L0,406.69V535.85A186.67,186.67,0,0,0,144.58,354Z"
        />
      </clipPath>
      <polygon :points="`20,20 ${width},0 ${width},${height} 0,${height}`"/>
        <path
          x="0"
          y="0"
          :transform="`translate(${width - 1}, 200) scale(0.7)`"
          d="M61.06,70.36C92.52,46.3,98.76,1.6,98.76,1.6S61.38-7.28,29.92,16.78c-11.6,8.88-19.9,26.8-25.6,38C2.87,57.64,1.42,60.38,0,63V89.27C15.84,88.9,41.11,85.61,61.06,70.36Z"
        />
        <path
          x="0"
          y="0"
          :transform="`translate(${width - 1}, 200) scale(0.7)`"
          d="M144.58,354A186.67,186.67,0,0,0,0,172.14V301.3l34.22-23.55L0,327.47v53l34.22,49.72L0,406.69V535.85A186.67,186.67,0,0,0,144.58,354Z"
        />
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GopherConTatonMask extends Vue {
  @Prop({ required: true }) private height!: number;
  @Prop({ required: true }) private width!: number;
}
</script>

<style lang="scss" scope>
.svg-mask-wrapper { 
  position: absolute;
  margin-top: 42px;
  margin-left: 200px;
  width: calc(var(--width) + 144.58px);
  opacity: 0;

  /* Safari 11+ */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      & {
        opacity: 1;

        @media screen and (max-width: 1280px) {
          opacity: 0;
        }
      }
    }
  }

  @media screen and (max-width: 675px) {
    display: none;
  }
}
</style>
