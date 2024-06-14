<template>
  <header class="mini-header">
    <div class="container">

        <img class="logo" src="@/image/logo.png" alt="Логотип">

      <nav>
        <nuxt-link to="/" class="link">О нас</nuxt-link>
        <nuxt-link to="/" class="link">Услуги</nuxt-link>
        <nuxt-link to="/" class="link">Контакты</nuxt-link>
      </nav>
      
    </div>
  </header>
</template>

<script>
</script>

<style>
.mini-header {
  background-color: #fff;
  padding: 15px;

}

.mini-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mini-header .logo {
  display: flex;
  align-items: center;
}

.mini-header .logo img {
  height: 30px;
  margin-right: 10px;
}

.mini-header nav {
  display: flex;
  align-items: center;
}

.mini-header .link {
  color: #000;
  text-decoration: none;
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
}

.mini-header .link:hover {
  background-color: brown;
}

@media (max-width: 600px) {

.mini-header .link {
font-size: 14px;
}

}

</style>
