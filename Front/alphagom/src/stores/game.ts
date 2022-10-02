/* eslint-disable vue/return-in-computed-property */
import api from "@/api/api";
import axios from "axios";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

import DarkcaveLine from "@/assets/dialog/DarkcaveLine.json";
import SkyLine from "@/assets/dialog/SkyLine.json";
import SwampLine from "@/assets/dialog/SwampLine.json";
import router from "@/router";
import { stringLiteral } from "@babel/types";

// vuex 를 사용할 대는 store/index.js 파일이 필요했지만,
// pinia는 index.js 없이 모듈화 된 파일만 있으면 된다.

// 이름을 가지는 내보내기를 할 때 보통 이름 앞에 use를 붙여 사용한다.
// Composition
export const useGameStore = defineStore("game", () => {
  /* state */
  const stage = ref(""); // 해당 스테이지 이름
  const dialog = ref(); // 해당 스테이지 dialog
  const scriptNum = ref(0); // 현재 스크립트 번호
  const SwampScore = ref(5000); // 게임별 점수
  const DarkCaveScore = ref(2500);
  const SkyScore = ref(2500);
  const isActive = ref(false); // 응아니 버튼
  const dialogList = ref([
    // Dialog list
    DarkcaveLine,
    SkyLine,
    SwampLine,
  ]);
  const stageViewDict = ref({
    // stage view dict
    darkcave: ["darkCaveStartView"],
    sky: ["birdProverbGameView"],
    swamp: ["kingCureGameView", "chaseGameView"],
  });
  // 현재 스크립트 
  const script = computed(() => dialog.value.script[scriptNum.value]) 
  // 현재 effect
  const effect = computed(() => script.value.effect);
  // 현재 type
  const type = computed(() => script.value.type);

  // 현재 stage 에서 진행할 게임 리스트
  const gameList = computed(() => {
    switch (stage.value) {
      case "sky":
        return stageViewDict.value.sky;
      case "darkcave":
        return stageViewDict.value.darkcave;
      case "swamp":
        return stageViewDict.value.swamp;
    }
  });

  /* actions */
  // start page에서 stage 이름 초기화
  function setStage(stageStr: string) {
    stage.value = stageStr;

    // 해당 스테이지의 전체 대화를 가져온다.
    dialogList.value.forEach((element) => {
      if (element.stage == stage.value) {
        dialog.value = element;
        console.log(dialog.value);
      }
    });
  }

  function plusNum() {
    scriptNum.value++
    isActive.value = false;
    if (type.value == "game") {
      
      const gameType = gameList.value[0];
      console.log(gameList.value[0]);
      gameList.value.pop();
      router.push({name : gameType});

    }

    if (type.value == "question") {
      // 버튼 실행
      isActive.value = true;
      
      // yes 응답 => pass
      
      // no 응답 => scriptNum.value++
    }

    if (type.value == "yes") {
      scriptNum.value++
    }


  }

  function skip() {

    dialog.value.script.forEach((element: any)=> {

      scriptNum.value++
      
      if (element.type == "game") {
        
        const gameType = gameList.value[0];
        console.log(gameList.value[0]);
        gameList.value.pop();
        router.push({name : gameType});
      }

    })
  }
  
  return { 

    //state
    stage,
    scriptNum,
    SwampScore,
    DarkCaveScore,
    SkyScore,
    dialogList,
    stageViewDict,
    isActive,

    //computed
    dialog,
    script,
    effect,
    type,
    gameList,

    //action
    setStage,
    plusNum,
    skip,
  };
});
