<template>
  <div id="staff">
    <div class="recruit">
      <p>SITCON 年會每年皆是許多志工奉獻與時間精神所舉辦</p>
      <p>若你對參與 SITCON 年會的籌備有興趣，歡迎填表單 blablabla</p>
      <p>
        <a href="#">表單連結</a>
      </p>
    </div>

    <!-- repeating staff-group -->
    <div class="staff-group">
      <h2 class="level group-name">總召組</h2>
      <p class="group-intro">掌握協調年會進度。我是總召組我是總召組我是總召組我是總召組我是總召組我是總召組。感恩社會主義鐵拳之 @DevilTea 打假除亂。</p>
      <div class="staff-container">
        <!-- repeating staff-intro -->
        <div class="staff-intro">
          <img />
          <p>一顆蛋</p>
        </div>
        <div class="staff-intro">
          <img />
          <p>一顆蛋</p>
        </div>
        <div class="staff-intro">
          <img />
          <p>一顆蛋</p>
        </div>
        <div class="staff-intro">
          <img />
          <p>一顆蛋</p>
        </div>
      </div>
    </div>
    
    <div class="staff-group">
      <h2 class="level group-name">總召組</h2>
      <p class="group-intro">掌握協調年會進度。我是總召組我是總召組我是總召組我是總召組我是總召組我是總召組。感恩社會主義鐵拳之 @DevilTea 打假除亂。</p>
      <div class="staff-container">
        <!-- repeating staff-intro -->
        <div class="staff-intro">
          <img />
          <p>一顆蛋</p>
        </div>
        <div class="staff-intro">
          <img />
          <p>一顆蛋</p>
        </div>
        <div class="staff-intro">
          <img />
          <p>一顆蛋</p>
        </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
        <div class="staff-intro"> <img /> <p>一顆蛋</p> </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Staff extends Vue {
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/team";

// Basic
p,
span {
  font-size: 1.66em;
  line-height: 1.5em;
}
a {
  text-decoration: none;
  color: inherit;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
}

.recruit {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4em;
  p {
    text-align: center;
  }
}

.staff-group {

  display: flex;
  flex-direction: column;
  padding: 3em 2em;
  background-position-x: 100px;

  &:nth-child(even) {
    background: #e3e3e3;
    img {
      border-color: white !important;
    }
  }

  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -128px;
    right: -128px;
    background: inherit;
    z-index: -1;
  }

  .group-name {
    text-align: left;
    margin-bottom: 0.85em;
  }
  .group-intro {
    margin-bottom: 2.5em;
  }
  .staff-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;

    
    .staff-intro {
      // Single staff
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 80px;

      img {
        // Icon of staff
        width: 92px;
        height: 92px;
        border-radius: 15%;
        background: black; // test
        border: #e3e3e3 3px solid;
      }
      p {
        // Name of staff
        font-size: 1.44em;
        margin-top: 0.9em;
      }
    }
  }
}
</style>