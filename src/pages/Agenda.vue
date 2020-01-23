<template>
  <div 
    id="session"
    class="main-container"
    :class="{ 'popuped': isPopup }"
    :style="{ top: `${popupOffsetTop * -1}px` }"
  >
    <CCIPSessionTable
      :sessionData="sessionData"
      :rooms="['R2', 'R0', 'R1', 'R3', 'S']"
      :isMobile="isMobile()"
      :isPopup.sync="popUp"
      :popUpSession.sync="popUpSession"
    />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import CCIPSessionTable from '@ccip-app/session-table';

import sessionData from '@/../public/json/session.json';
import sessionDOMString from '@/../template/session.mod';

import { DeviceType } from '@/store/types/app';

@Component({
  components: {
    CCIPSessionTable
  }
})
export default class Agenda extends Vue {
  @Action('toggleTheme', { namespace: 'app' }) private toggleTheme!: () => void;
  @Action('togglePopup', { namespace: 'app' }) private togglePopup!: (status: boolean) => void;
  @Action('togglePopupContent', { namespace: 'app' }) private togglePopupContent!: (content: string) => void;
  @Action('setPopupOffsetTop', { namespace: 'app' }) private setPopupOffsetTop!: (offset: number) => void;
  @Getter('isPopup', { namespace: 'app' }) private isPopup: any;
  @Getter('device', { namespace: 'app' }) private device!: DeviceType;
  @Getter('popupOffsetTop', { namespace: 'app' }) private popupOffsetTop!: number;

  private sessionData = sessionData;
  private popUp = false;
  private popUpSession = {};

  @Watch('popUp')
  public onChangeInnerPopup (newVal: boolean) {
    this.processPopup(newVal);
  }

  @Watch('isPopup')
  public onChangePopup (newVal: boolean) {
    this.processPopup(newVal);
  }

  private isMobile (): boolean {
    return this.device === DeviceType.MOBILE;
  }

  private processPopup (isPopup: boolean): void {
    if (isPopup) {
      this.togglePopup(true);

      const result = JSON.parse(JSON.stringify(this.popUpSession as any));
      result.speakers = result.speakers.map((id: string) => (JSON.parse(JSON.stringify(this.getSpeaker(id)))));

      this.togglePopupContent(sessionDOMString(result));
      this.setPopupOffsetTop(document.documentElement.scrollTop);
    } else {
      this.popUp = false;
      this.popUpSession = {};
    }
  }

  private getSpeaker (id: string): any {
    return this.sessionData.speakers.find((speaker) => (speaker.id === id));
  }
}
</script>
