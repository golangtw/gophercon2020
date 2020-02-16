<template>
  <div id="you">
    <div class="staff-spotlight">
      <video id="preview" controls autoplay playinline/>
      <canvas id="snapshot"></canvas>
      <div class="capture">
        <font-awesome-icon :icon="['fas', 'camera']" />
      </div>
      <p class="paragraph">提示：此頁面將使用您的相機鏡頭拍攝大頭照，請先授與我們您的相機使用權限。</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class You extends Vue {
  private preview!: HTMLMediaElement;
  private snapshot!: HTMLCanvasElement;
  private videoTracks!: any;

  public mounted () {
    this.prepareEnviorment();
    this.setupCamera();
  }

  private prepareEnviorment (): void {
    this.preview = document.querySelector('#preview') as HTMLMediaElement;
    this.snapshot = document.querySelector('#snapshot') as HTMLCanvasElement;
  }

  private setupCamera (): void {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(this.previewMedia);
  }

  private previewMedia (stream: any): void {
    this.preview.srcObject = stream;
    this.videoTracks = stream.getVideoTracks();
  }

  private captureMedia (): void {
    const ctx = this.snapshot.getContext('2d') as CanvasRenderingContext2D;
    ctx.drawImage(this.preview as CanvasImageSource, 0, 0, this.snapshot.width, this.snapshot.height);

    this.videoTracks.forEach((track: any) => {
      track.stop();
    });
  }
}
</script>
