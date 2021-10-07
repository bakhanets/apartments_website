<template>
  <div>
    <div
        v-if="label !== ''"
        class="title"
    >
      {{ label }}
    </div>
    <div
        v-click-outside="hideDd"
        class="dd"
        :class="[{'dd__top': mode === 'top' }]"
    >
      <slot name="card" />

      <button
          class="dd__btn"
          :class="ddClass"
          :disabled="disabled"
          @click="isShown = !isShown"
      >
        <div
            v-if="isIcon"
            class="dd__icon"
        >
          <img
              :src="items[value].icon"
              :alt="items[value].title"
          >
          <span
              class="dd__title"
              :class="[{'dd__title_white': type === 'blue' }, { 'dd__title_black': mode === 'blackFont' }]"
          >
            {{ items[value].title }}
          </span>
        </div>

        <span
            v-else-if="items[value]"
            class="dd__title"
            :class="[{'dd__title_white': type === 'blue' }, { 'dd__title_black': mode === 'blackFont' }]"
        >
          {{ items[value] }}
        </span>
        <span
            v-else-if="!items[value] && placeholder"
            class="dd__title"
            :class="[{'dd__title_white': type === 'blue' }, { 'dd__title_black': mode === 'blackFont' }]"
        >
          {{ placeholder }}
        </span>
        <span
            v-if="type === 'sort'"
            class="dd__caret dd__caret_dark icon-Sorting_descending"
            :class="[{'dd__caret_white': type === 'blue' }]"
        />
        <span
            v-else
            class="dd__caret icon-caret_down"
            :class="[{'dd__caret_white': type === 'blue' }]"
        />
      </button>
      <transition name="fade">
        <div
            v-if="isShown && isIcon"
            class="dd__items"
            :class="mode === 'small' ? 'dd__items_small' : ''"
        >
          <button
              v-for="(item, i) in items"
              :key="`dd__item-${i}`"
              class="dd__item dd__item_icon"
              @click="selectItem(i)"
          >
            <img
                :src="item.icon"
                :alt="item.title"
            >
            {{ item.title }}
            <slot name="picture" />
          </button>
        </div>
        <div
            v-if="isShown && !isIcon"
            class="dd__items"
            :class="mode === 'small' ? 'dd__items_small' : ''"
        >
          <button
              v-for="(item, i) in items"
              :key="`dd__item-${i}`"
              class="dd__item"
              @click="selectItem(i)"
          >
            {{ item }}
          </button>
          <slot name="buttonCard" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'Dd',
  directives: {
    ClickOutside,
  },
  props: {
    items: {
      type: [Array, Object],
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: [String, Number],
      default: '',
    },
    tip: {
      type: String,
      default: '',
    },
    value: {
      type: [Number, String],
      default: 0,
    },
    type: {
      type: String,
      default: 'default',
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isShown: false,
  }),
  computed: {
    ddClass() {
      const { type } = this;
      return [
        { dd__btn_dark: type === 'dark' },
        { dd__btn_disabled: type === 'disabled' },
        { dd__btn_gray: type === 'gray' },
        { dd__btn_blue: type === 'blue' },
        { dd__btn_border: type === 'border' },
      ];
    },
  },
  methods: {
    hideDd() {
      this.isShown = false;
    },
    selectItem(i) {
      this.isShown = false;
      this.$emit('input', i);
    },
  },
};
</script>

<style scoped lang="scss">
.ctm-field__header {
  letter-spacing: -0.025em;
  margin-bottom: 13px;
  height: 24px;
  color: #212529;
}
.title {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;
  color: #070D17;
}
.dd {
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #070D17;
  min-width: 131px;
  position: relative;
  text-align: left;
  &__title {
    color: #070D17;
    &_white {
      color: #E5E5E5;
    }
    &_black {
      color: #070D17 !important;
    }
  }
  &__top {
    align-items: flex-start;
  }
  &__items {
    background: #FFFFFF;
    border: 1px solid #F7F8FA;
    box-sizing: border-box;
    box-shadow: 0 17px 17px rgba(0, 0, 0, 0.05), 0 5.125px 5.125px rgba(0, 0, 0, 0.0325794), 0 2.12866px 2.12866px rgba(0, 0, 0, 0.025), 0 0.769896px 0.769896px rgba(0, 0, 0, 0.0174206);
    border-radius: 6px;
    width: 100%;
    flex-basis: 100%;
    position: absolute;
    top: calc(100% + 4px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 15px;
    padding: 15px 20px;
    z-index: 1;
    &_small {
      height: 200px;
      grid-gap: 10px;
      overflow: scroll;
    }
  }
  &__item {
    text-align: left;
    flex-basis: 100%;
    width: 100%;
    height: 100%;
    color: #070D17;
    &:hover {
      color: #070D17;
    }
    &_icon {
      display: flex;
      align-items: center;
      img {
        margin-right: 5px;
        height: 25px;
        width: 25px;
      }
    }
  }
  &__icon {
    display: flex;
    align-items: center;
    img {
      height: 25px;
      width: 25px;
      margin-right: 5px;
    }
    span {
      margin-right: 5px;
    }
  }
  //&__caret {
  //  &::before {
  //    padding-left: 10px;
  //    color: $blue;
  //    font-size: 24px;
  //  }
  //  &_dark::before {
  //    color: $black700;
  //  }
  //  &_white::before {
  //    color: $white;
  //  }
  //}
  &__btn {
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 6px;
    //&_blue {
    //  background-color: $blue;
    //}
    &_dark {
      background: #151552;
    }
    &_gray {
      background-color: #F7F8FA;
    }
    &_disabled {
      background-color: #E6E6E7;
    }
    &_border {
      border: 1px solid #F7F8FA;
    }
  }
}
</style>
