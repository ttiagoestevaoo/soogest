<template>
  <div id="">
    <Navbar></Navbar>

    <v-container>
      <v-row>
        <v-col cols="12" class="mx-auto" md="6" sm="12">
          <v-card
            class="mx-auto col-12"
            outlined
          >
            <v-card-text>

              <form  @submit.prevent="submit">
                <p class="display-1 text--primary">
                  Criar tarefa
                </p>
                <v-col cols=12>
                    <label for="name" class="col-12">Nome</label>
                    <input name="name" class="col-12" required type="text" v-model="name" placeholder=""/>
                </v-col>

                <v-col cols=12>
                    <label for="description" class="col-12">Descrição</label>
                    <textarea v-model="description" style="border:1px solid #b2b2b2;" class="col-12" cols="30" name="description" required rows="5"></textarea>
                </v-col>

                <v-col cols=12>
                    <label for="deadline" class="col-12">Prazo</label>
                    <input name="deadline" class="col-12" required type="date"  v-model="deadline" placeholder=""/>
                </v-col>

                <v-col cols=12 v-if="!this.$route.params.project_id">
                  <label for="project_id" class="col-12">Projeto</label>
                  <select
                    name="project_id"
                    class="col-12 selectProject"
                    v-model="project_id"
                  >
                    <option v-for="project in projects" :key="project.id" v-bind:value="project.id">
                      {{ project.name }}
                    </option>
                  </select>
                </v-col>

                <v-col cols=12>
                  <label for="complete" class="mr-3">Concluido</label>
                  <input type="checkbox" name="complete" v-model="complete">
                </v-col>

                <v-col cols=12>
                    <v-btn type="submit">Salvar </v-btn>
                    <v-btn :to="{ name: 'tasks' }">Cancelar</v-btn>
                </v-col>

              </form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
      name: '',
      description: '',
      deadline: '',
      complete: '',
      project_id: '',
      projects: []
    }
  },
  created () {
    this.$store.dispatch('getProjects').then((response) => {
      this.projects = response.data
      this.render = true
    })
  },
  methods: {
    submit () {
      var id
      if (this.$route.params.project_id) {
        id = this.$route.params.project_id
      } else {
        id = this.project_id
      }
      this.$store.dispatch('createTask', {
        name: this.name,
        description: this.description,
        deadline: this.deadline,
        project_id: id,
        complete: this.complete
      })
        .then((response) => {
          this.$store.dispatch('setSnackbar', 'Tarefa criada com sucesso')
          if (this.$route.params.project_id) {
            this.$router.push({
              name: 'projects.show',
              params: {
                id: this.$route.params.project_id
              }
            })
          } else {
            this.$router.push({
              name: 'tasks'
            })
          }
        })
    }
  }
}
</script>
