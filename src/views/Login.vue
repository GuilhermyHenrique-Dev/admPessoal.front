<template>
    <v-container class="login-init">
        <v-row>
            <v-col class="text-right pb-10" cols="12">
                <v-icon class="" size="30px" color="primary">fas fa-donate</v-icon>
                <span class="logo-text"> ADM </span>
                <span class="logo-text">Pessoal</span>
            </v-col>
            <v-col class="" cols="12" md="7"></v-col>
            <v-col class="pt-15" cols="12" md="5">
                <v-form ref="userForm" :value="userFormValid">
                    <span aria-errormessage class="error--text">{{requestAnswer}}</span>
                    <v-row class="mt-15">
                        <v-col class="py-0" cols="12">
                            <v-text-field
                                v-model="formData.username"
                                outlined
                                dense
                                label="Usuario"
                                :rules="formRules.required"
                            ></v-text-field>
                        </v-col>
                        <v-col class="py-0" cols="12">
                            <v-text-field
                                v-model="formData.password"
                                outlined
                                dense
                                :append-icon="showPassword ?'fa-eye-slash' :'fa-eye'"
                                label="Senha"
                                :type="showPassword ?'text' :'password'"
                                @click:append="showPassword = !showPassword"
                                :rules="formRules.required"
                                @keydown.enter="autenticate(formData)"
                            ></v-text-field>
                        </v-col>
                        <v-col class="py-0" cols="6">
                            <a @click="dialog=true">Não possuo conta</a>
                        </v-col>
                        <v-col class="text-right py-0" cols="6">
                            <v-btn 
                                small 
                                depressed 
                                height="30px" 
                                color="primary" 
                                @click="autenticate(formData)"
                            >Logar</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
        <CadastroModal
            :dialog="dialog"
            :closeDialog="() => closeDialog()"
            :formRules="formRules"
            :sendForm="(formData) => saveForm(formData)"
        />
    </v-container>
</template>

<script>
import { mapState } from "vuex"
import CadastroModal from '../components/login/CadastroModal.vue'
export default {
    components: {
        CadastroModal
    },
    data() {
        return {
            formData: {
                username: null,
                password: null
            },
            showPassword: false,
            userFormValid: true,
            dialog: false,
            requestAnswer: '',
        }
    },
    computed:{
        ...mapState({
            formRules: (state) => state.formRules
        })
    },
    methods: {
        teste () {
            let paramModal = {
                type: "info",
                title: "Deseja liberar as edições de guias?",
                message: "As edições serão mantidas e outro usuário poderá editar este lote. <br/> Caso queira gerar novo xml  do lote corrigido para transmissão clique em Concluir Edição",
                callback: () => { },
                btConfirm: { name: "Ok", show: true, },
                btCancel: { name: 'Cancelar', show: true }
            }
            this.$store.commit("confirmMessage/showConfirmMessage", paramModal);
        },
        autenticate(formData) {
            if (this.$refs.userForm.validate()) 
            this.requestAnswer = ''
            this.$store.dispatch("request/getToken", formData).then(response => { 
                console.log(response)
                if(response.sucesso == false) {
                    this.$store.commit("hideLoader")
                    this.requestAnswer="Usuário e/ou senha incorretos."
                    return
                } 
                this.$store.dispatch("userData/getUserData", response)
            })
        },
        saveForm(formData) {
            let obj = {
                modulo: 'usuario',
                acao: 'cadastro',
                payload: formData
            }
            this.$store.dispatch("request/doRequest", obj).then(response => {
                if (response.sucesso == false) { console.info('teste nada cadastrado') }
                this.autenticate(response)
                this.dialog = false
            })
        },
        closeDialog() {
            this.dialog = false
        }
    }
}
</script>

<style>
.login-init {
    width: 100%;
    height: 100%;
    max-width: 100%;
    background-image: url('../assets/Imagens-Postblog-03.png');
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: left;
}
.logo-text {
    font-weight: 600;
    font-size: 25px;
    color: #4f4f4f;
}
@media (max-width: 960px) {
    .login-init {
        background-image: none;
    }
}
</style>