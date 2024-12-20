<template>
  <div class="University">
<h1>Об Университете</h1>
  </div>
  <main>
    <AboutUGLTU />
  </main>
</template>
<script>
import AboutUGLTU from "../components/AboutUGLTU.vue";
export default {
components: {
  AboutUGLTU
},
};
</script>

<style scoped>
  .University{
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  text-align: center;
  max-width: 1110px;
  margin: 0 auto;
  color: #00421D;
  padding: 20px;
}
@media (max-width: 480px) {

  .University{
    font-size: 24px; 
    text-align: center;
    margin: 10px 0;
  }
}
</style>
