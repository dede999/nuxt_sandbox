<template>
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
            <h1 class="title">
              {{ phrase }}
            </h1>
            <h2 class="subtitle">
              A line about the myth Chuck Norris
            </h2>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phrase: ''
        }
    },
    beforeMount: function () {
        this.$axios.get('api/chuck_fact').then(r =>{
          this.phrase = r.data.fact
        }).catch(e =>{
          console.log(e)
        });
        // this.phrase = line
    }
}
</script>

<style>

</style>
