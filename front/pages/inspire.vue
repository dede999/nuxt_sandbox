<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      "Just start  <b-icon
        icon="rocket"
        size="is-large"></b-icon>"
    </h2>
    <b-button type="is-primary" class="is-pulled-right is-large"
              @click="create_activate = true" rounded>
      Create
    </b-button>
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
              {{ app.name }}
            </p>
            <span class="is-pulled-right"> {{ app.id }} </span>
          </div>
          <div class="card-content">
            <div class="content">
              Autor: {{ app.author }} <br>
              Versão: {{ app.version }}
            </div>
          </div>
          <div class="card-footer">
            <div @click="edit_app(app)" class="card-footer-item" id="edit">
              <span> Edit </span>
            </div>
            <div @click="delete_project(app)" class="card-footer-item" id="delete">
              <span> Delete </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal :active.sync="modal_activate" has-modal-card>
      <projects v-bind="an_app"/>
    </b-modal>
    <b-modal :active.sync="create_activate" has-modal-card>
      <projects/>
    </b-modal>
  </section>
</template>

<script>
import Projects from '~/components/Projects'

export default {
  data() {
    return {
      data:[],
      an_app: {
        id: -1,
        name: '',
        author: '',
        version: ''
      },
      modal_activate: false,
      create_activate: false
    }
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
    delete_project: function(project) {
      this.$store.dispatch('projects/delete_a_project', project.id);
      this.data = this.$pop_an_item(this.data, project)
    },
    edit_app: function (app) {
      this.an_app = app;
      this.modal_activate = true
    }
  },
  beforeMount(){
    this.data = this.applications;
    console.log(this.data)
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
