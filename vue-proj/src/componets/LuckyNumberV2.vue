<template>
    <div class="col-4 bg-white text-center-p-4">
        <h4 class="text-success"> Random Number Generator</h4>
        <hr>
        Max Range :
        <input v-model.number="maxNumber" class="rounded" type="number">
        <br> <br>
        <button class="btn btn-danger text-black" @click="generateLuckyNumber()"><span v-if="luckyNumber === 0">
                Generateluckynumber <br>
                Range(1-100)
            </span>
            <span v-else> LuckyNumber:{{ luckyNumber }} click to generate new lucky number</span>
        </button>

    </div>

</template>


<script setup>
import { ref } from 'vue'
const luckyNumber = ref(0);
function generateLuckyNumber() {
    luckyNumber.value = Math.floor(Math.random() * 100);
    console.log(luckyNumber.value);
}
</script>