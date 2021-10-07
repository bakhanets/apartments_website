<template>
  <div class="main__content content">
    <div class="content__block content__block_title">
      Подбор квартир в новых ЖК Москвы
    </div>
    <div class="content__block content__block_present block">
      <div class="block__present block__present_first present">
        <div class="present__first">
          <img class="present__img" :src="require('~/src/img/image_1.png')"/>
          <div class="present__desc desc">
            <p class="desc__text">Подберем квартиру по Вашему запросу в новых жилых комплексах Москвы</p>
            <div class="desc__block">
              <p class="desc__link">Подоборать</p>
              <img class="desc__img" :src="require('~/src/img/arrow.svg')"/>
            </div>
          </div>
        </div>
      </div>
      <div class="block__present block__present_second present">
        <div class="present__second">
          <img class="present__img" :src="require('~/src/img/image_2.png')"/>
        </div>
      </div>
    </div>
    <div class="content__block content__block_info block">
      <div class="block__info info">
        <div class="info__img-line">
          <div class="info__line"/>
        </div>
        <div class="info__text">
          <p class="info__title">более 400</p>
          <br/>
          <p class="info__desc">жилых комплексов в базе</p>
        </div>
        <div class="info__text">
          <p class="info__title">40 тысяч</p>
          <br/>
          <p class="info__desc">объектов в базе данных</p>
        </div>
        <div class="info__text">
          <p class="info__title">7 лет</p>
          <br/>
          <p class="info__desc">опыта продаж недвижимости</p>
        </div>
      </div>
    </div>
    <div class="content__block content__block_send block">
      <div class="block__send send">
        <div class="send__img">
          <img :src="require('~/src/img/IMG_3704.JPG')">
        </div>
        <div class="send__data">
          <div class="send__title">Заполните анкету и мы подберем квартиры по Вашим требованиям</div>
          <div class="send__dropdown">
            <baseDD
              :items="purchasePurpose"
              :label="'Цель покупки'"
              :placeholder="'Выберите вариант'"
            />
            <baseDD
              :items="constructionPhase"
              :label="'Этап строительства'"
              :placeholder="'Выберите вариант'"
            />
            <baseDD
              :items="apartmentArea"
              :label="'Площадь квартиры'"
              :placeholder="'Выберите вариант'"
            />
            <baseDD
              :items="roomsNumber"
              :label="'Количество комнат'"
              :placeholder="'Выберите вариант'"
            />
            <baseDD
              :items="paymentType"
              :label="'Вид оплаты'"
              :placeholder="'Выберите вариант'"
            />
          </div>
          <button class="send__btn">Отправить</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import baseDD from '~/components/ui/baseDD';
export default {
  name: "index",
  components: {
    baseDD,
  },
  computed: {
    purchasePurpose() {
      return ["Для проживания", "В целях инвестиций", "В подарок"];
    },
    constructionPhase() {
      return ["Сдан", "Сдача в 2021", "Сдача в 2022", "Сдача в 2023", "Старт продаж"];
    },
    paymentType() {
      return ["Свободные средства", "Ипотека"];
    },
    roomsNumber() {
      return ["Студия", "1-комнатная", "2-комнатная", "3-комнатная", "4 и более комнат", "Свободная планировка"];
    },
    apartmentArea() {
      return ["До 20 м2", "от 20 до 29 м2", "от 30 до 39 м2", "от 40 до 59 м2", "от 60 до 79 м2", "Более 80 м2"];
    },
  }
}
</script>