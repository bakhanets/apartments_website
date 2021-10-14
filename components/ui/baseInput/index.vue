<template>
  <div>
    <div
      v-if="label !== ''"
      class='ctm-field__header'
    >
      {{ label }}
    </div>
    <div class="ctm-field__body">
      <input
        class="ctm-field__input"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :type="type"
        required
        @input="input"
      >
      <div
        v-if="value"
        class="ctm-field__clear"
        @click="clear()"
      >
        <span class="icon-close_small" />
      </div>
<!--      <div class="ctm-field__selector">-->
<!--        <slot name="selector" />-->
<!--      </div>-->
<!--      <div class="ctm-field__right">-->
<!--        <slot name="right" />-->
<!--      </div>-->
<!--      <div class="ctm-field__right-absolute">-->
<!--        <slot name="right-absolute" />-->
<!--      </div>-->
    </div>
    <div
        v-if="errorText !== ''"
        class="error"
    >
      {{ errorText }}
    </div>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: '',
    },
    big: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: [String, Number],
      default: '',
    },
    errorText: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    tip: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isHideError: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    isSearch: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
    rules: {
      type: [String, Array, Object],
      description: 'Vee validate validation rules',
      default: '',
    },
    name: {
      type: String,
      description: 'Input name (used for validation)',
      default: '',
    },
    vid: {
      type: String,
      default: '',
    },
    selector: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input($event) {
      this.$emit('input', $event.target.value);
      if (this.selector) {
        this.$emit('selector', $event.target.value);
      }
    },
    clear() {
      this.$emit('input', '');
    },
  },
};
</script>
<style lang="scss" scoped>
.error {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  color: #D52929;
}
.ctm-field {
  &__selector {
    position: absolute;
    width: 100%;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    z-index: 120;
  }
  &__right {
    min-height: 100%;
    display: flex;
  }
  &__clear {
    position: absolute;
    right: 20px;
    padding-top: 6px;
    cursor: pointer;
    span::before {
      color: #0F1623;
      font-size: 24px;
    }
  }
  &__right-absolute {
    position: absolute;
    right: 12px;
  }
  &__left {
    position: absolute;
    left: 12px;
    padding-left: 5px;
  }
  &__body {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
  }
  &__header {
    letter-spacing: -0.025em;
    margin-bottom: 13px;
    height: 24px;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: #070D17;

    &_mar5 {
      margin-bottom: 5px;
      height: unset;
    }

    &_sub {
      margin-bottom: 5px;
      color: #7C838D !important;
      font-weight: 400;
      font-size: 16px;
      height: unset;
    }
  }
  &__err {
    color: #bb5151;
    font-size: 12px;
    min-height: 23px;
  }
  &__input {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;

    height: 46px;
    border: 1px solid #ADB2BA;
    padding: 0 20px;
    transition: .3s;
    width: 100%;
  }
  &_disabled {
    .ctm-field__input {
      pointer-events: none;
    }
  }
  &_default {
    .ctm-field__input {
      color:#000000;
      background: #F3F7FA;
      border-radius: 6px;
      border: 1px solid transparent;
      &::placeholder {
        color: #000000;
      }
      &:focus {
        background: #FFFFFF;
        border: 1px solid #0083C7;
      }
    }
  }
  &_white {
    .ctm-field__input {
      color:#000000;
      background: #FFFFFF;
      border-radius: 6px;
      border: 1px solid #F3F7FA;
      &::placeholder {
        color: #000000;
      }
      &:focus {
        background: #FFFFFF;
        border: 1px solid #0083C7;
      }
    }
  }
  &_icon {
    .ctm-field {
      &__input {
        padding: 0 20px 0 50px;
      }
    }
  }
  &_big {
    .ctm-field {
      &__input {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        height: 84px;
      }
    }
  }
}
</style>
