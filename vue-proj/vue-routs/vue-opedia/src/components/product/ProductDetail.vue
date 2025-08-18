<template>
    <P> product detail</P>
    <div v-if="route.params.productId != null">
        <p>product ID :{{ route.params.productId }}</p>
    </div>
    <div v-else>
        <p>No product found</p>
    </div>
</template>


<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

console.log(route.param);

</script>