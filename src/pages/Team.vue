<template>
  <div class="main-container team-container">
    <div class="main-title">
      <p>SITCON團隊</p>
    </div>
    <div class="main-content">
      <div class="tab-container">
        <div class="tab toggle">
          <p>
            <span>贊助</span>
            <span>Sponsor</span>
          </p>
        </div>
        <div class="tab">
          <p>
            <span>工作人員</span>
            <span>Staff</span>
          </p>
        </div>
        <div class="tab">
          <p>
            <span>來參加的你！</span>
            <span>You!</span>
          </p>
        </div>
      </div>
      <!-- <Daddy class="content-container" /> -->
      <Staff class="content-container" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Daddy from '@/components/Team/Daddy.vue';
import Staff from '@/components/Team/Staff.vue';

@Component({
  components: { Daddy, Staff }
})
export default class Team extends Vue {
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/team';

.team-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  padding-left: 8em !important;
  padding-right: 8em !important;
  @media screen and (max-width: 1280px) {
    padding-left: 4em !important;
    padding-right: 4em !important;
  }
  @media screen and (max-width: 900px) {
    padding-left: 1em !important;
    padding-right: 1em !important;
  }
}

.main-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 2em;
  width: 100%;

  margin-bottom: 2em;
  @media screen and (max-width: $mobile) {
    margin-bottom: 1em;
  }

  p {
    font-weight: bold;
    width: 11em;

    border-bottom: 4px solid black;
    padding-bottom: 0.66em;
    @media screen and (max-width: $mobile) {
      border-width: 0;
      padding-bottom: initial;
    }
  }
}

.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: $mobile) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
}

// Desktop layout for tab-bar
.tab-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5em;

  .tab {
    width: 28%;
    padding: 18px 1em;
    box-sizing: border-box;
    border: solid black 4px;
    border-radius: 16px !important;
    transform: skewX(-15deg);
    transform-origin: center;

    &.toggle {
      background: black;
      color: white;
    }

    p {
      transform-origin: center;
      transform: skewX(15deg);
      display: flex;
      width: 100%;
      flex-direction: column;
      text-align: center;

      span {
        font-weight: bold;
      }

      span:first-child {
        // tab title (chinese)
        margin-bottom: 0.33em;

        font-size: 2em;
        @media screen and (max-width: 1440px) {
          font-size: 1.8em;
        }
        @media screen and (max-width: 1050px) {
          font-size: 1.33em;
        }
      }

      span:last-child {
        // tab subtitle (english)
        font-size: 1.33em;
        @media screen and (max-width: 1440px) {
          font-size: 1em;
        }
        @media screen and (max-width: 1280px) {
          font-size: 0.75em;
        }
      }
    }
  }
}

// Mobile layout for tab-bar
@media screen and (max-width: $mobile) {
  .tab-container {
    border-radius: 10px;
    background: black;
    padding: 0;
    min-height: 0;
    margin-right: 1em;
    width: 76px;

    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    transform: skewY(-15deg);
    transform-origin: center;

    position: sticky;
    top: 68px;

    .tab {
      width: 100%;
      margin: 0;
      padding: 1em 0.4em 1.5em 0.4em;
      transform: initial;
      border-radius: 10px !important;
      border-width: 4px;

      &:not(:first-child) {
        border-top-width: 0;
      }

      &:not(.toggle) {
        background: white;
      }

      p {
        display: flex;
        flex-direction: row;
        justify-content: center;
        transform-origin: center;
        transform: skewY(15deg);
        align-items: flex-start;
        span {
          writing-mode: vertical-lr;
        }
        span:first-child {
          // Tab title (Chinese)
          font-size: 1.44em;
        }
        span:last-child {
          // Tab subtitle (English)
          font-size: 0.66em;
          margin-left: 0.66em;
          margin-top: 3px;
        }
      }
    }
  }
}

.content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>