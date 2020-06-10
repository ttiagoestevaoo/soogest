<template>
  <div id="">
    <Navbar></Navbar>
    <v-row>
      <v-col cols="12" md=3 lg=4>
          Listar tarefas
      </v-col>
      <v-col  cols="12" md=9 lg=8>
        <h2>{{ task.name }}</h2>
        <h2>{{ task.description }}</h2>
        <h2>{{ task.deadline }}</h2>
        <h2>{{ task.project.name }}</h2>
        <h2 v-if="task.complete == true">Concluido</h2>
        <v-btn :to="{ name: 'tasks.edit', params:task.id}">
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
      task: {}
    }
  },
  created () {
    this.$store.dispatch('getTask', this.$route.params.id)
      .then((response) => {
        this.task = response.data
      })
  }
}
</script>
