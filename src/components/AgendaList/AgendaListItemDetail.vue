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
      <div
        v-html="sessionDescription"
        class="g-agenda-list-item-detail-description"
      ></div>
      <div v-if="session.note" class="g-agenda-list-item-detail-link">
        <a :href="session.note">加入此議程的線上共筆</a>
      </div>
      <div v-if="speaker.id" class="g-agenda-list-item-detail-about">
        <div class="g-agenda-list-item-detail-about__image">
          <img :src="speaker.avatar" alt="" />
        </div>
        <div class="g-agenda-list-item-detail-about__text">
          <div class="header">關於講者</div>
          <div class="name">
            {{ speaker.zh.name }}
          </div>
          <div v-html="speakerBio" class="bio"></div>
        </div>
      </div>
    </div>
    <div class="g-agenda-list-item-detail__prev-action">
      <prev-icon @click.native="onClickPrev" />
    </div>
    <div class="g-agenda-list-item-detail__next-action">
      <next-icon @click.native="onClickNext" />
    </div>
  </div>
</template>

<script lang="ts">
import { markdown } from 'markdown';
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
  @Prop() private onClickNext!: Function;
  @Prop() private onClickPrev!: Function;

  private detailValue = this.value;

  get itemDetailClasses() {
    return {
      'g-agenda-list-item-detail': true,
      '--active': this.detailValue,
    };
  }

  get sessionDescription() {
    return this.parseDescription(this.session.zh.description);
  }

  get speakerBio() {
    return this.parseDescription(this.speaker.zh.bio);
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

  private parseDescription(text: string) {
    const styles = Object.entries({
      'margin-bottom': '16px',
      'font-family': `'Noto Sans TC', sans-serif`,
      'font-size': '14px',
      'font-weight': 'normal',
      'line-height': '1.71',
      'letter-spacing': 'normal',
      color: '#333943',
    })
      .map(([k, v]) => `${k}: ${v};`)
      .join('');
    return markdown
      .toHTML(text)
      .replace(/<p>/gm, `<p style="${styles}">`);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixin.scss';

@mixin section-hint {
  margin-top: 16px;
  margin-bottom: 8px;
  line-height: normal;
  color: #61c3ff;

  @include for-size(md) {
    margin-top: unset;
  }
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
    grid-template-rows: 52px auto;
    grid-template-columns: 80px 80px auto;
    grid-template-areas: 'action-prev action-next header' 'content content content';
    background-color: rgba(255, 255, 255, 0.9);

    @include for-size(md) {
      grid-template-rows: 72px auto;
      grid-template-columns: auto 540px auto;
      grid-template-areas: 'header header header' 'action-prev content action-next';
    }

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
        margin: 16px;
        overflow-y: auto;
        grid-area: content;
        font-family: 'Noto Sans TC', sans-serif;
        font-size: 14px;
        font-weight: normal;
        letter-spacing: normal;
        color: #333943;

        @include for-size(md) {
          margin-top: 40px;
          margin-right: unset;
          margin-bottom: unset;
          margin-left: unset;
        }

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
            margin-bottom: 36px;

            @include for-size(md) {
              margin-bottom: 78px;
            }

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
            flex-direction: column-reverse;

            @include for-size(md) {
              flex-direction: row;
            }

            & > .g-agenda-list-item-detail-about__image {
              display: flex;
              width: 100%;

              @include for-size(md) {
                width: 250px;
                padding-right: 12px;
              }

              img {
                width: 100%;
                object-fit: contain;
              }
            }

            & > .g-agenda-list-item-detail-about__text {
              width: 100%;

              @include for-size(md) {
                width: 290px;
                padding-left: 24px;
              }

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

      &__prev-action,
      &__next-action {
        position: relative;
        top: 8px;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: flex-end;

        svg {
          cursor: pointer;
        }

        @include for-size(md) {
          position: unset;
          top: unset;
          align-items: center;
        }
      }

      &__prev-action {
        grid-area: action-prev;

        @include for-size(md) {
          padding-right: 46px;
          justify-content: flex-end;
        }
      }

      &__next-action {
        grid-area: action-next;

        @include for-size(md) {
          padding-left: 46px;
          justify-content: flex-start;
        }
      }
    }
  }

  .close-detail-button {
    display: inline-flex;
    padding: 5px 16px;
    align-items: center;
    border: 1px solid #333943;
    cursor: pointer;

    span {
      margin-left: 4px;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.71;
      color: #333943;
    }
  }
}
</style>
