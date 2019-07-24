<template>
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
            <h1 class="title">
              {{ phrase }}
            </h1>
            <h2 class="subtitle">
              Uma frase some o mito Chuck Norris
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
        const line = $axios.$get('api/chuck_fact')
        this.phrase = line
    }
}
</script>

<style>

</style>
