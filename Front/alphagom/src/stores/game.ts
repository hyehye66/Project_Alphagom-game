import api from "@/api/api";
import axios from "axios";
import { defineStore } from "pinia";

import DarkcaveLine from "@/assets/dialog/DarkcaveLine.json";
import SkyLine from "@/assets/dialog/SkyLine.json";
import SwampLine from "@/assets/dialog/SwampLine.json";
import router from "@/router";

// vuex 를 사용할 대는 store/index.js 파일이 필요했지만,
// pinia는 index.js 없이 모듈화 된 파일만 있으면 된다.

// 이름을 가지는 내보내기를 할 때 보통 이름 앞에 use를 붙여 사용한다.
export const useGameStore = defineStore("game", {
  state: () => ({
    // stage 이름
    stage: "",
    // 다음에 올 동작 타입
    nextType: "",
    // 해당 stage dialog
    dialog: {},
    // 스크립트 넘버
    scriptNum: 0,
    // 게임별 점수
    SwampScore: 5000,
    DarkCaveScore: 2500,
    SkyScore: 2500,
    // stage list
    dialogList: [DarkcaveLine, SkyLine, SwampLine],
  }),
  actions: {
    setStage(stage: string) {
      // start page에서 stage 이름 초기화
      this.stage = stage;
    },
    nextScript() {
      // 다음 스크립트로
      this.scriptNum++;
    },
    beforeScript() {
      // 이전 스크립트로
      this.scriptNum--;
    },
    nextStage() {},
    getDialog() {
      // 해당 스테이지의 전체 대화를 가져오는 함수
      this.dialogList.forEach((element) => {
        if (element.stage == this.stage) {
          this.dialog = element;
        }
      });
    },
    getMaxNum() {
      // prologue 와 epilogue 대화 길이를 저장하는 함수
      this.prologueMaxNum = this.dialog.prologue.length;
      this.epilogueMaxNum = this.dialog.epilogue.length;
    },
    getScript() {
      // 현재 인덱스의 스크립트 내용을 리턴하는 함수
      if (this.stageStatus === 0 && this.scriptNum >= this.prologueMaxNum) {
        this.scriptNum = 0;
        this.stageStatus++;
      }

      if (this.stageStatus === 1) {
        router.push("");
      }

      if (this.stageStatus === 2 && this.scriptNum >= this.epilogueMaxNum) {
        this.scriptNum = 0;
        this.stageStatus++;
        // stage 끝

        router.push("stageChangeView");
        return;
      }
      return this.dialog[this.stageStatus][this.scriptNum];
    },
  },
});
