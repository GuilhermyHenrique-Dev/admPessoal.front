<template>
  <v-app id="app">
    <router-view/>
    <loader
      :loaderOn="loaderOn"
      :linearLoader="$store.state.loader.linearLoader"
      :circleLoader="$store.state.loader.circleLoader"
    />
    <popup-message
      :message="$store.state.popupMessage.message"
      :title="$store.state.popupMessage.title"
      :type="$store.state.popupMessage.type"
      :btConfirm="$store.state.popupMessage.btConfirm"
      :btCancel="$store.state.popupMessage.btCancel"
      :textForm="$store.state.popupMessage.textForm"
      :callback="$store.state.popupMessage.callback"
      :messageForm="$store.state.popupMessage.messageForm"
    />
  </v-app>
</template>

<script>
import Loader from './components/common/Loader.vue';
import PopupMessage from './components/common/PopupMessage.vue';
export default {
  name: 'home',
  components: {
    Loader,
    PopupMessage
  },
  computed: {
    loaderOn: function() {
      return this.$store.state.loader.loaderOn;
    }
  }
};
</script>
