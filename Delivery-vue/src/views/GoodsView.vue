<template>
  <section class="title">
    <div class="container">
      <div class="title-inner">
        <h1 class="title-name">Тануки</h1>
        <div class="title-description">
          <div class="description-info-raiting">
            <img src="../assets/images/main/star.svg" alt="" />
            4,5
          </div>
          <div class="description-info-price">От 900 ₽</div>
          <div class="description-info-group">Пицца</div>
        </div>
      </div>
    </div>
  </section>
  <section class="products">
    <div class="container">
      <div class="products-wraper" id="goods-container">
        <div class="products-card" v-for="product in store.goods" :key="product.id">
          <div class="products-card_image">
            <img :src="getUrl(product.image)" :alt="`product-${product.id +1}`" />
          </div>
          <div class="products-card_description">
            <div class="description-row">
              <h5 class="description-name">{{ product.title }}</h5>
            </div>
            <div class="description-row">
              <p class="description-text">
                {{ product.structure }}
              </p>
            </div>
            <div class="description-row">
              <div class="description-controls">
                <button class="button-enter btn btn--blue">
                  <img class="img-person" src="../assets/images/goods/cart.svg" alt="" />
                  <span>В корзину</span>
                </button>
                <div class="description-price">{{ product.price }} ₽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { store } from "../store/index"

const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url)
}
</script>

