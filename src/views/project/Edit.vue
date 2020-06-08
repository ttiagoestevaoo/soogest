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
                   Editar projeto
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
                <v-col cols=12>
                  <v-row>
                    <v-col cols=4>
                      <v-btn :to="{ name: 'projects.show', params: id }">Cancelar</v-btn>
                    </v-col>

                    <v-col cols=4>
                      <v-btn type="submit">Salvar </v-btn>
                    </v-col>

                    <v-col cols=4>
                      <v-dialog
                        v-model="dialog"
                        width="500"
                      >
                        <template v-slot:activator="{ on }">
                          <v-btn
                            v-on="on"
                          >
                            Delete
                          </v-btn>
                        </template>

                        <v-card>
                          <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                          >
                            Deletar {{ name }}
                          </v-card-title>

                          <v-card-text>
                            Tem certeza que desaja excluir este projeto?
                          </v-card-text>

                          <v-divider></v-divider>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="primary"
                              flat
                              @click="destroy"
                            >
                              Excluir
                            </v-btn>

                            <v-btn
                              color="primary"
                              flat
                              @click="dialog = false"
                            >
                              Cancelar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </v-row>
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
      id: '',
      name: '',
      description: '',
      deadline: '',
      dialog: false
    }
  },
  methods: {
    destroy () {
      this.$store.dispatch('destroyProject', {
        id: this.id
      })
        .then((response) => {
          this.$store.dispatch('setSnackbar', 'Projeto excluído com sucesso')
          this.$router.push({
            name: 'projects'
          })
        })
    },
    submit () {
      this.$store.dispatch('updateProject', {
        id: this.id,
        name: this.name,
        description: this.description,
        deadline: this.deadline
      })
        .then((response) => {
          this.$store.dispatch('setSnackbar', 'Projeto editado com sucesso')
          this.$router.push({
            name: 'projects.show',
            params: this.id
          })
        })
    }
  },
  created () {
    this.$store.dispatch('getProject', this.$route.params.id)
      .then((response) => {
        this.id = response.data.id
        this.name = response.data.name
        this.description = response.data.description
        this.deadline = response.data.deadline
      })
  }
}
</script>
