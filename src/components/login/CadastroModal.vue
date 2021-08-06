<template>
    <v-dialog v-model="dialog" persistent scrollable max-width="80%">
        <v-card>
            <v-card-title class="pa-0">
                <v-col class="text-right pa-0" cols="12">
                    <v-btn icon dark @click="closeDialog()">
                        <v-icon color="primary">mdi-close</v-icon>
                    </v-btn>
                </v-col>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col class="pa-0" cols="12" md="6">
                        <CadastroUsuario
                            :sendForm="(formData) => sendForm(formData)"
                            :formRules="formRules"
                            :valid="dialog"
                        />
                    </v-col>
                    <v-col class="pa-0" cols="12" md="6">
                        <CadastroInfo/>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions class="pa-0">
                <v-col class="text-center" cols="12">
                    <v-btn
                        outlined
                        depressed
                        small
                        height="30px"
                        color="primary" 
                        @click="closeDialog()"
                    >Voltar</v-btn>
                </v-col>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import CadastroUsuario from './CadastroUsuario'
import CadastroInfo from './CadastroInfo.vue'
export default {
    components: {
        CadastroUsuario,
        CadastroInfo
    },
    props: {
        dialog: Boolean,
        closeDialog: Function,
        formRules: Object,
        sendForm: Function
    },
    data() {
        return {
        };
    },
}  
</script>

<style>
</style>