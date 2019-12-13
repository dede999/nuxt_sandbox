<template>
  <form action="">
    <div class="modal-card">
      <div class="modal-card-head">
        <p class="modal-card-title">
          {{ title }} <b-button type="is-danger" rounded
                         class="is-pulled-right"
                         @click="$parent.close()"> X </b-button>
        </p>
      </div>
      <section class="modal-card-body">
        <b-field label="ID" v-if="id > 0">
          <b-input
            type="number" :value="id"
            disabled rounded> </b-input>
        </b-field>
        <b-field label="Project Name">
          <b-input
            placeholder="The name of the project" v-model="app.name"
            required rounded> </b-input>
        </b-field>
        <b-field label="Author">
          <b-input
            placeholder="The name of the author" v-model="app.author"
            required rounded></b-input>
        </b-field>
        <b-field label="Version">
          <b-input
            placeholder="Project version" v-model="app.version"
            required rounded></b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <b-button type="is-warning" v-if="id > 0"
                  rounded @click="editing"> Edit </b-button>
        <b-button type="is-success" v-else rounded
                  @click="creating"> Create </b-button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  props: {
      id: {
        type: Number,
        required: false,
        default: -1
      },
      name: {
        type: String,
        required: false,
        default: ''
      },
      author: {
        type: String,
        required: false,
        default: ''
      },
      version: {
        type: String,
        required: false,
        default: ''
      },
  },
  data() {
    return {
      app: {
        id: this.id,
        name: this.name,
        author: this.author,
        version: this.version
      },
    }
  },
  computed: {
    title(){
      return this.id > 0? 'Edit': 'Create'
    }
  },
  methods: {
    editing: function () {
      this.$store.dispatch('projects/update_a_project', this.app);
      location.reload()
    },
    creating: function () {
      this.$store.dispatch('projects/create_a_project', this.app);
      this.$parent.close()
    }
  }
}
</script>

<style>

</style>
