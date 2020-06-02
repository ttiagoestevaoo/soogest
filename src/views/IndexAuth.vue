<template>
  <div id="index_auth">
    <v-toolbar
    flat
    >

      <v-app-bar-nav-icon class="ml-10" > Soogest</v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn text>{{ this.name }} </v-btn>
      <Logout> </Logout>
    </v-toolbar>
    <h1> Você está logado </h1>

  </div>
</template>

<script>
import Logout from '@/components/Logout.vue'
export default {
  name: 'index',
  data () {
    return {
      name: ''
    }
  },
  created () {
    this.$store.dispatch('retrieveUser').then((response) => {
      this.name = response.data.data.name
    })
  },
  components: {
    Logout
  }
}
</script>

<style lang="scss">

.v-toolbar_content {
    box-shadow: none;
}
</style>
