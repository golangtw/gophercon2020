<template>
  <div id="agenda" class="main-container">
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
    <div id="agenda" class="main-container">
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
      <agenda-list-item-detail
        v-model="showDetail"
        :session="selectedSession"
        :speaker="getSpeaker(selectedSession)"
      ></agenda-list-item-detail>
    </div>
  </div>
</template>

<script lang="ts">
import { markdown } from 'markdown';
import { Component, Watch, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import sessionData from '@/../public/json/session.json';

import { DeviceType } from '@/store/types/app';
import LogoTop from '../components/LogoTop.vue';
import AgendaList from '@/components/AgendaList/AgendaList.vue';
import AgendaListItem from '@/components/AgendaList/AgendaListItem.vue';
import AgendaListItemDetail from '@/components/AgendaList/AgendaListItemDetail.vue';

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
  note: string;
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

  @Watch('showDetail')
  private onChangeShowDetail(newValue: boolean) {
    if (!newValue) {
      this.selectedSession = { ...emptySession };
    }
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

  private getSpeakerName(session: Session) {
    const speaker = this.getSpeaker(session);
    return speaker ? speaker.zh.name : '';
  }

  private selectSession(session: Session) {
    this.selectedSession = session;
    this.showDetail = true;
  }
}
</script>
