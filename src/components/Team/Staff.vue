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
    <div v-for="group in staffData" :key="`staff-group-${group.name}`" class="staff-group">
      <h2 class="level group-name">{{ group.name }}</h2>
      <p class="group-intro">{{ group.description }}</p>
      <div class="staff-container">
        <div
          v-for="member in group.members"
          :key="`${group.name}-${member.name}`"
          class="staff-intro"
        >
          <img
            :src="`//www.gravatar.com/avatar/${member.emailHash}?s=320&d=https://sitcon.org/2019/static/img/default_avatar.png&r=g`"
          />
          <p>{{ member.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import staffData from '@/../public/json/staff.json';
@Component
export default class Staff extends Vue {
  public staffData = staffData;
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
  padding: 3em 2em 1.5em 2em;
  background-position-x: 100px;
  overflow-x: visible;

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
      // margin-right: 80px;
      margin-bottom: 1.5em;
      width: 180px;

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
        font-size: 1.25em;
        margin-top: 0.9em;
        word-wrap: break-word;
        text-align: center;
      }
    }
  }
}
</style>