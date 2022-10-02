<template>
  <div >
    <KingCureMic v-if="recordcall"></KingCureMic>
    <!-- <button @click="getGame()" v-if="!callmic.state">이거를 누르면 게임API가 호출이 될거야!</button> -->
    <div v-if="!recordcall && problems && !modalcall.state">
      <div>
      <h2>{{problems[probidx].sentance}}</h2>
      <div v-for="(exam, idx) in problems[probidx].example" :key="idx">
      <h2>{{exam}}</h2>
    </div>
    </div>
    <img class="samgyetang" 
    src="@/assets/image/삼계탕.png" 
    width="200"
    @click="getRecord()"/>
      <div v-if="answer === problems[probidx].answer && answer">
      정답입니다! : 
      <button v-if="!scoremodal" @click="getProb()"> 다음 문제로 </button>
      <button v-if="scoremodal" @click="modalfunc()">전부 통과! 축하합니다. 점수 드가자</button>
      </div>
      <div v-if="answer !== problems[probidx].answer && answer">
      오답입니다! : <button @click="changecall()"> 다시 시도하기 </button>
      </div>
    </div>
    <GameScoreModal v-if="modalcall.state"></GameScoreModal>
    </div>
</template>

<script setup>

import KingCureMic from '@/components/game/KingCureMic.vue'
import GameScoreModal from '@/views/Modal/GameScoreModal.vue'
import { reactive, computed, ref, onMounted, toRefs } from 'vue'
import { useGameStore } from '@/stores/game';

const store = useGameStore()
const problems = computed(() => store.KingCureGameList);
const recordcall = computed(() => store.VoiceOnOff)
const answer = computed(() => store.AIAnswer)
const score = computed(() => store.SwampScore)
const scoremodal = computed(() => store.AIGameScore)

// test 용 모달 띄우기 -> 수빈/근혜 이야기해보기
const modalcall = reactive({
    state: false,
  })
const modalfunc = () => {
  modalcall.state = true
}
// 여기까지 일단 모달 띄워보자

function changecall () {
    store.VoiceOnOff = true
}

const probidx = ref(0)

const getProb = () => {
  if ( probidx.value === problems.value.length - 2 )
  { store.AIAnswer = null
  store.AIGameScore = true }
  else 
  store.AIAnswer = null
  probidx.value++
}

const getRecord = () => {
  changecall()
}

onMounted (() => {
  store.getKingGame()
  store.VoiceOnOff = false
})
</script>

<style>
</style>