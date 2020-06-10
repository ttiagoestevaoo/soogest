<template>
  <div id="tasks">
    <Navbar></Navbar>
    <div class="d-flex justify-center mb-4">
      <h2>Minhas tarefas</h2>

    </div>
    <div class="d-flex justify-space-around mb-6" v-if="tasks.length && this.render">
      <v-card
      class="mx-auto col-4"
      max-width="344"
      v-for="task in tasks"
      :key="task.id">
        <v-card-text>
          <p class="display-1 text--primary">
            {{ task.name }}
          </p>

          <div class="text--primary">
            {{ task.description }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="deep-purple accent-4"
            :to="{ name: 'tasks.show', params: { id: task.id } }"
          >
            Ver tarefa
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <p v-else-if="!tasks.length && this.render" class="mb-6">Possui nenhuma tarefa, crie alguma </p>
    <v-btn
      color="blue"
      dark
      fixed
      bottom
      right
      fab
      :to="{ name: 'tasks.create'}"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'tasks',
  components: {
    Navbar
  },
  data () {
    return {
      tasks: [],
      render: false
    }
  },
  created () {
    this.$store.dispatch('getTasks').then((response) => {
      this.tasks = response.data
      this.render = true
    })
  }
}
</script>

<style lang="scss">

.v-toolbar_content {
    box-shadow: none;
}
</style>
