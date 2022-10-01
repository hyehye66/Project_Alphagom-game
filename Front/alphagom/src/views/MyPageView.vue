<template>
  <div>
    <p>내 정보</p>
    {{ testMyPage() }}
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useMyPageStore } from "@/stores/mypage";

export default {
  name: 'MyPageView',
  components: {
  },
  computed: {
    ...mapState(useMyPageStore, ["testMyPage"]),
  },
  setup() {
      
  },

}
</script>


<style scoped>
  
</style>