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
  @Action('setPopupOffsetTop', { namespace: 'app' }) private setPopupOffsetTop!: (offset: number) => void;
  @Getter('isPopup', { namespace: 'app' }) private isPopup!: boolean;
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

    if (newVal) {
      this.$router.push({ name: 'AgendaView', params: { sid: (this.popUpSession as any).id }});
    }

    if (!newVal) {
      this.$router.push({ name: 'Agenda' });
      this.setMeta();
    }
  }

  @Watch('$route')
  public onChangeRoute (route: any) {
    if (route.name === 'Agenda') {
      this.togglePopup(false);
    }

    if (route.name === 'AgendaView') {
      this.togglePopup(true);
    }
  }

  public mounted () {
    this.handleSessionPopup();
    this.setMeta();
    window.addEventListener('keyup', this.escHandler);
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
      this.popUp = true;
      this.processPopup(true);
    }
  }

  private escHandler (event: any): void {
    if (event.keyCode === 27 && this.$route.name === 'AgendaView') {
      this.$router.push({ name: 'Agenda' });
    }
  }
}
</script>
