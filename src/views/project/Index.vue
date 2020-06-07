<template>
  <div id="">
    <Navbar></Navbar>
    <div class="d-flex justify-center mb-4">
      <h2>Meus projetos</h2>

    </div>  
    <div class="d-flex justify-space-around mb-6" v-if="projects.length">
      <v-card
      class="mx-auto col-4"
      outlined
      max-width="344"
      v-for="project in projects"
      :key="project.id">
        <v-card-text>
          <p class="display-1 text--primary">
            {{ project.name }}
          </p>
          
          <div class="text--primary">
            {{ project.description }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="deep-purple accent-4"
          >
            Ver projeto
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <p v-else class="mb-6">Possui nenhum projeto, crie algum </p>
    <v-btn
      v-show="!hidden"
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
export default {
  components: {
    Navbar
  },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    this.$store.dispatch('getProjects').then((response) => {
      this.projects = response.data
    })
  }
}
</script>

<style lang="scss">

.v-toolbar_content {
    box-shadow: none;
}
</style>
