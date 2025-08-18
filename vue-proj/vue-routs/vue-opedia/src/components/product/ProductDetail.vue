<template>
    <P> product detail</P>

    <p>product ID :{{ route.params.productId }}</p>
</template>


<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

console.log(route.params);

</script>