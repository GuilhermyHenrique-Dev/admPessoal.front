<template>
  <v-dialog scrollable v-model="$store.state.popupMessage.popupDialog" persistent max-width="480">
    <v-card>
      <v-card-title class="text-center d-flex flex-column">
        <v-icon :color="type">{{icons[type]}}</v-icon>
       <span class="title">{{title}}</span>
      </v-card-title>
      <v-card-text class="text-center" v-html="message"></v-card-text>
      <v-form ref="messageTextForm" :value="textFormValid">
        <v-card-text v-if="textForm.show" class="px-12 py-0">
          <legend class="px-12">Justificativa</legend>
          <v-textarea
            class="px-12"
            outlined
            flat
            solo
            dense
            height="150px"
            :rules="formRules.required"
            :placeholder="textForm.label"
            v-model="messageText"
          ></v-textarea>
        </v-card-text>
      </v-form>
      <v-card-actions class="pt-0 pb-3">
        <v-spacer></v-spacer>
        <v-btn
          height="32px"
          small
          v-show="btCancel.show"
          color="primary"
          outlined
          @click="doCancel"
        >{{btCancel.name}}</v-btn>
        <v-btn
          height="32px"
          small
          v-show="btConfirm.show"
          :color="btConfirm.color"
          depressed
          @click="doCallback"
        >{{btConfirm.name}}</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    message: String,
    title: String,
    type: String,
    callback: Function,
    messageForm: Function,
    btConfirm: Object,
    btCancel: Object,
    textForm: Object
  },
  computed: {
    ...mapState({
      formRules: (state) => state.formRules,
    }),
  },
  mounted () {},
  methods: {
    doCallback () {
      if (this.callback) {
        this.callback()
      }
      if (this.messageText) {
        this.messageForm(this.messageText)
        this.messageText = null
        this.$refs.messageTextForm.reset()
      }
      this.$store.commit('popupMessage/closePopupMessage')
    },
    doCancel () {
      if(this.btCancel.callback){
        this.btCancel.callback()
      }
      this.$store.commit('popupMessage/closePopupMessage')
      if (this.textForm.show) {
        this.messageText = null
        this.$refs.messageTextForm.reset()
      } 
    }
  },
  data () {
    return {
      messageText: null,
      textFormValid: true,
      icons: {
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-circle',
        info: 'far fa-question-circle',
        success: 'far fa-check-circle',
      },
    }
  },
}
</script>

<style>
.confirmMesgTxt {
  border-bottom: 1px solid #eee;
}
</style>
