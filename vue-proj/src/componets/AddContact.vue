<template>
    <div>
        <div class="container border rounded p-2">
            <div class="text-center text-white ">
                Add New Contatct
            </div>
            <form @submit.prevent="addContact">
                <div class="row">
                    <div class="col-4">
                        <input type="text " class="form-control" v-model="contact.name" placeholder="Name">
                    </div>
                    <div class="col-4">
                        <input type="text " class="form-control" v-model="contact.email" placeholder="Email">
                    </div>
                    <div class="col-4">
                        <input type="text " class="form-control" v-model="contact.Phone" placeholder="Phone">
                    </div>
                    <div class="col-6 offset-3 p-2">
                        <button type="submit" class="btn btn-secondary w-100"> Add contact</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<script setup>
import { reactive, defineEmits } from "vue"
const emit = defineEmits(["add-contact"]);
const contact = reactive({
    name: "",
    phone: "",
    email: ""
});

function addContact() {
    console.log(contact);
    contact.email = "";
    contact.name = "";
    contact.phone = "";
}
</script>