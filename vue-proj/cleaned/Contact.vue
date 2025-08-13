<template>
    <div class="bg-info rounded pb-4 m-2">
        <div class="row">
            <div class="col-6">
                <!-- from the props -->
                <h3> Name : {{ name }}:</h3>
                <p> Email : {{ email }}</p>
                <p> phone : {{ phone }}</p>
            </div>

            <div class=" col-3">
                <button @click="emit('update-favorite', { isFavourite: props.isFavourite, name: props.name })"
                    :class="[isFavourite ? ' btn btn-warning form-control' : 'btn btn-success form-control']">


                    {{ isFavourite ? "remove from" : "add to" }} Favorite

                </button>
            </div>
            <div class="col-3">
                <LuckyNumber></LuckyNumber>
            </div>
        </div>
        <span class="float-end small" v-if="ownerName != ''">
            *this contact info belongs to {{ ownerName }}
        </span>
    </div>


</template>


<script setup>
import LuckyNumber from "./LuckyNumber.vue";
import { ref, defineProps } from "vue";
const email = ref("hellovue.com");
//how does this prop gets its values
//this is like defining variables which are empty
const props = defineProps(
    {
        name: { type: String, required: true },
        phone: Number,
        email: {
            type: String, required: false, default: "-n/a-"

        },
        ownerName: String,
        isFavourite: Boolean,



    }

);
const emit = defineEmits(["update-favourite"]);
</script>
