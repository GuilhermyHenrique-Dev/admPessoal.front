import axios from 'axios'
import qs from 'querystring'
import router from '../router/router'
axios.defaults.baseURL =  'http://localhost:54807' 
const myRouters = router

const actions = {
    async doRequest(state, obj) {
        console.log(obj)
        const url = `/api/${obj.modulo}/${obj.acao}`
        const data = qs.stringify(Object.assign(obj.payload))
        const _this = this
        if (obj.payload.id == null) {  myRouters.push('/login').catch(()=>{}) }
        console.info('validou token')
        let USER_TOKEN = obj.token? obj.token : localStorage.getItem('token')
        let AuthStr = 'Bearer '.concat(USER_TOKEN)
        if (USER_TOKEN && obj.acao != 'cadastro') {
            // axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
            axios.defaults.headers.Authorization = AuthStr
        }
        if (obj && !obj.noLoader) {  this.commit('showLoader', { circle: true }) }
        let returnRequestData = await axios.post(url, data)
            .then(response => {
                console.log(response)
                if (!obj.noLoader) {
                    _this.commit('hideLoader')
                }
                if( response.data.sucesso != true || response.data.sucesso != false) {
                    let paramModal = { }
                    paramModal.message = 'Erro ao conectarse com a API'
                    paramModal.title = 'Ocorreu erro'
                    paramModal.type = 'error'
                    paramModal.callback = null
                    paramModal.btConfirm = {
                        name: 'Ok',
                        show: true
                    }
                    paramModal.btCancel = {
                        name: 'Cancelar',
                        show: false
                    }
                    _this.commit('hideLoader')
                    _this.commit('confirmMessage/showConfirmMessage', paramModal)
                    let respErro = {sucesso: false}
                    return respErro
                }
                return response.data
            })
            .catch(error => {
                console.log(error)
                //Caso queira tratar o erro no retorno da chamada.
                if (obj.returnError) {
                    if (!obj.noLoader) {
                        _this.commit('hideLoader')
                    }
                    return error
                }
                // Erro de autorização, retorna para página de login
                if (error.response && error.response.status == 401) {
                    myRouters.push('/login').catch(()=>{})
                }
                
                let paramModal = {}
                paramModal.message = 'Contate o administrador do sistema'
                paramModal.title = error.message
                paramModal.type = 'error'
                paramModal.callback = null
                paramModal.btConfirm = {
                    name: 'Ok',
                    show: true,
                    color: 'error'
                }
                paramModal.btCancel = {
                    name: 'Cancelar',
                    show: false
                }
                _this.commit('hideLoader')
                _this.commit('confirmMessage/showConfirmMessage', paramModal)
                let respErro = {sucesso: false}
                return respErro
            })
        return returnRequestData
    },


    async getToken(state, obj) {
        console.log(obj)
        localStorage.clear();
        let url = '/api/usuario/authenticate';
        let _this = this;
        this.commit('showLoader', { circle: true })
        let data = qs.stringify(Object.assign(obj))
        let tokenData = await axios.post(url, data)
            .then(response => {
                _this.commit('hideLoader')
                return response.data
            })
            .catch(error => {
                _this.commit('hideLoader')
                return error
            })
        return tokenData
    },

    verifyAuth() {
        let now = new Date().getTime()
        if (localStorage.token && localStorage.expireToken > now) {
            return true
        } else {
            return false
        }
    },

    saveTokenInfo(state, obj) {
        console.info('save token')
        console.log(obj)
        let token = obj.token 
        let expires_in = new Date().getTime() + (2000*1000)
        localStorage.setItem('token', token)
        localStorage.setItem('expireToken', expires_in)
        localStorage.setItem('userData', JSON.stringify(obj.userData))
        return true
    }
}
export default {
    namespaced: true,
    root: true,
    actions
}