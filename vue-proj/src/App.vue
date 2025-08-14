<template>
    <button @click="increment"> increment</button>
    <button @click="decrement">decrement</button>
    <p>{{ count }}</p>
</template>


<script setup>
import { useCounter } from './composibles/useCounter';
const { count, increment, decrement } = useCounter()
</script>