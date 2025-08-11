<template>
    <div class="bg-info rounded pb-4 m-2">
        <div class="row">
            <div class="col-6">
                <!-- from the props -->
                <h3> Name : {{ name }}:</h3>
                <p> Email : {{ email }}</p>
                <p> phone : {{ phone }}</p>
            </div>
        </div>
    </div>

    <div class=" col-3">
        <button @click="emit('update-favorite', { isFavourite: props.isFavourite, name: props.name })"
            :class="[isFavourite ? ' btn btn-warning' : 'btn btn-success']">


            {{ isFavourite ? "remove from" : "add to" }} Favorite

        </button>
    </div>


    <p>please send an email to hello@dotnetmastery.com</p>
</template>


<script setup>
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
        isFavourite: Boolean


    }

);
const emit = defineEmits(["update-favourite"]);
</script>
