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
    <div class="columns">
      <div class="column">
        <b-button type="is-dark"
                  outlined rounded
                  @click="paste_a_text"
        > Paste from clipboard </b-button>
      </div>
      <div class="column">
        <b-button type="is-warning"
                  rounded
                  @click="slicing"
        > Slice text </b-button>
      </div>
      <div class="column">
        Sliced text: <br>
        <b-button type="is-danger" rounded
                  v-for="word in word_array" :key="word"
                  v-if="word !== ''"
        > {{ word }} </b-button>
      </div>
    </div>
    <b-button @click="check" :type="but" rounded outline> Typeof: {{ tipo }} </b-button>
<!--    <div :class="check"> LOL </div>-->
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
      my_text: '',
      word_array: [],
      but: 'is-primary',
      tipo: ''
    }
  },
  methods: {
    paste_a_text: function () {
      navigator.clipboard.readText()
        .then(text => {
          this.my_text = text
        }).catch(error => {
          console.log(error)
      });
    },
    slicing: function () {
      this.word_array = this.my_text.split(/\./)
    },
    check: function () {
      let stuff = event.target;
      if(typeof stuff === 'undefined'){
        this.but = 'is-danger'
      } else {
        this.but = 'is-success'
      }
      this.tipo = typeof stuff;
      console.log(stuff)
    }
  },
  watch: {
    'my_text'() {
      console.log(this.my_text)
    }
  }
  // handleFileUpload(){
  // console.log(this.$refs.file.files)
  // this.file = this.$refs.file.files[0];
  // },
}
</script>

<style scoped>
div.columns {
  margin-top: 1px;
}
</style>

