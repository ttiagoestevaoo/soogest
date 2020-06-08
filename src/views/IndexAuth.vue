<template>
  <div id="index_auth">
    <Navbar></Navbar>

    <h1> Você está logado </h1>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'index',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

.v-toolbar_content {
    box-shadow: none;
}
</style>
