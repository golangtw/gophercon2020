<template>
  <div>
    <div id="sponsor" :class="containerClasses">
      <LogoTop v-if="$store.state.app.device !== 'mobile'" />
      <div class="background-image">
        <div class="image-wrapper">
          <img
            src="https://gophercon.golang.tw/2020/img/subpage-bg.png"
            srcset="
              https://gophercon.golang.tw/2020/img/subpage-bg@2x.png 2x,
              https://gophercon.golang.tw/2020/img/subpage-bg@3x.png 3x
            "
            class="Group-9"
          />
          <img
            src="https://gophercon.golang.tw/2020/img/graphic-schedule-1.png"
            srcset="
              https://gophercon.golang.tw/2020/img/graphic-schedule-1@2x.png 2x,
              https://gophercon.golang.tw/2020/img/graphic-schedule-1@3x.png 3x
            "
            class="schedule-1"
          />
          <img
            src="https://gophercon.golang.tw/2020/img/graphic-schedule-2.png"
            srcset="
              https://gophercon.golang.tw/2020/img/graphic-schedule-2@2x.png 2x,
              https://gophercon.golang.tw/2020/img/graphic-schedule-2@3x.png 3x
            "
            class="schedule-2"
          />
        </div>
      </div>
      <div class="content">
        <div class="card-container individual-sponsor">
          <div class="card">
            <h2 class="font-black subtitle">議程資訊</h2>
          </div>
        </div>
        <div class="sponsor-wrapper">
          <agenda-list>
            <agenda-list-item
              v-for="(session, i) in sessionData.sessions"
              :key="i"
              :time="getStartTime(session)"
              :title="session.zh.title"
              :speaker="getSpeakerName(session)"
              @click="selectSession(session)"
            >
            </agenda-list-item>
          </agenda-list>
        </div>
      </div>
    </div>
    <agenda-list-item-detail
      v-model="showDetail"
      :session="selectedSession"
      :speaker="getSpeaker(selectedSession)"
      :on-click-next="onClickNext"
      :on-click-prev="onClickPrev"
    ></agenda-list-item-detail>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

import sessionData from '@/../public/json/session.json';

import LogoTop from '../components/LogoTop.vue';
import AgendaList from '@/components/AgendaList/AgendaList.vue';
import AgendaListItem from '@/components/AgendaList/AgendaListItem.vue';
import AgendaListItemDetail from '@/components/AgendaList/AgendaListItemDetail.vue';

import head from '@/util/head';

interface SessionMetadata {
  title: string;
  description: string;
}

interface SpeakerMetadata {
  name: string;
  bio: string;
}

export interface Session {
  id: string;
  start: string;
  end: string;
  note: string | null;
  zh: SessionMetadata;
  speakers: string[];
}

export interface Speaker {
  id: string;
  avatar: string;
  zh: SpeakerMetadata;
}

export const getFormattedTime = (d: string) => {
  const date = new Date(d);
  const padUnit = (t: number) => `${t}`.padStart(2, '0');
  const hours = padUnit(date.getHours());
  const minutes = padUnit(date.getMinutes());
  return `${hours}:${minutes}`;
};

const emptySession: Session = {
  id: '',
  start: '',
  end: '',
  note: '',
  speakers: [],
  zh: { title: '', description: '' },
};
const emptySpeaker: Speaker = {
  id: '',
  avatar: '',
  zh: { name: '', bio: '' },
};

@Component({
  components: {
    LogoTop,
    AgendaList,
    AgendaListItem,
    AgendaListItemDetail,
  },
})
export default class Agenda extends Vue {
  private sessionData = sessionData;
  private showDetail = false;
  private selectedSession: Session = emptySession;
  private containerClasses = { container: true, '--is-showing-detail': false };

  public async mounted() {
    const { sid } = this.$route.params;
    if (!sid) {
      return;
    }
    const session = this.sessionData.sessions.find((s) => s.id === sid) || {
      ...emptySession,
    };
    await this.selectSession(session);
  }

  @Watch('showDetail')
  private onChangeShowDetail(newValue: boolean) {
    this.containerClasses['--is-showing-detail'] = newValue;

    if (!newValue) {
      this.selectedSession = { ...emptySession };
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }
  @Watch('selectedSession')
  private onChangeSelectedSession(newValue: Session) {
    this.selectSession(newValue);
    this.setMetaContent(newValue);
  }

  private getStartTime(session: Session) {
    return getFormattedTime(session.start);
  }

  private getSpeaker(session: Session): Speaker {
    const notFoundSpeaker: Speaker = { ...emptySpeaker };
    if (!session) {
      return notFoundSpeaker;
    }
    const [speakerId] = session.speakers;
    return (
      this.sessionData.speakers.find((s) => s.id === speakerId) ||
      notFoundSpeaker
    );
  }

  private getIndexes(session: Session) {
    const currentId = session.id;
    const current = this.sessionData.sessions.findIndex(
      (s) => s.id == currentId
    );
    const sessionCount = this.sessionData.sessions.length;
    const next = current + 1 !== sessionCount ? current + 1 : 0;
    const prev = current !== 0 ? current - 1 : sessionCount - 1;
    return {
      current,
      next,
      prev,
    };
  }

  private onClickNext() {
    const { next } = this.getIndexes(this.selectedSession);
    this.selectedSession = this.sessionData.sessions[next];
  }

  private onClickPrev() {
    const { prev } = this.getIndexes(this.selectedSession);
    this.selectedSession = this.sessionData.sessions[prev];
  }

  private getSpeakerName(session: Session) {
    const speaker = this.getSpeaker(session);
    return speaker ? speaker.zh.name : '';
  }

  private async selectSession(session: Session) {
    if (!session.id) {
      await this.$router.push({ name: 'Agenda' });
      return;
    }
    this.selectedSession = session;
    this.showDetail = true;
    await this.$router.push({
      name: 'AgendaView',
      params: { sid: session.id },
    });
  }

  private setMetaContent(session: Session) {
    const { title, description } = session.zh;
    head.title(title);
    head.ogTitle(title);
    if (description) {
      head.ogDescription(description);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/variables.scss';

.container {
  &.--is-showing-detail {
    filter: blur(10px);
    overflow-y: hidden;
  }

  .image-wrapper {
    position: relative;
  }

  .Group-9 {
    &-container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    width: 100%;
    height: auto;
  }

  .schedule-1 {
    position: absolute;
    left: 0;
    bottom: 0;
    visibility: hidden;

    @include for-size(md) {
      visibility: visible;
    }
  }
  .schedule-2 {
    position: absolute;
    right: 5%;
    bottom: 59%;
    visibility: hidden;

    @include for-size(md) {
      visibility: visible;
    }
  }

  .sponsor-wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>
