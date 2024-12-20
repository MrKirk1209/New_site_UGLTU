<template>
    <HeaderUGLTU />
    <RouterView />
    <FooterUGLTU />

</template>

<script>

import HeaderUGLTU from "/src/components/HeaderUGLTU.vue";
import FooterUGLTU from "/src/components/FooterUGLTU.vue";

import { RouterView } from "vue-router";

export default {
  components: {
    HeaderUGLTU,
    FooterUGLTU

  },
};
</script>
<style scoped>

</style>
