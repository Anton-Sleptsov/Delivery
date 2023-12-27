<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item--title">
          Онлайн-сервис <br />доставки еды на дом
        </h2>
        <p class="banner-item--subtitle">
          Блюда из любимого ресторана привезет курьер в перчатках, маске и
          с антисептиком
        </p>
      </div>
    </div>
  </section>

  <section class="products">
    <div class="container">
      <div class="search">
        <h3 class="search-title">Рестораны</h3>
        <input class="search-input" type="text" placeholder="Поиск блюд и ресторанов" />
      </div>

      <div class="products-wraper" id="rests-container">

        <router-link class="products-card" v-for="rest in restsArray" :key="rest.id" :to='`/rest?id=${rest.id}`'>
          <div class="products-card_image">
            <img :src="getUrl(rest.image)" :alt="`rest-${rest.id + 1}`" />
          </div>
          <div class="products-card_description">
            <div class="description-row">
              <h4 class="description-title">{{ rest.title }}</h4>
              <div class="description-badge">{{ rest.time }} мин</div>
            </div>
            <div class="description-row">
              <div class="description-info">
                <div class="description-info-raiting">
                  <img src="../assets/images/main/star.svg" alt="" />
                  {{ rest.raiting }}
                </div>
                <div class="description-info-price">От {{ rest.price }} ₽</div>
                <div class="description-info-group">{{ rest.type }}</div>
              </div>
            </div>
          </div>
        </router-link>

      </div>
    </div>
  </section>
</template>

<script setup>
import { restsArray } from "../constants/rests"

const getUrl = (name) => {
  return new URL(`../assets/images/main/${name}`, import.meta.url)
}
</script>

