<template>
  <div>
    <NavBar></NavBar>
    <!-- <h1>{{ dialog }}</h1> -->
    <CommonDialog></CommonDialog>
    <a class="btn btn-primary">앞으로 가기</a>
    <a class="btn btn-primary">뒤로 가기</a>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { useGameStore } from "@/stores/game";
import CommonDialog from "@/components/game/CommonDialog.vue";

export default {
  name: "MagicCastleDialogView",
  components: {
    NavBar,
    CommonDialog,
  },
  setup() {
    const game = useGameStore();
    game.getDialog();
    const dialog = game.dialog;
    game.getMaxNum();

    return { dialog };
  },
};
</script>

<style scoped></style>
