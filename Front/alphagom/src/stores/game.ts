import api from "@/api/api";
import axios from "axios";
import { ref, computed } from 'vue';
import { defineStore } from "pinia";

import DarkcaveLine from "@/assets/dialog/DarkcaveLine.json";
import SkyLine from "@/assets/dialog/SkyLine.json";
import SwampLine from "@/assets/dialog/SwampLine.json";
import router from "@/router";

// vuex 를 사용할 대는 store/index.js 파일이 필요했지만,
// pinia는 index.js 없이 모듈화 된 파일만 있으면 된다.

// 이름을 가지는 내보내기를 할 때 보통 이름 앞에 use를 붙여 사용한다.
// Composition
export const useGameStore = defineStore("game", () => {
  /* state */
  const stage = ref(''); // 해당 스테이지 이름
  const dialog = ref({}); // 
  const scriptNum = ref(0); // 현재 스크립트 번호
  const SwampScore = ref(5000);   // 게임별 점수
  const DarkCaveScore = ref(2500);
  const SkyScore = ref(2500);
  const dialogList = ref([ // Dialog list
    DarkcaveLine, 
    SkyLine, 
    SwampLine 
  ]);
  const stageViewDict = ref({ // stage view dict
    "darkcave" : ["darkCaveStartView"],
    "sky" : ["birdProverbGameView"],
    "swamp" : ["kingCureGameView", "chaseGameView"] 
  });
  const stageGames = ref(['']); // game

  /* computed */
  // 해당 stage dialog
  // const dialog = computed(() => {
  //   // 해당 스테이지의 전체 대화를 가져온다.
  //   dialogList.value.forEach((element) => {
  //     if (element.stage == stage.value) {
  //       return element;
  //     }
  //   });
  // });

  // 현재 스크립트
  const script = computed(() => dialog.value.script[scriptNum.value]) 
  // 현재 effect
  const effect = computed(() => script.value.effect);
  // 현재 type
  const type = computed(() => script.value.type);

  // 현재 stage 에서 진행할 게임 리스트
  const gameList = computed(() => {
    switch(stage.value) {
      case "sky":
        return stageViewDict.value.sky;
      case "darkcave":
        return stageViewDict.value.darkcave;
      case "swamp":
        return  stageViewDict.value.swamp;
    }
  })

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
  

  return { 
    //state
    stage, 
    scriptNum,
    SwampScore,
    DarkCaveScore,
    SkyScore,
    dialogList,
    stageViewDict,
    stageGames,
    
    //computed
    dialog,
    script,
    effect,
    type,
    gameList,

    //action
    setStage,
  };
});


// export const useGameStore = defineStore("game", {
//   actions: {
//     setStage(stage: string) {
      
//       // start page에서 stage 이름 초기화
//       this.stage = stage;
//     },
    
//     setType(type: string) {
      
//       // script의 type로 초기화
//       this.type = type;
//     },
//     setEffect(effect: string) {
      
//       // script의 effect로 초기화
//       this.effect = effect;
//     },
//     setGameList(stage: string) {

//       // gameList set
//       switch(stage) {
//         case "sky":
//           this.stageGames = this.dialogDict.sky;
//           break;
//         case "darkcave":
//           this.stageGames = this.dialogDict.darkcave;
//           break;
//         case "swamp":
//           this.stageGames = this.dialogDict.swamp;
//           break;
//       }
//     },
//     getNextScript() {
      
//       console.log("클클클릭");

//       // script type이 story일 때 다음 스크립트 호출
//       if (this.type === "story") {
        
//         // scriptNum += 1
//         this.scriptNum++;
        
//         // 다음 스크립트 호출 & type 및 effect 초기화
//         const nextScript = this.dialog.script[this.scriptNum];
//         this.setType(nextScript.type);
//         this.setEffect(nextScript.effect);
//       }

//       // 게임 route
//       if (this.type === "game") {

//         // scriptNum += 1
//         this.scriptNum++;

//         // 다음 스크립트 호출 & type 및 effect 초기화
//         const nextScript = this.dialog.script[this.scriptNum];
//         this.setType(nextScript.type);
//         this.setEffect(nextScript.effect);

//         const gameType = this.stageGames[0];
//         this.stageGames.pop();
//         router.push(gameType);
//       }

//       if (this.type === "question") {

//       }

//       if (this.type === "end") {

//       }
//     },
//     beforeScript() {
//       // 이전 스크립트로
//       this.scriptNum--;
//     },
//     nextStage() {},
//     getDialog() {
//       // 해당 스테이지의 전체 대화를 가져오는 함수
//       this.dialogList.forEach((element) => {
//         if (element.stage == this.stage) {
//           this.dialog = element;
//         }
//       });
//     },
//       //   router.push("stageChangeView");
//       //   return;
//       // }
//       // return this.dialog[this.stageStatus][this.scriptNum];
//     // },
//   },
// });
