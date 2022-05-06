<template>
    <div class="border rounded p-10 m-8 bg-white">
        <router-link to="{ name: 'Create' }" class="px-4 py-2 rounded bg-gray-700 text-white">
            Add New
        </router-link>

        <table class="table-fixed">
            <thead>
                <tr>
                    <th class="">Product Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.product_id">
                    <td>{{ item.product_name }}</td>
                    <td>{{ item.product_price }}</td>
                    <td>
                        <router-link
                            :to="{ name: 'Edit', params: { id: item.product_id } }"
                            class="px-4 py-2 bg-gray-600 text-white"
                        >Edit</router-link>
                        <a 
                            class="px-4 py-2 rounded bg-red-600"
                            @click="deleteProduct(item.product_id)"
                        >Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import axios
import axios from "axios"

export default {
    name: "ProductList",
    data() {
        return {
            items: []
        }
    },
    created() {
        this.getProducts()
    },
    methods: {
        // Get All Products
        async getProducts() {
            try {
                const response = await axios.get("http://localhost:5000/products")
                this.items = response.data
            } catch (err) {
                console.log(err)
            }
        },

        // Delete Product
        async deleteProduct(id) {
            try {
                await axios.delete(`http://localhost:5000/products/${id}`)
                this.getProducts
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>