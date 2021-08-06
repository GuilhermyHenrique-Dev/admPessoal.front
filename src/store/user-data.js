import router from '../router/router'

const state = {
  userData: {
    id: null,
    username: '',
    email: ''
  }
}

const mutations = {
  updateUserData: (state, obj) => {
    console.log(obj)
    delete obj.sucesso
    delete obj.mensagem
    state.userData = obj
  },

  updateForceChangePassword: (state) => {
    state.userData.ForceChangePassword = false
    localStorage.setItem('userData', JSON.stringify(state.userData))
  }
}

const getters = {
  getUserData: state => () =>{
    return state.userData
  }
}
const actions ={
  async getUserData({commit}, data) {
    console.info('getUsuario')
    console.log(data)
    let obj = {
      modulo: 'usuario',
      acao: 'getusuario',
      payload: { id: data.id },
      token: data.token
    }
    await this.dispatch("request/doRequest", obj).then(response => {
      if(response.sucesso == false) {
        // this.requestAnswer = response && !response.IsActive? 'Usuário bloqueado.' : ''
        commit("hideLoader")
        return
      }
      router.push('/')
      this.dispatch("request/saveTokenInfo", { token: data.token, userData: response } , {root: true}).then(()=>{})
    })
  },

  async verifyAuth({commit}) {
    let now = new Date().getTime()
    console.log(localStorage.token)
    console.log(localStorage.expireToken)
    console.log(now)
    this.commit("hideLoader")
    if (localStorage.token && localStorage.expireToken > now) {
      let userData = JSON.parse(localStorage.getItem('userData'))
      commit("updateUserData", userData)
    return true
  } else {
      router.push('/login').catch(()=>{})
    return false
  }
},
}
export default {
  namespaced: true,
  root: true,
  state,
  actions,
  mutations,
  getters
}