<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      "Just start  <b-icon
        icon="rocket"
        size="is-large"
      />"
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Author: <a href="https://github.com/anteriovieira">
        Antério Vieira
      </a>
    </h3>
    <div class="columns is-multiline">
      <div v-for="app in data"
        :key=app.id class="column is-one-third">
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">
              {{ app.name }} <span style="font-size: small"> {{ app.id }} </span>
            </p>
          </div>
          <div class="card-content">
            <div class="content">
              Autor: {{ app.author }} <br>
              Versão: {{ app.version }}
            </div>
          </div>
          <div class="card-footer">
            <div class="card-footer-item" id="edit">
              <span> Edit </span>
            </div>
            <div class="card-footer-item" id="delete">
              <span @click="delete_project(app.id)"> Delete </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Projects from '~/components/Projects'

export default {
  data:()=>{
    data:[]
  },
  components: {
    Projects
  },
  async fetch ({store}) {
    // dispatch action fetchAllPosts
    await store.dispatch('projects/get_all_projects')
  },
  computed: {
    applications () {
      return this.$store.state.projects.all
    }
  },
  methods: {
    delete_project: function(proj_id) {
      this.$store.dispatch('projects/delete_a_project', proj_id)
    }
  },
  mounted(){
    this.data = this.applications;
  },
  watch:{
    'applications'(val){
      if( val ){
        this.data = val;
      }
    }
  }
}
</script>

<style scoped>
div.card {
  border: 2px solid hsl(217, 71%, 53%);
}

div#edit#delete{
  transition: 1.4s
}

div#edit:hover {
  background-color: lightblue;
  font-weight: bolder;
}

div#delete:hover {
  background-color: hsl(217, 71%, 53%);
  color: aliceblue;
  font-weight: bolder;
}
</style>
