import { createApp } from "vue";

//here i import from the main component.
//same as the setup from docs but it abstractes
import App from "./App.vue";
//wraps the code from APP.VU
//
// import contactUs from "./componets/Contact.vue";
// import ButtonCounter from "./componets/ButtonCounter.vue"
const app = createApp(App);
//can also be camel case

// NOTE: this are global components
// app.component("contact-us", contactUs);
// app.component("button-counter", ButtonCounter);
app.mount("#app");