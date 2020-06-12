<template>
  <div id="">
    <Navbar></Navbar>
    <div class="d-flex justify-center mb-4">
      <h2>Meus projetos</h2>

    </div>
    <v-container fluid>
      <v-row v-if="projects.length && this.render">
        <v-col cols="4" lg="3" md="4"
          v-for="project in projects"
          :key="project.id">
          <v-card
          outlined
          >
            <v-card-text>
              <p class="display-1 text--primary">
                {{ project.name}}
              </p>

              <div class="text--primary">
                {{ project.description }}
              </div>
              <p class="">
                {{ project.deadline | formatDate }}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="deep-purple accent-4"
                :to="{ name: 'projects.show', params: { id: project.id } }"
              >
                Ver projeto
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    <p v-else-if="!projects.length && this.render" class="mb-6">Possui nenhum projeto, crie algum </p>
    </v-container>

    <v-btn
      color="blue"
      dark
      fixed
      bottom
      right
      fab
      :to="{ name: 'projects.create'}"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
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
      projects: [],
      render: false
    }
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
  created () {
    this.$store.dispatch('getProjects').then((response) => {
      this.projects = response.data
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
