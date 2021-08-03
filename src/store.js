import Vue from 'vue'
import Vuex from 'vuex'

// Modulos do store 
import formRules from './store/form-rules'
import popupMessage from './store/popup-message'
import request from './store/request'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        formRules,
        popupMessage,
        request
    },
    state: {
        userLoged: {},
        loader: {
            loaderOn: false,
            linearLoader: true,
            circleLoader: false
        },
        showMenu: false
    },
    actions: {

    },
    mutations: {
        updateUserLoged: (state, obj) => {
            state.userLoged = obj
        },
        showLoader: (state, opts) => {
        if (opts && opts.circle) {
            state.loader.linearLoader = false
            state.loader.circleLoader = true
        } else {
            state.loader.linearLoader = true
            state.loader.circleLoader = false
        }
        state.loader.loaderOn = true
        },
        hideLoader: state => (state.loader.loaderOn = false),
        toogleMenu: (state, newStatus) => (state.showMenu = newStatus)
    }
})