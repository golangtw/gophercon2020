<template>
  <div id="agenda" class="main-container">
    <a href="/2020/" class="Logo">
      <img src="https://gophercon.golang.tw/2020/img/logo.svg" class="Logo">
    </a>
    <div class="background-image">
      <img src="https://gophercon.golang.tw/2020/img/subpage-bg.png"
           srcset="https://gophercon.golang.tw/2020/img/subpage-bg@2x.png 2x,https://gophercon.golang.tw/2020/img/subpage-bg@3x.png 3x"
           class="Group-9">
    </div>
    <div id="agenda" class="main-container">
      <div id="agenda" class="main-container" style="margin-top:150px">
        <CCIPSessionTable
          :sessionData="sessionData"
          :rooms="['R0', 'R1']"
          :isMobile="isMobile()"
          :isPopup.sync="popUp"
          :popUpSession.sync="popUpSession"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Route } from 'vue-router';

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
  @Action('setPopupOffsetTop', { namespace: 'app' }) private setPopupOffsetTop!: (offset: number) => Promise<void>;
  @Getter('isPopup', { namespace: 'app' }) private isPopup!: boolean;
  @Getter('device', { namespace: 'app' }) private device!: DeviceType;
  @Getter('popupOffsetTop', { namespace: 'app' }) private popupOffsetTop!: number;

  private sessionData = sessionData;
  private popUp = false;
  private popUpSession = {};

  @Watch('popUp')
  public async onChangeInnerPopup (popuped: boolean) {
    if (popuped) {
      await this.setPopupOffsetTop(document.documentElement.offsetTop);
      this.$router.push({ name: 'AgendaView', params: { sid: (this.popUpSession as any).id }});
    }
  }

  @Watch('isPopup')
  public async onChangePopup (isPopup: boolean) {
    if (isPopup) {
      this.$router.push({ name: 'AgendaView', params: { sid: (this.popUpSession as any).id }});
    } else {
      this.$router.push({ name: 'Agenda' });
    }
  }

  @Watch('$route')
  public onChangeRoute (route: Route) {
    if (route.name === 'AgendaView') {
      this.processPopup();
      this.togglePopup(true);
    } else {
      this.popUp = false;
      this.togglePopup(false);
    }
  }

  public mounted () {
    this.handleSessionPopup();
  }

  private isMobile (): boolean {
    return this.device === DeviceType.MOBILE;
  }

  private processPopup (): void {
    const targetSessionId = this.$route.params.sid as string;
    const targetSession = sessionData.sessions.filter((session) => session.id === targetSessionId)[0];
    const result = this.deepCopy(targetSession);
    result.speakers = result.speakers.map((id: string) => this.deepCopy(this.getSpeaker(id)));
    this.togglePopupContent(sessionDOMString(result));
    this.togglePopup(true);
  }

  private getSpeaker (id: string): any {
    return this.sessionData.speakers.find((speaker) => (speaker.id === id));
  }

  private handleSessionPopup (): void {
    if (this.$route.params.sid) {
      this.popUpSession = this.sessionData.sessions.filter((session) => (session.id === this.$route.params.sid))[0];
      this.processPopup();
    }
  }

  private deepCopy (obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }
}
</script>
