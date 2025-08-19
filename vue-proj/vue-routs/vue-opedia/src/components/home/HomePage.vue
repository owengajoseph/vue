<template>
    <div>Home page</div>
    <button @click="goToContact">contact us</button>
</template>


<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function goToContact() {
    router.push({ name: "contact" });
}
</script>