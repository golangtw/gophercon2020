<template>
  <div id="staff">
    <div class="recruit">
      <p>SITCON 年會每年皆是許多志工奉獻與時間精神所舉辦；若你對參與 SITCON 年會的籌備有興趣，歡迎填寫表單，我們將在明年活動開始籌備時通知您！</p>
      <p>
        <a
          href="https://forms.gle/1J9fxQP2ux55PJXC9"
          class="tone-trans form-link"
          target="_blank"
          rel="noopener"
        >表單連結</a>
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
  font-size: 16pt;
  line-height: 1.5em;
  @media screen and (max-width: 900px) {
    font-size: 14pt;
  }
  @media screen and (max-width: 540px) {
    font-size: 10pt;
  }
}
a {
  text-decoration: none;
}

.recruit {
  display: flex;
  flex-direction: column;
  margin-bottom: 4em;
  p {
    text-align: start;
    margin-bottom: 1em;
  }

  .form-link {
    text-decoration: underline;
  }
}

.staff-group {
  display: flex;
  flex-direction: column;
  margin-left: -200px;
  margin-right: -200px;
  padding: 0 200px;

  @media screen and (max-width: 1280px) {
    margin-left: -100px;
    margin-right: -100px;
    padding: 0 100px;
  }

  @media screen and (max-width: 900px) {
    margin-left: -100px;
    margin-right: -16px;
    padding: 0 16px 0 100px;
  }

  &:nth-child(even) {
    background: #e3e3e3;
    img {
      border-color: white !important;
    }
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
      margin-bottom: 1.5em;
      width: 180px;
      @media screen and (max-width: 900px) {
        width: 18vw;
      }
      @media screen and (max-width: 540px) {
        width: 20vw;
      }

      img {
        // Icon of staff
        object-fit: contain;
        width: 92px;
        height: 92px;
        @media screen and (max-width: 900px) {
          width: 75px;
          height: 75px;
        }
        @media screen and (max-width: 540px) {
          width: 50px;
          height: 50px;
        }

        border-radius: 15%;
        background: black; // test
        border: #e3e3e3 3px solid;
      }
      p {
        // Name of staff
        margin-top: 0.9em;
        word-wrap: break-word;
        text-align: center;
        font-size: 1.25em;
        @media screen and (max-width: 900px) {
          font-size: 1em;
          margin-top: 0.75em;
        }
        @media screen and (max-width: 540px) {
          font-size: 0.75em;
          margin-top: 0.33em;
        }
      }
    }
  }
}
</style>