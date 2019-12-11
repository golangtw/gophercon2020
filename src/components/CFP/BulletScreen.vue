<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
  >
    <text
      v-for="index in quality"
      :key="`bullet-${index}`"
      :style="{ 'font-size': `${fontSizeSets[index - 1]}px` }"
      :x="coordinates[index - 1].x"
      :y="coordinates[index - 1].y"
      :font-weight="fontWeightSets[index - 1]"
      :opacity="active ? 1 : 0"
      font-family="Noto Sans TC"
      font-style="italic"
    >
      {{ msg }}
    </text>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

const fontWeights = [400, 500, 700, 900];

interface Vectory {
    x: number;
    y: number;
  }

@Component
export default class BulletScreen extends Vue {
  @Prop({ default: '' }) private msg!: string;
  @Prop() private width!: number;
  @Prop() private height!: number;
  @Prop() private active!: boolean;
  @Prop({ default: 50 }) private quality!: number;

  private accelerations: number[] = Array(this.quality).fill(0);
  private fontWeightSets: number[] = Array(this.quality).fill(400);
  private fontSizeSets: number[] = Array(this.quality).fill(24);
  private coordinates: Vectory[] = Array(this.quality).fill({ x: 0, y: 0 });

  @Watch('active', { immediate: true, deep: true })
  public onActiveChange (newVal: boolean, oldVal: boolean) {
    this.initPosition();

    let intervalHook;

    if (newVal === true && oldVal === false) {
      intervalHook = setInterval(this.accelerator, 1);
    } else {
      clearInterval(intervalHook);
      this.initPosition();
    }
  }

  public mounted () {
    this.initPosition();
  }

  private randomSize (min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private randomSpeed (min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private randomPositionY (): number {
    return 50 + Math.random() * (this.height - 25);
  }

  private randomFontWeight (): number {
    return fontWeights[Math.floor(Math.random() * fontWeights.length)];
  }

  private calcAcceleration (index: number): number {
    const textLengthRaito = (this.msg.replace(/[^\x00-\xff]/g, 'xx').length * (this.fontSizeSets[index] + 2));
    const base = 10;
    const randomlized = (Math.random() - 0.5) * 25;
    return base * textLengthRaito / (this.width * 1.5) + randomlized;
  }

  private initPosition (): void {
    const textLength = this.msg.replace(/[^\x00-\xff]/g, 'xx').length;
    const randomlizedBase = (Math.random() - 0.5) * 100 - 100;

    this.fontWeightSets = this.fontWeightSets.map(() => (this.randomFontWeight()));
    this.fontSizeSets = this.fontSizeSets.map(() => (this.randomSize(24, 200)));
    this.accelerations = this.accelerations.map((_, index: number) => (this.calcAcceleration(index)));
    this.coordinates = this.coordinates.map((originVal: Vectory, index: number) => ({
      x: randomlizedBase - textLength * (this.fontSizeSets[index] + 2),
      y: this.randomPositionY()
    }));
  }

  private accelerator (): void {
    this.coordinates = this.coordinates.map((originVal, index) => ({
      x: originVal.x + this.accelerations[index],
      y: originVal.y
    }));
  }
}
</script>
