<template>
    <div class="col-4 bg-white text-center-p-4">
        <h1 class="text-center text-success"> contactOpedia</h1>
        <div class="container">


            <LuckyNumber></LuckyNumber>
            <br><br>
            <LuckyNumberV2></LuckyNumberV2>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import LuckyNumber from './componets/LuckyNumber.vue';
import LuckyNumberV2 from './componets/LuckyNumberV2.vue';
let maxNumber = ref(100)

//provide this value into an imaginary memory
//it is stored as a key value pair where the key MUST be unique



</script>
