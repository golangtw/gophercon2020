<template>
  <div class="sponsor-container main-container">
    <div class="sitcon-group">
      <p>SITCON團隊</p>
    </div>
    <div class="tab-container card-container">
      <div class="tab card">
        <p>贊助</p>
        <p>Sponsor</p>
      </div>
      <div class="tab card">
        <p>工作人員</p>
        <p>Staff</p>
      </div>
      <div class="tab card">
        <p>來參加的你</p>
        <p>You</p>
      </div>
    </div>
    <h2 class="level">級別</h2>
    <div class="card-container org-container">
      <div class="card org">
        <img />
        <h3>乾爹名稱</h3>
        <p>我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹</p>
      </div>
      <div class="card org">
        <img />
        <h3>乾爹名稱</h3>
        <p>我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹</p>
      </div>
      <div class="card org">
        <img />
        <h3>乾爹名稱</h3>
        <p>我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹</p>
      </div>
      <div class="card org">
        <img />
        <h3>乾爹名稱</h3>
        <p>我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹我是乾爹</p>
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
  padding-left: 180px;
  padding-right: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  h2.level {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 1em;
  }

  .sitcon-group {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 2em;
    width: 100%;
    margin-bottom: 2em;
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
      width: 25%;
      padding: 18px 12px;
      background: #eee;
      border-radius: 8px;
    }
  }

  .tab-container {
    margin-bottom: 2em;

    .tab {
      border: solid black 4px;
      p {
        text-align: center;
        font-weight: bold;
      }
      p:first-child {
        // title
        font-size: 2em;
        margin-bottom: 0.33em;
      }
      p:last-child {
        // subtitle
      }
    }
  }

  .org-container {
    .org {
      margin-bottom: 2em;

      img {
        // icon
        width: 100%;
        height: 100px;
        margin-bottom: 1em;
      }
      h3 {
        font-size: 1.5em;
        margin-bottom: 1em;
      }
    }
  }
}
</style>