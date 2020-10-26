<template>
  <div :class="itemDetailClasses">
    <div class="g-agenda-list-item-detail__header">
      <div class="close-detail-button" @click="closeDetail">
        <close-icon />
        <span>回到議程表</span>
      </div>
    </div>
    <div class="g-agenda-list-item-detail__body">
      <div class="g-agenda-list-item-detail-time">
        {{ getTimeDuration() }}
      </div>
      <div class="g-agenda-list-item-detail-title">
        {{ session.zh.title }}
      </div>
      <div class="g-agenda-list-item-detail-description">
        {{ session.zh.description }}
      </div>
      <div class="g-agenda-list-item-detail-link">
        <a :href="session.note">加入此議程的線上共筆</a>
      </div>
      <div class="g-agenda-list-item-detail-about">
        <div class="g-agenda-list-item-detail-about__image">
          <img :src="speaker.avatar" alt="" />
        </div>
        <div class="g-agenda-list-item-detail-about__text">
          <div class="header">關於講者</div>
          <div class="name">
            {{ speaker.zh.name }}
          </div>
          <div class="bio">
            {{ speaker.zh.bio }}
          </div>
        </div>
      </div>
    </div>
    <div class="g-agenda-list-item-detail__prev-action">
      <prev-icon />
    </div>
    <div class="g-agenda-list-item-detail__next-action">
      <next-icon />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import CloseIcon from '@/components/icons/Close.vue';
import NextIcon from '@/components/icons/Next.vue';
import PrevIcon from '@/components/icons/Prev.vue';
import { Session, Speaker, getFormattedTime } from '@/pages/Agenda.vue';

@Component({
  components: {
    CloseIcon,
    NextIcon,
    PrevIcon,
  },
})
export default class AgendaListItemDetail extends Vue {
  @Prop() private value!: boolean;
  @Prop() private session!: Session;
  @Prop() private speaker!: Speaker;

  private detailValue = this.value;

  get itemDetailClasses() {
    return {
      'g-agenda-list-item-detail': true,
      '--active': this.detailValue,
    };
  }

  @Watch('value')
  private onChangeValue(newValue: boolean) {
    this.detailValue = newValue;
  }

  private getTimeDuration() {
    const { start, end } = this.session;
    return `${getFormattedTime(start)}-${getFormattedTime(end)}`;
  }

  private closeDetail() {
    this.$emit('input', false);
  }
}
</script>

<style lang="scss" scoped>
@mixin section-hint {
  margin-bottom: 8px;
  line-height: normal;
  color: #61c3ff;
}

@mixin section-title {
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.67;
}

@mixin section-description {
  margin-bottom: 16px;
  line-height: 1.71;
}

.g-agenda-list-item-detail {
  position: fixed;
  top: 0;
  z-index: 10000;
  display: none;
  width: 100%;
  height: 100%;

  * {
    box-sizing: border-box;
  }

  &.--active {
    display: grid;
    grid-template-rows: 72px auto;
    grid-template-columns: auto 540px auto;
    grid-template-areas: 'header header header' 'action-prev content action-next';
    background-color: rgba(255, 255, 255, 0.9);

    & > .g-agenda-list-item-detail {
      &__header {
        position: fixed;
        display: flex;
        width: 100%;
        padding: 24px 24px 0;
        justify-content: flex-end;
        grid-area: header;
      }

      &__body {
        margin-top: 40px;
        overflow-y: auto;
        grid-area: content;
        font-family: 'Noto Sans TC', sans-serif;
        font-size: 14px;
        font-weight: normal;
        letter-spacing: normal;
        color: #333943;

        & > .g-agenda-list-item-detail {
          &-time {
            @include section-hint;
          }

          &-title {
            @include section-title;
          }

          &-description {
            @include section-description;
          }

          &-link {
            margin-bottom: 78px;

            a {
              display: inline-flex;
              justify-content: center;
              width: 100%;
              padding: 6px 12px;
              font-weight: bold;
              line-height: 1.71;
              color: #ffffff;
              background-color: #61c3ff;
            }
          }

          &-about {
            display: flex;
            margin-bottom: 40px;

            & > .g-agenda-list-item-detail-about__image {
              display: flex;
              width: 250px;
              padding-right: 12px;

              img {
                width: 100%;
                object-fit: contain;
              }
            }

            & > .g-agenda-list-item-detail-about__text {
              width: 290px;
              padding-left: 24px;

              .header {
                @include section-hint;
              }

              .name {
                @include section-title;
              }

              .bio {
                @include section-description;
              }
            }
          }
        }
      }

      &__prev-action {
        display: flex;
        padding-right: 46px;
        justify-content: flex-end;
        align-items: center;
        grid-area: action-prev;
        cursor: pointer;
      }

      &__next-action {
        display: flex;
        padding-left: 46px;
        align-items: center;
        grid-area: action-next;
        cursor: pointer;
      }
    }
  }

  &.--desktop {
  }

  &.--mobile {
  }

  .close-detail-button {
    display: inline-flex;
    padding: 6px 16px;
    border: 1px solid #333943;
    cursor: pointer;

    span {
      margin-left: 4px;
      color: #333943;
    }
  }
}
</style>
