<script setup>
import DocumentPage from "@/components/DocumentPage.vue";
</script>

<template>
  <div class="main-page">
    <div class="main-page__title">
      <div class="main-page__myApp">MyApp</div>
      <div>Username</div>
    </div>
    <DocumentPage/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
#app {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
 background: #FBFBFB;
}
* {
  margin: 0;
}
input, button {
  font: inherit;
}
p, h1, h2, h3 {
  overflow-wrap: break-word;
  hyphens: auto;
}
div{
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: border-box;
}
.flex{
  display: flex;
  align-items: center;
}
.error{
  color: red;
  font-size: 10px;
}
p{
  color: rgb(108, 117, 125);
  font-size: 14px;
}
h5{
  font-size: 14px;
  font-weight: 600;
}
.main-page{
  width: 100%;
  padding: 41px 10px 58px 10px;
  @media (min-width: 640px) {
    padding: 41px 50px 58px 50px;
    max-width: 1440px;
  }
  &__title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    font-size: 16px;
  }
  &__myApp{
    font-weight: 700;
    font-size: 32px;
    color: #000000;
  }
}

</style>
