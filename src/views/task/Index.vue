<template>
  <div id="tasks">
    <Navbar></Navbar>
    <v-container>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Visualizar tarefa</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" v-if="sTask.name">
                  <p>{{ sTask.name }}</p>
                </v-col>
                <v-col cols="12" v-if="sTask.description">
                  <p>{{ sTask.description }}</p>
                </v-col>
                <v-col cols="12" v-if="sTask.deadline">
                  <p>{{ sTask.deadline | formatDate}}</p>
                </v-col>
                <v-col cols="12" v-if="sTask.project">
                  <p>{{ sTask.project.name }}</p>
                </v-col>
                <v-col cols="12" v-if="sTask.complete">
                  <p>Concluido</p>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Fechar</v-btn>
            <v-btn
            color="blue darken-1"
            text
            :to="{ name: 'tasks.edit', params:{id:sTask.id}}"
            >
              Editar
            </v-btn>
            <v-btn
              color="error"
              flat
              @click="destroy(sTask.id)"
            >
              Excluir
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-card>
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
          <template #item.deadline="{item}">
            {{item.deadline | formatDate}}
          </template>
          <template v-slot:item.show="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="showItem(item)"
            >
              mdi-eye
            </v-icon>
          </template>
        </v-data-table>
        <p v-else-if="!tasks.length && this.render" class="mb-6">Possui nenhuma tarefa, crie alguma </p>
      </v-card>
    </v-container>
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
import moment from 'moment'
export default {
  name: 'tasks',
  components: {
    Navbar
  },
  data () {
    return {
      tasks: [],
      render: false,
      search: '',
      dialog: false,
      sTask: {
        id: 0,
        name: '',
        description: '',
        deadline: '',
        project: '',
        complete: ''
      }
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    this.$store.dispatch('getTasks').then((response) => {
      this.tasks = response.data
      this.render = true
    })
  },
  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(value).format('DD/MM/YYYY')
      } else {
        return ''
      }
    }
  },
  computed: {
    headers () {
      return [
        { text: 'Concluido', value: 'complete', sortable: false },
        { text: 'Nome', value: 'name' },
        { text: 'Prazo', value: 'deadline' },
        { text: 'Visualizar', value: 'show', sortable: false }
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
      this.$store.dispatch('setSnackbar', 'Tarefa concluida')
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
      this.$store.dispatch('setSnackbar', 'Tarefa não concluida')
    },
    showItem (item) {
      this.sTask = Object.assign({}, item)
      this.dialog = true
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.sTask = Object.assign({}, this.defaultItem)
      })
    },
    destroy (id) {
      if (confirm('Tem certeza que desaja excluir esta tarefa?')) {
        this.$store.dispatch('destroyTask', {
          id: id
        })
          .then((response) => {
            this.$store.dispatch('setSnackbar', 'Tarefa excluída com sucesso')
            this.$router.push({
              name: 'tasks'
            })
          })
        this.dialog = false
      }
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
