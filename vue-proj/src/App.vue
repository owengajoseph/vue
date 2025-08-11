<template>
    <div class="bg-black text pt-3">
        <div class="container">
            <div class="text-white float-end">
                Contact owner name:
                <input v-model="ownerName" />
            </div>

            <AddContact @add-contact="onAddcontact" />

            <div class="row">
                <div class="col-12" v-for="contact in contacts" :key="contact.name">
                    <Contact :name="contact.name" :phone="contact.phone" :email="contact.email"
                        :ownerName="contact.ownerName" :isFavourite="contact.isFavourite" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Contact from './componets/Contact.vue';
import AddContact from './componets/AddContact.vue';

const ownerName = ref("owengajoseph");

const contacts = reactive([
    { name: "Bhrugen", phone: "44445453", email: "foo@gmail.com", isFavourite: true },
    { name: "Jesicca", phone: "44445453", email: "foo@gmail.com", isFavourite: true },
    { name: "Ben", phone: "44445453", email: "foo@gmail.com", isFavourite: false }
]);

function onAddcontact(contact) {
    contact.ownerName = ownerName.value;
    contact.isFavourite = false;
    contacts.push(contact);
}
</script>
