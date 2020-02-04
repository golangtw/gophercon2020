<template>
  <div class="sponsor-container main-container">
    <div class="sitcon-group">
      <p>SITCON團隊</p>
    </div>
    <div class="tab-container card-container">
      <div class="tab card toggle">
        <p>
          <span>贊助</span>
          <span>Sponsor</span>
        </p>
      </div>
      <div class="tab card">
        <p>
          <span>工作人員</span>
          <span>Staff</span>
        </p>
      </div>
      <div class="tab card">
        <p>
          <span>來參加的你！</span>
          <span>You!</span>
        </p>
      </div>
    </div>
    <h2 class="level">級別</h2>
    <div class="card-container org-container">
      <div class="card org">
        <img />
        <h3>乾爹名稱</h3>
        <p>我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹</p>
      </div>
      <div class="card org">
        <img />
        <h3>乾爹名稱</h3>
        <p>我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹</p>
      </div>
      <div class="card org">
        <img />
        <h3>乾爹名稱</h3>
        <p>我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹</p>
      </div>
      <div class="card org">
        <img />
        <h3>乾爹名稱</h3>
        <p>我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Team extends Vue {

}
</script>

<style lang="scss" scoped>
.sponsor-container {
  // padding-left: 180px;
  // padding-right: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  h2.level {
    font-size: 2em;
    font-weight: bold;
    margin: 2em auto;
  }

  .sitcon-group {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 2em;
    width: 100%;
    margin-bottom: 2em;

    p {
      font-weight: bold;
      width: 11em;
      padding-bottom: 0.66em;
      border-bottom: 6px solid black;
      border-radius: 8px;
    }
  }

  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    .card {
      display: flex;
      flex-direction: column;
      width: 370px;
      padding: 24px;
      box-sizing: border-box;
    }
  }

  .tab-container {
    .tab {
      border: solid black 4px;
      border-radius: 12px;
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
          // title
          font-size: 3em;
          margin-bottom: 0.33em;
        }

        span:last-child {
          font-size: 1.33em;
        }
      }
    }
  }

  .org-container {
    margin-bottom: 3em;
    box-sizing: border-box;

    .org {
      border: 6px solid black;
      border-radius: 18px;
      margin-bottom: 10em;
      min-height: 540px;

      img {
        // icon
        width: 100%;
        height: 200px;
        margin-bottom: 3em;
      }
      h3 {
        // dad's name
        font-size: 1.5em;
        margin-bottom: 1em;
        font-weight: bold;
      }
      p {
        // dad's info
        font-size: 1.2em;
        line-height: 1.66em;
      }
    }
  }
}
</style>