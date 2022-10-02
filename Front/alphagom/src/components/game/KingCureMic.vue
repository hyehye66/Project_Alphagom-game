<template>
    <div>
    <div v-if="!record.state">
        <h1>자 녹음드가자아아아ㅏㅏㅏㅏㅏㅏ</h1>
        <h1 v-if="timer > 0">{{ timercount }}</h1>
    </div>
    <h1 v-if="record.state">말하세요!</h1>
    <audio ref="audioPlayer"></audio>
    </div>
</template>

<script setup>

import { useGameStore } from '@/stores/game';
import { ref, reactive, computed } from 'vue'

const recordcall = computed(() => store.VoiceOnOff)

function changecall () {
    store.VoiceOnOff = false
}

const store = useGameStore()
const record = reactive({ 
              state: false,
          });

const audioPlayer = ref(); 

let recorder = null; 
let mimeType = 'audio/x-pn-wav'; 
let chunks = []; 
let data = new FormData()

let timer = ref(3)
const timercount = computed(() => timer)

const startRecording = () => {
    record.state = true;
    recorder.start();
    setTimeout( () => {
        recorder.stop();
    }, 1000)
}

const getAI = (payload) => {
    store.getKingAI(payload)
}

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.log('getUserMedia supported.');
        navigator.mediaDevices.getUserMedia (
            {
                audio: true
            })

            .then(function(stream) {
                recorder = new MediaRecorder(stream);          
                recorder.ondataavailable = function(e) {
                chunks.push(e.data);
                }

                recorder.onstop = function() {
                    const blob = new Blob(chunks, { 'type' : mimeType });
                    chunks = [];
                    const audioURL = window.URL.createObjectURL(blob);
                    audioPlayer.value.src = audioURL;
                    data.append("audio_data", blob )
                    getAI(data)
                    data = new FormData()
                    changecall()
                }
            })

            // Error callback
            .catch(function(err) {
                console.log('The following getUserMedia error occured: ' + err);
            }
        );
        } else {
        console.log('getUserMedia not supported on your browser!');
        }

const interval = setInterval(() => {
    if (timer.value === 0) {
    startRecording()
    clearInterval(interval)
    timer.value = 3                
  } else {
    timer.value--
  }
}, 1000);  

</script>
<style>
    
</style>