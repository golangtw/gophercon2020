<template>
  <div id="session" class="main-container">
    <CCIPSessionTable
      :sessionData="sessionData"
      :rooms="['R2', 'R0', 'R1', 'R3', 'S']"
      :isMobile="isMobile()"
      :isPopup.sync="isPopup"
      :popUpSession.sync="popUpSession"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import CCIPSessionTable from '@ccip-app/session-table';

import sessionData from '../../public/json/session.json';

import { DeviceType } from '../store/types/app';

@Component({
  components: {
    CCIPSessionTable
  }
})
export default class Session extends Vue {
  @Getter('device', { namespace: 'app' })
  private device!: DeviceType;

  private sessionData = sessionData;
  private isPopup = false;
  private popUpSession = {};

  private isMobile (): boolean {
    return this.device === DeviceType.MOBILE;
  }
}
</script>
