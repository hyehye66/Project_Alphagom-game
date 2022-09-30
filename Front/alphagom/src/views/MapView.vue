<template>
  <div>
    <NavBar></NavBar>
    <div class="magic-castle">
      <button>magic castle</button>
    </div>
    <div class="dark-cave">
      <button>dark cave</button>
    </div>
    <div class="swamp">
      <button>swamp</button>
    </div>
    <div class="sky">
      <button>sky</button>
    </div>
    
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'MapView',
  components: {
    NavBar,
  },
  setup() {
    return {

    }
    
  }
};
</script>

<style scoped>
</style>
