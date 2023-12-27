<template>
  <footer class="footer">
    <div class="container">
      <footer class="footer-inner">
        <router-link to="/" class="footer-logo logo">
          <img src="../assets/images/logo.svg" alt="logo" />
        </router-link>
        <nav class="footer-nav">
          <p class="nav-item">Ресторанам</p>
          <p class="nav-item">Курьерам</p>
          <p class="nav-item">Пресс-центр</p>
          <p class="nav-item">Контакты</p>
        </nav>
        <div class="footer-links">
          <img src="../assets/images/footer/Group 1.svg" alt="" />
          <img src="../assets/images/footer/Group 2.svg" alt="" />
          <img src="../assets/images/footer/Group 3.svg" alt="" />
        </div>
      </footer>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  min-height: 157px;
  padding: 60px;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  flex-wrap: wrap;
}

.footer-logo {
  margin-right: 8px;
}

.footer-nav {
  flex-grow: 1;

  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.footer-nav p {
  color: #595959;
  font-size: 18px;
  font-weight: 400;
}

.footer-links img {
  margin-right: 21px;
}

.footer-links img:last-child {
  margin-right: 0;
}
</style>