<script setup>
    const open_app = () => {
        window.open('https://app.aresrpg.world', '_blank');
    };
</script>
<template>
    <button class="launch-app-btn" @click="open_app">
        <span>Launch App</span>
        <img src="../assets/treasure-chest.png" alt="">
    </button>
</template>
<style scoped>
    .launch-app-btn{
        position: fixed;
        top: .8em;
        right: 50px;
        z-index: 100;
        object-fit: contain;
        filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.5));
        outline: none;
        border: none;
        min-width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-size: 0.8rem;
        border: 1px solid #34495e;
        background: linear-gradient(to right, #e0eafcd0, #cfdef3d7);
        border-radius: 8px;
        padding: 0.42rem 0.75rem;
        font-weight: bold;
        color: #191961;
        font-family: 'Roboto Condensed';
        cursor: pointer;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px); /* Applies a blur effect to the background */
        -webkit-backdrop-filter: blur(10px);
    }
    .launch-app-btn:hover{
        filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.3));
        background: linear-gradient(to right, #e0eafce1, #cfdef3d7);
    }
    .launch-app-btn img{
        max-width: 100%;
        width: 1.2rem;
    }
</style>