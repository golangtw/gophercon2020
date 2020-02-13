<template>
  <div id="agenda" class="main-container">
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
import { Route } from 'vue-router';

import { Component, Watch, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import CCIPSessionTable from '@ccip-app/session-table';

import sessionData from '@/../public/json/session.json';
import sessionDOMString from '@/../template/session.mod';

import { DeviceType } from '@/store/types/app';

import head from '@/util/head';

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
      this.setMeta();
    }
  }

  public mounted () {
    this.handleSessionPopup();
    this.setMeta();
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

  private setMeta (): void {
    head.title('議程表');
    head.ogTitle('議程表');
    head.ogDescription('SITCON 2020 邀請身為學生的你，向大家分享您的經驗與技術，期待您能在演講桌前，與我們一起 #define student。');
    head.ogUrl('https://sitcon.org/2020/agenda/');
    head.ogImage('https://sitcon.org/2020/img/og.png');
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
