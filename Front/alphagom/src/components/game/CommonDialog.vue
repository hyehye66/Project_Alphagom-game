<template>
    <div>
        <h1>stage : {{ dialog.stage }}</h1>
        <h1>scriptNum : {{ scriptNum }}</h1>
        <h1>script : {{ script }}</h1>
        <h1>type : {{ type }}</h1>
        <h1>effect : {{ effect }}</h1>
        <h1>gameList : {{ gameList }}</h1>
        <h1>setStage : {{ setStage }}</h1>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
// import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import DarkcaveLine from '@/assets/dialog/DarkcaveLine.json';
import { useGameStore } from "@/stores/game";
// import { skyDialog } from '@/assets/dialog/SkyLine.json';
// import { swampDialog } from '@/assets/dialog/SwampLine.json';

export default {
    setup() {
        const game = useGameStore();
        const dialog = game.dialog;
        const router = useRouter();
        // const store = defineStore();
        const scriptNum = game.scriptNum;
        const script = game.script;
        const type = game.type;
        const effect = game.effect;
        const gameList = game.gameList;
        const setStage = game.setStage;
        
        return {
            dialog, 
            scriptNum, 
            script,
            type,
            effect,
            gameList,
            setStage,
        };
    }
    
}
</script>

<style>
    
</style>