import { __values } from "tslib";

export const state = () => ({
    all: []
})

export const actions = {
    async get_all_projects({commit}) {
        await this.$axios.get('api/applications')
            .then(r => {
                commit('all_projects', r.data)
            }).catch(e => {
                console.log(e)
            });   
    },
    async delete_a_project({commit}, id) {
        await this.$axios.delete('api/applications/' + id)
            .then(r => {
                let msg = 'Element ' + id + ' was destroyed'
                this.$toast.open({
                  message: msg, type: 'is-success', duration: 1000
                })
                commit('destroy_project', id)
            }).catch(e => {
                console.log(e)
                this.$toast.open({
                    message: 'This has gone wrong', type: 'is-danger', duration: 1000
                })
            });
    }
}

export const mutations = {
    all_projects(state, apps) {
        state.all = apps
    },
    new_project(state, app) {
        state.all.push(app)
    },
    destroy_project(state, id) {
        state.all.filter(function(id) {
            return id != value.id
        })
    }
}