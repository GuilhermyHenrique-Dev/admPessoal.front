<template>
  <div id="wrappLoader" v-if="loaderOn">
    <v-progress-linear
      v-if="linearLoader"
      color="red"
      :indeterminate="true"
      height="2.5"
      value="5"
      class="mt-1 mb-2"
    ></v-progress-linear>
    <div id="circleLoader" class="elevation-5 text-xs-center" v-if="circleLoader">
      <v-progress-circular :width="2" indeterminate color="primary"></v-progress-circular>
    </div>
    <div id="blockPage"></div>
  </div>
</template>

<script>
export default {
  props: {
    loaderOn: Boolean,
    linearLoader: Boolean,
    circleLoader: Boolean
  }
}
</script>

<style>
#blockPage {
  position: absolute;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
}
#wrappLoader .v-progress-linear {
  z-index: 999;
}
#circleLoader{
  position: fixed;
  padding: 3px;
  background: #fff;
  border-radius: 50px;
  z-index: 999;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
}
</style>
