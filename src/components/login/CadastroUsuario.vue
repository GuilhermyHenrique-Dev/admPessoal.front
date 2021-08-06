<template>
    <v-container id="cadastro-usuario" class="pl-10">
        <v-form ref="novoCadastro" :value="novoCadastroValid">
            <v-row>
                <v-col cols="12">
                    <h1>Seja Bem-vindo</h1>
                </v-col>
                <v-col cols="11">
                    <v-text-field
                        v-model="formData.username"
                        outlined
                        dense
                        label="Usuario"
                        :rules="formRules.required"
                    ></v-text-field>
                </v-col>
                <v-col cols="11">
                    <v-text-field
                        v-model="formData.email"
                        outlined
                        dense
                        label="E-mail"
                        :rules="formRules.required"
                    ></v-text-field>
                </v-col>
                <v-col cols="11" md="5">
                    <v-text-field
                        v-model="formData.password"
                        outlined
                        dense
                        label="Senha"
                        :type="showPassword ?'text' :'password'"
                        :rules="formRules.password"
                    ></v-text-field>
                </v-col>
                <v-col cols="11" md="5">
                    <v-text-field
                        v-model="formData.PasswordConfirm"
                        outlined
                        dense
                        label="Confirmar senha"
                        :type="showPassword ?'text' :'password'"
                        :rules="[v => v == formData.password || 'As senhas não conferem.' ]"
                    ></v-text-field>
                </v-col>
                <v-col class="px-0" cols="11" md="1">
                    <v-btn 
                        icon
                        color="primary"
                        @click="showPassword = !showPassword"
                    >
                        <v-icon v-if="!showPassword">fa-eye</v-icon>
                        <v-icon v-else>fa-eye-slash</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="11">
                    <v-btn
                        depressed
                        small
                        width="100%"
                        height="30px"
                        color="primary" 
                        @click="sendData(formData)"
                    >Cadastrar</v-btn>
                </v-col>
            </v-row>
        </v-form> 
    </v-container>
</template>

<script>
export default {
    props: {
        sendForm: Function,
        formRules: Object,
        valid: Boolean
    },
    data() {
        return {
            showPassword: false,
            formData: {
                username: null,
                email: null,
                password: null,
            },
            PasswordConfirm: null,
            novoCadastroValid: true,
            requestAnswer:'Use 6 ou mais caracteres com uma mistura de letras maiúsculas, minúsculas, números e símbolos. Não use uma senha igual a padrão.',
        }
    },
    watch: {
        valid(bool) {
            if (bool)
            this.$refs.novoCadastro.reset()
        }
    },
    methods: {
        sendData(){
            if(this.$refs.novoCadastro.validate()){
                this.sendForm(this.formData)
            }
        }
    }
}
</script>

<style>

</style>