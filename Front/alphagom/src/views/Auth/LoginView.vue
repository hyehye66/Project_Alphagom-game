<template>
  <div class="container">
    <div class="userInfo">
      <p>로그인</p>
      {{ username }}
      {{ login() }}
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";

export default {
  name: "LoginView",
  components: {},
  computed: {
    ...mapState(useAuthStore, ["username", "login"]),
  },
  setup() {},
};
</script>

<style scoped>
.container {
  /* background-image: url("src/assets/image/홈_배경_low.png"); */
  background-color: blueviolet;
  width: 100vw;
  height: 100vh;
}
.userInfo {
  position: relative;
}
</style>
