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
                  Criar projeto
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
                    <v-btn type="submit">Salvar </v-btn>
                    <v-btn :to="{ name: 'projects' }">Cancelar</v-btn>
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
      deadline: ''
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('createProject', {
        name: this.name,
        description: this.description,
        deadline: this.deadline
      })
        .then((response) => {
          this.$store.dispatch('setSnackbar', 'Projeto criado com sucesso')
          this.$router.push({
            name: 'projects'
          })
        })
    }
  }
}
</script>
