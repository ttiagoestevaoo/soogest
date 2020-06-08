<template>

  <div id="navbar">

    <v-toolbar
      flat
      >

      <v-app-bar-nav-icon class="ml-10" > Soogest</v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-btn text :to="{name: 'projects'}"> Projetos </v-btn>
      <v-btn text :to="{name: 'tasks'}"> Tarefas </v-btn>
      <v-btn text>{{ this.name }} </v-btn>
      <Logout> </Logout>
    </v-toolbar>
  </div>

</template>

<script>
import Logout from '@/components/Logout.vue'
export default {
  name: 'navbar',
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
