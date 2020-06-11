<template>
  <div id="tasks">
    <Navbar></Navbar>
    <v-card class="container">
      <v-card-title>
        Tarefas
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-if="tasks.length && this.render"
        :items="tasks"
        :headers="headers"
        :search="search"
      >
        <template #item.complete="{item}">
          <input type="checkbox" checked v-if="item.complete == true" v-on:click="notComplete(item)">
          <input type="checkbox" v-else v-on:click="complete(item)">
        </template>
      </v-data-table>
      <p v-else-if="!tasks.length && this.render" class="mb-6">Possui nenhuma tarefa, crie alguma </p>
    </v-card>
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
  },
  computed: {
    headers () {
      return [
        { text: 'Concluido', value: 'complete' },
        { text: 'Nome', value: 'name' },
        { text: 'Prazo', value: 'deadline' }
      ]
    }
  },
  methods: {
    complete (item) {
      this.$store.dispatch('updateTask', {
        id: item.id,
        name: item.name,
        description: item.description,
        deadline: item.deadline,
        project_id: item.project_id,
        complete: true
      })
    },
    notComplete (item) {
      this.$store.dispatch('updateTask', {
        id: item.id,
        name: item.name,
        description: item.description,
        deadline: item.deadline,
        project_id: item.project_id,
        complete: false
      })
    }
  }
}
</script>

<style lang="scss">

.v-toolbar_content {
    box-shadow: none;
}

.table {
  border-collapse: collapse;
  border-spacing: 2px;
}

.table td {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
</style>
