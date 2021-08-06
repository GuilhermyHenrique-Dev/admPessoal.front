<template>
  <v-app id="Main">
    <v-main>
      <Navigation/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '../components/common/Navigation.vue'
export default {
  components:{
    Navigation
  },
  data: () => ({
  }),
  computed: {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style>
</style>