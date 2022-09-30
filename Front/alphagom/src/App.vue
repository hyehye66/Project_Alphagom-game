<template>
  <div class="app">
    <NavBar></NavBar>
    <router-view class="view" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default{
  name : "App",
  components : { NavBar },
  setup() {
    
  }

}
</script>

<style>
/* body {
  position: relative;
  width: 926px;
  height: 428px;
  max-height: 428px;
}; */
#app {
  position: relative;
  width: 926px;
  height: 428px;
  background-color: #F5F5DC;
  padding: 0 !important;
  overflow: hidden;
}
</style>