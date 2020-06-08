<template>
  <div id="tasks">
    <Navbar></Navbar>
    <div class="d-flex justify-space-between">
      <p>Meus projetos</p>

    </div>  
    <div class="d-flex justify-space-around mb-6">
      <v-card
      class="mx-auto col-4"
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
    <v-btn
      color="blue"
      dark
      fixed
      bottom
      right
      fab
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
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Projeto teste',
          description: 'Projeto gerado estaticamente',
          deadline: '2020-12-01'
        },
         {
          id: 2,
          name: 'Projeto teste 2',
          description: 'Projeto gerado estaticamente',
          deadline: '2020-12-02'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.v-toolbar_content {
    box-shadow: none;
}
</style>
