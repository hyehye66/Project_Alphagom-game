<template>
  <div>
    <div class="common">
      <BackButton></BackButton>
    </div>
    <div class="title">{{ stage.name }}</div>
    <div class="subTitle">~프롤로그~</div>
    <div class="common">
      <PlayBar></PlayBar>
      <Score></Score>
    </div>
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import Score from "@/components/game/Score.vue";
import PlayBar from "@/components/game/PlayBar.vue";
import { ref, reactive } from "vue";
import { useGameStore } from "@/stores/game";
import router from "@/router";

export default {
  name: "SwampStartView",
  components: {
    BackButton,
    Score,
    PlayBar,
  },
  setup() {
    const game = useGameStore();
    const stage = reactive({ name: "swamp" });
    //reactive : 객체의 반응형 복사본을 반환합니다.
    game.setStage(stage.name);

    // 3초 후 다음 뷰로 넘기기
    setTimeout(() => {
      router.push({
        name: "swampDialog",
        params: { dialogNum: 0 },
      });
    }, 3000);

    return { stage };
  },
};
</script>

<style scoped>
.title {
}

.subTitle {
}

.common {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
