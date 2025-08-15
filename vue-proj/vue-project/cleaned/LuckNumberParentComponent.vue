<template>
    <div class="bg-black text pt-3" :style="{ height: '100vh' }">
        <h1 class="text-center text-success"> Learn Slots</h1>
        <div class="container text-center bg-white">
            <slot></slot>
            <button class="btn btn-primary text-black m-2" @click="newVersion = !newVersion">Toggle Component</button>
            <br>
            <button class="btn btn-primary text-black m-2" @click="newVersion = false">Lucky Number v1</button>
            <br>
            <slot name="moreInfo"></slot>
            <button class="btn btn-primary text-black m-2" @click="newVersion = true">Lucky Number v2</button>
            <br>
            <slot name="learnSlot"></slot>
            <br>
            <KeepAlive :include="['LuckyNumber', 'LuckyNumberV2']">
                <component :is="currentComponent" class="border"></component>
            </KeepAlive>
            <br>
        </div>

    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import LuckyNumber from './LuckyNumber.vue';
import LuckyNumberV2 from './LuckyNumberV2.vue';
let maxNumber = ref(100)


//provide this value into an imaginary memory
//it is stored as a key value pair where the key MUST be unique

const newVersion = ref(true);
const currentComponent = computed(() => {
    return newVersion.value ? LuckyNumberV2 : LuckyNumber;
})

</script>
