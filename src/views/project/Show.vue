<template>
  <div id="">
    <Navbar></Navbar>
    <v-row>
      <v-col cols="12" md=3 lg=4>
          Listar tarefas
      </v-col>
      <v-col  cols="12" md=9 lg=8>
        <h2>{{ project.name }}</h2>
        <h2>{{ project.description }}</h2>
        <h2>{{ project.deadline }}</h2>
        <v-btn :to="{ name: 'projects.edit', params:project.id}">
          Editar
        </v-btn>
        <v-btn>
          Deletar
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      project: {}
    }
  },
  created () {
    this.$store.dispatch('getProject', this.$route.params.id)
      .then((response) => {
        this.project = response.data
      })
  }
}
</script>
