<template>
  <div class="primary">
    <div class="primary__template template">
      <div class="template__header header">
        <div class="header__content">
          <div class="header__logo">
            <p class="header__text header__text_light">MSK</p>
            <p class="header__text header__text_bold">APART</p>
          </div>
          <p class="header__text header__text_number">+7 (991) 985-31-34</p>
        </div>
      </div>
      <div class="template__main main">
        <nuxt />
      </div>
      <div class="template__footer footer">
        <div class="footer__content">
          <div class="footer__logo">
            <p class="footer__text footer__text_light">MSK</p>
            <p class="footer__text footer__text_bold">APART</p>
          </div>
          <p class="footer__text footer__text_number">+7 (991) 985-31-34</p>
        </div>
      </div>
    </div>
    <div
      v-if="modalStatus"
      class="primary__modal modal"
    >
      <div
        class="modal__main"
        :class="modalVersion === 1 ? 'modal__main_thx' : ''"
      >
        <div class="modal__content content">
          <template v-if="modalVersion === 0">
            <div class="content__title">
              <p class="content__text content__text_title">Отправка формы</p>
              <img
                  class="content__close"
                  :src="require('~/src/img/close.svg')"
                  alt="Закрыть"
              />
            </div>
            <div class="content__description">
              Остался последний шаг: укажите Ваше имя и номер телефона, и мы найдем варианты квратир для Вас.
            </div>
            <div class="content__inputs">
              <baseInput
                  :label="'Ваше имя'"
                  :placeholder="'Введите ваше имя'"
              ></baseInput>
              <baseInput
                  :label="'Номер телефона'"
                  :placeholder="'Введите номер телефона'"
                  id="phone"
              ></baseInput>
            </div>
            <div class="content__buttons buttons">
              <baseButton
                  class="buttons__back"
              >Отмена</baseButton>
              <baseButton
                  class="buttons__send"
                  @click="switchModal()"
              >Отправить</baseButton>
            </div>
          </template>
          <template v-else>
            <div class="messageSend">
              <div class="messageSend__content">
                <img
                    :src="require('~/src/img/apply.svg')"
                    alt="Thanks"
                >
                <div class="ctm-modal__title">
                  {{ 'Успешно' }}
                </div>
                <div class="ctm-modal__desc">
                  {{ 'Ваша заявка принята, и скоро мы свяжемся с Вами и вышлем список квартир' }}
                </div>
                <baseButton
                    class="ctm-modal__btn"
                    @click="modalVersion = 0"
                >
                  {{ 'Закрыть' }}
                </baseButton>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import baseInput from '~/components/ui/baseInput';
import baseButton from '~/components/ui/baseButton';
export default {
  name: "default",
  components: {
    baseInput,
    baseButton,
  },
  data() {
    return {
      modalStatus: null,
      modalVersion: 0,
    }
  },
  computed: {
    ...mapGetters({
      showModal: 'modals/getIsShow',
    }),
  },
  watch: {
    showModal() {
      if (this.showModal) {
        window.addEventListener('click', e => {
          const target = e.target;
          if (target.className === 'primary__modal modal' || target.className === 'content__close' || target.className === 'buttons__back' || target.className === 'base-btn ctm-modal__btn') {
            this.$store.dispatch('modals/hide');
            this.modalVersion = 0;
          }
        })
      }
      this.modalStatus = this.showModal;
    }
  },
  methods: {
    switchModal() {
      if (this.modalVersion === 0) {
        this.modalVersion = 1;
      }
    },
  }
}
</script>