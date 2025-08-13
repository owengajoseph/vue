<template>
    <div class="col-6 bg-white text-center p-4">
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
const maxNumber = ref(100);

function generateLuckyNumber() {
    luckyNumber.value = Math.floor(Math.random() * maxNumber.value);
    console.log(luckyNumber.value);
}
</script>