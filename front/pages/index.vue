<template>
  <section class="section">
    <chuck/>

    <div class="columns is-mobile is-multiline">
      <card
        title="Free"
        icon="github-circle"
      >
        Open source on <a href="https://github.com/buefy/buefy">
          GitHub
        </a>
      </card>

      <card
        title="Responsive"
        icon="cellphone-link"
      >
        <b class="has-text-grey">
          Every
        </b> component is responsive
      </card>

      <card
        title="Modern"
        icon="alert-decagram"
      >
        Built with <a href="https://vuejs.org/">
          Vue.js
        </a> and <a href="http://bulma.io/">
          Bulma
        </a>
      </card>

      <card
        title="Lightweight"
        icon="arrange-bring-to-front"
      >
        No other internal dependency
      </card>
    </div>
    <div class="column">
      <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      <button v-on:click="submitFile()">Submit</button>
    </div>
    <div class="column">
      You are uploading this: {{ file }}
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import Chuck from '~/components/Chuck'

export default {
  name: 'HomePage',

  components: {
    Card,
    Chuck
  },
  data() {
    return {
      file: ''
    }
  },
  methods: {
    handleFileUpload(){
      console.log(this.$refs.file.files)
      this.file = this.$refs.file.files[0];
    }
  },
}
</script>

<style scoped>
div.columns {
  margin-top: 1px;
}
</style>

