import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/home/HomePage.vue";
import Contact from "@/components/home/Contact.vue";
import ProductList from "@/components/product/ProductList.vue";
import ProductDetail from "@/components/product/ProductDetail.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [{ path: "/", component: HomePage }, { path: "/contact", component: Contact }, { path: "/productlist", component: ProductList }, { path: "/product/:productId", component: ProductDetail }]
})

export default router