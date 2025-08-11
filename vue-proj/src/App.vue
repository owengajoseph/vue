<template>
    <div class="bg-black text pt-3">
        <div class="container">
            <div class=" text-white float-end">
                contact owner Name :<input v-model="ownerName" />
            </div>
            <AddContact @add-contact="onAddcontact"></AddContact>
            <div class="row">
                <!-- @contact tag  -->
                <!-- see this value as a copy from contact.vue  -->
                <!-- then the props define the rules on how it should be renderd here  -->
                <!--  now when we loop from the parent componet the values are added according to the rules defined by the props from the child props-->
                <div class="col-12" v-for="contact in contacts" :key="contact.name">
                    <contact :name="contact.name" :phone="contact.phone" :ownerName="contact.ownerName"
                        :email="contact.email" />
                </div>
            </div>
        </div>
    </div>
</template>




<script setup>
import { reactive, ref } from 'vue';
import ButtonCounter from './componets/ButtonCounter.vue';
import Contact from './componets/Contact.vue';
import AddContact from './componets/AddContact.vue';
const message = "hello vue";
const ownerName = ref("owengajoseph")

const contacts = reactive([
    {
        name: "Bhrugen",
        phone: "44445453",
        email: "foo@gmail.com",
        ownerName: ownerName,
        isFavourite: false
    },


    {
        name: "Jesicca",
        phone: "44445453",
        email: "foo@gmail.com",
        ownerName: ownerName,
        isFavourite: true
    },
    {
        name: "Ben",
        phone: "44445453",
        email: "foo@gmail.com",
        ownerName: " ",
        isFavourite: false
    },

])
function onAddcontact(contact) {
    emit("add-contact", { name: contact.name, phone: contact.phone, email: contact.email })
    contact.ownerName = ownerName.value;
    contact.isFavourite = false;
    contact.push(contact);

}
</script>


<style></style>