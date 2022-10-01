<template>
    <div>
        <h1>{{ game.script.char }}</h1>
        <p>{{ game.script.line1 }}</p>
        <p>{{ game.script.line2 }}</p>
        <button @click="game.plusNum()">다음으로오오오오오</button>
        <button @click="game.skip()">스으으으으으킵</button>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    // import { defineStore } from 'pinia';
    import { computed, ref } from 'vue';
    import DarkcaveLine from '@/assets/dialog/DarkcaveLine.json';
    import { useGameStore } from "@/stores/game";
    // import { skyDialog } from '@/assets/dialog/SkyLine.json';
    // import { swampDialog } from '@/assets/dialog/SwampLine.json';
    
    const game = useGameStore();

</script>

<style>
    
</style>