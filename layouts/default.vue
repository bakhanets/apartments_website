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
      <div
        v-if="!ddBlockStatus"
        class="template__main main">
        <nuxt />
      </div>
      <div
        v-if="!ddBlockStatus"
        class="template__footer footer"
      >
        <div class="footer__content">
          <div class="footer__logo">
            <p class="footer__text footer__text_light">MSK</p>
            <p class="footer__text footer__text_bold">APART</p>
          </div>
          <p class="footer__text footer__text_number">+7 (991) 985-31-34</p>
        </div>
      </div>
      <div
        v-if="ddBlockStatus"
        class="template__DD DD"
      >
        <a
          class="DD__back back"
        >
          <img
            class="back__img"
            :src="require('~/src/img/Arrow-small.svg')"
            @click="returnAction()"
          />
          <p
            class="back__text"
            @click="returnAction()"
          >Назад</p>
        </a>
        <div class="DD__content">
          <div class="DD__step">{{ `Шаг ${choiceNumber} из 6` }}</div>
          <div class="DD__title">{{stepsArray[choiceNumber].title}}</div>
          <template v-for="(item, i) in stepsArray[choiceNumber].values">
            <base-checkbox
                v-model="choice"
                :label="item"
                :name="item"
                class="DD__choice"
            />
          </template>
        </div>
        <baseButton
            class="DD__btn"
            @click="switchChoices()"
        >Продолжить</baseButton>
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
                  v-model="userName"
                  :label="'Ваше имя'"
                  :placeholder="'Введите ваше имя'"
                  :errorText="userName_error"
              ></baseInput>
              <baseInput
                  v-model="userPhone"
                  :label="'Номер телефона'"
                  :placeholder="'Введите номер телефона'"
                  :errorText="userPhone_error"
                  :type="'number'"
                  id="phone"
              ></baseInput>
            </div>
            <div class="content__buttons buttons">
              <baseButton
                  class="buttons__back"
                  @click="hide('all')"
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
                    @click="hide('all')"
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
import baseCheckbox from '~/components/ui/baseCheckbox';

export default {
  name: "default",
  components: {
    baseInput,
    baseButton,
    baseCheckbox,
  },
  data() {
    return {
      choiceNumber: 1,
      modalStatus: null,
      ddBlockStatus: false,
      modalVersion: 0,
      userName: '',
      userPhone: '',
      userName_error: '',
      userPhone_error: '',
      choice: null,
      stepsArray: {
        1: {
          title: "Укажите цель покупки",
          values: ["Для проживания", "В целях инвестиций", "В подарок"],
        },
        2: {
          title: "Укажите количество комнат",
          values: ["Студия", "1-комнатная", "2-комнатная", "3-комнатная", "4 и более комнат", "Свободная планировка"],
        },
        3: {
          title: "Укажите, какой этап строительства вас интересует",
          values: ["Сдан", "Сдача в 2021", "Сдача в 2022", "Сдача в 2023", "Старт продаж"],
        },
        4: {
          title: "Укажите желаемую площадь квартиры",
          values: ["До 20 м2", "от 20 до 29 м2", "от 30 до 39 м2", "от 40 до 59 м2", "от 60 до 79 м2", "Более 80 м2"],
        },
        5: {
          title: "Укажите способ оплаты",
          values: ["Свободные средства", "Ипотека"],
        },
        6: {
          title: "Укажите Ваше имя и номер телефона",
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      showModal: 'modals/getIsShow',
      arrayValues: 'modals/getValues',
      showBlockDD: 'modals/getIsShowDD',
    }),
  },
  watch: {
    showModal() {
      if (this.showModal) {
        window.addEventListener('click', e => {
          const target = e.target;
          this.hide(target);
        })
      }
      this.modalStatus = this.showModal;
    },
    showBlockDD() {
      this.ddBlockStatus = this.showBlockDD;
    },
    choice() {
      console.log('test:', this.choice);
    },
  },
  methods: {
    switchModal() {
      if (this.modalVersion === 0) {
        if (this.userName !== '' && this.userPhone !== '') {
          this.modalVersion = 1;
          this.sendData();
        } else {
          if (this.userName === '') {
            this.userName_error = 'Обязательное поле';
          } else {
            this.userName_error = '';
          }
          if (this.userPhone === '') {
            this.userPhone_error = 'Обязательное поле';
          } else {
            this.userPhone_error = '';
          }
        }
      }
    },
    switchChoices() {
      this.choiceNumber += 1;
    },
    hide(target) {
      if (target.className === 'primary__modal modal' || target.className === 'content__close' || target.className === 'buttons__back' || target.className === 'base-btn ctm-modal__btn') {
        this.$store.dispatch('modals/hide');
        this.modalVersion = 0;
      } else if (target === 'all') {
        this.$store.dispatch('modals/hide');
        this.modalVersion = 0;
      }
    },
    returnAction() {
      if (this.choiceNumber === 1) {
        this.$store.dispatch('modals/hideDD');
      } else {
        this.choiceNumber -= 1;
      }
    },
    async sendData() {
      let sendArray = {
        Name: this.userName,
        Number: this.userPhone,
        Reason: this.arrayValues[0],
        Dates: this.arrayValues[1],
        apartmentArea: this.arrayValues[2],
        Rooms_quantity: this.arrayValues[3],
        Pay_type: this.arrayValues[4]
      }
      await this.$store.dispatch('modals/sendData', sendArray);
    },
  }
}
</script>