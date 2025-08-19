    <template>
        <div>
            <h1>Product list</h1>
            <p>Here is the list of products:</p>
            <div v-for="product in products">
                <router-link :to="{ name: 'productDetails', params: { productId: product.id, categoryId: 77 } }">
                    {{ product.name }}
                </router-link>

            </div>

            <button @click="$router.go(-1)">Back</button>
        </div>
    </template>


<script setup>
const products = [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
    { id: 3, name: "product 3" }
];
</script>
