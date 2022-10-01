<template>
  <div class="container">
    <p>내 정보</p>
    {{ testFunc() }}
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";

const store = useAuthStore();
function testFunc() {
  this.store.fetchUserInfo()
  console.log('testFunc 잘 가져왔나요?')
}

</script>


<style scoped>
  
</style>