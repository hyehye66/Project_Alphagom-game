<template>
    <div>
        <h1>{{DarkcaveLine.prologue[1]}}</h1>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
// import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import DarkcaveLine from '@/assets/dialog/DarkcaveLine.json';
// import { skyDialog } from '@/assets/dialog/SkyLine.json';
// import { swampDialog } from '@/assets/dialog/SwampLine.json';

export default {
    setup() {
        const router = useRouter();
        // const store = defineStore();
        const pageNum = ref(0);
        return {DarkcaveLine};
    }
    
}
</script>

<style>
    
</style>