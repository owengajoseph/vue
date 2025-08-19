import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/home/HomePage.vue";
import Contact from "@/components/home/Contact.vue";
import ProductList from "@/components/product/ProductList.vue";
import ProductDetail from "@/components/product/ProductDetail.vue";
import NotFound from "@/components/layout/NotFound.vue";
import Login from "@/components/Authentication/Login.vue";

const router = createRouter({
  /*
    what we are doing here is basically designing the structure of the URL.

    but it renders on the browser as anchor tag

  */
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage, name: "home" },
    { path: "/contact-us", component: Contact, name: "contact" },
    { path: "/contact", redirect: { name: "contact" } },
    {
      path: "/productlist", component: ProductList, name: "productList",
      beforeEnter: (to, from) => {
        console.log("Before Enter");
        console.log(to, from);
        const isAdmin = true
        if (isAdmin) {
          return true;
        }
        return false;
      }
    },
    { path: "/product/:productId/category/Id?", component: ProductDetail, name: "productDetails", props: true },
    { path: "/product", component: ProductDetail },
    { path: "/:catchAll(.*)", component: NotFound },
    { path: "/login", component: Login, name: "login" }
  ]
});

router.beforeEach((to, from) => {
  console.log("global before each");
  console.log(to, from);
  //if we have a validation to check if the user is authenticated
  //if not redirect to the the login page
  const isAuthenticated = true;
  if (to.name == "home") {
    return true
  }
  if (!isAuthenticated && to.name != 'login') {
    return { name: 'login' }
  }

  return true;
})

export default router