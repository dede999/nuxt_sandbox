<template>
    <div class="card">
        <div class="card-header">
        <p class="card-header-title">
            {{ app.name }}
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
            <span> Editar </span>
        </div>
        <div class="card-footer-item" id="delete">
            <span> Deletar </span>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        proj: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            app: {}
        }
    },
    beforeMount() {
        this.$axios.get('api/applications/' + this.props.proj)
            .then(r => {
                this.app = r.data
            }).catch(e => {
                console.log(e)
            });
    },
}
</script>

<style>

</style>
