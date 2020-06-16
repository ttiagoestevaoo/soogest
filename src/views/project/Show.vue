<template>
  <div id="">
    <Navbar></Navbar>
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
                <p>{{ sTask.deadline | formatDate }}</p>
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
    <v-row>
      <v-col cols="12" md=3 lg=4>
        <v-card>
          <v-card-text>
            <h2>Listar tarefas</h2>
            <div
            v-for="task in project.tasks"
            :key="task.id"
            >
              <v-btn text large @click="showItem(task)">{{ task.name }}</v-btn>
            </div>
            <div>
              <v-btn
                color="blue"
                dark
                :to="{ name: 'tasks.create', params: { project_id: this.project.id } }"
              >
                <v-icon>mdi-plus</v-icon> Adicionar tarefa
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col  cols="12" md=9 lg=8>
        <v-card>
          <v-card-text>
            Nome:<h2>{{ project.name }}</h2>
            Descrição:<p>{{ project.description }}</p>
            Prazo:<p>{{ project.deadline | formatDate }}</p>
            <v-btn :to="{ name: 'projects.edit', params:project.id}">
              Editar
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import moment from 'moment'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      project: {},
      sTask: []
    }
  },
  created () {
    this.$store.dispatch('getProject', this.$route.params.id)
      .then((response) => {
        this.project = response.data
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
  methods: {
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
            this.$store.dispatch('setSnackbar', 'Projeto excluído com sucesso')
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
