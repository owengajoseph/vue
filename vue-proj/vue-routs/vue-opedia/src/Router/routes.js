import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/home/HomePage.vue";
import Contact from "@/components/home/Contact.vue";
import ProductList from "@/components/product/ProductList.vue";
import ProductDetail from "@/components/product/ProductDetail.vue";

const router = createRouter({
    /*
      what we are doing here is basically designing the structure of the URL.

      but it renders on the browser as anchor tag

    */
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [{ path: "/", component: HomePage }, { path: "/contact-us", component: Contact, name: "contact" }, { path: "/productlist", component: ProductList }, { path: "/product/:productId/category/Id?", component: ProductDetail, name: "productDetails", props: true }, { path: "/product", component: ProductDetail }]
})

export default router