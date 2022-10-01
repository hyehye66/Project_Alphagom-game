<template>
    <div v-if="isVisible">
        <h1>모달모달</h1>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    const isVisible = ref(false);

    const open = () => {
        isVisible.value = true;
    };

    const close = () => {
        isVisible.value = false;
    }
</script>

<style>
    
</style>