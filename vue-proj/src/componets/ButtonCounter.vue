<template>

    <button @click=" count++">clicked {{ count }} times </button>
    <div ></div>
</template>


<script setup>
import { ref } from "vue"
const count = ref(0);

</script>


//we write like this so that it can be exported and renders on other components.

