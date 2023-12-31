<template>
  <div class="cart-modal__overlay" :class="{open: isOpen}"  @click.self="closeModal()">
    <div class="cart-modal">
      <div class="cart-modal__header">
        <h2 class="cart-modal__header--title">Корзина</h2>
        <span class="cart-modal__header--close" @click="closeModal()">
          <img src="../assets/images/goods/close.svg" alt="X">
        </span>
      </div>
      <div class="cart-modal__body">
        <div class="cart-item">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn--white btn">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn--white btn">+</button>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn--white btn">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn--white btn">+</button>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn--white btn">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn--white btn">+</button>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn--white btn">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn--white btn">+</button>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn--white btn">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn--white btn">+</button>
          </div>
        </div>
      </div>
      <div class="cart-modal__footer">
        <div class="cart-modal__footer--price">1250 ₽</div>
        <div class="cart-modal__footer--controls">
          <button class="button-enter btn btn--blue">
            <span>Оформить заказ</span>
          </button>
          <button class="button-cart btn btn--white"  @click="closeModal()">
            <span>Отмена</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const {isOpen} = defineProps({isOpen: Boolean})

  const emit = defineEmits(["toggleModal"]);
  const closeModal = () => emit("toggleModal");
</script>

<style scoped>
.cart-modal__overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.40);
  display: none;
  align-items: center;
  justify-content: center;
}

.cart-modal__overlay.open {
  display: flex;
}

.cart-modal {
  width: 100%;
  max-width: 780px;
  padding: 40px 45px;
  border-radius: 5px;
  background: #FFF;
}

.cart-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-modal__header--title {
  color: #000;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 48px;
}

.cart-modal__header--close {
  cursor: pointer;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-item:not(:last-child) {
  padding-bottom: 10px;
  margin-bottom: 10px; 
  border-bottom: 1px solid #D9D9D9;
}

.cart-item__title {
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
}

.cart-item__controls {
  display: flex;
  align-items: center;
}

.cart-item__controls--price {
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  margin-right: 45px;
}

.cart-item__controls--count {
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: auto 15px;
}

.cart-item__controls button {
  border-radius: 2px;
  border: 1px solid #40A9FF;
  background: #FFF;
  color: #40A9FF;
}

.cart-modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
}

.cart-modal__footer--price {
  border-radius: 5px;
  background: #262626;
  color: #FAFAFA;
  font-size: 20px;
  font-weight: 700;
  padding: 15px 20px;
}

.cart-modal__footer--controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 11px;
}
</style>