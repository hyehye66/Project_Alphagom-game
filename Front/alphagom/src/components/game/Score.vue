<template>
  <div>{{ SwampScore }}</div>
</template>

<script>
import { mapState } from "pinia";
import { useGameStore } from "@/stores/game";

export default {
  name: "Score",
  computed: {
    ...mapState(useGameStore, ["SwampScore"]),
  },
};
</script>

<style scoped></style>
