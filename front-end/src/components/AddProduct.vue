<template>
<div class="flex flex-col justify-center items-center">
    <div class="border m-18 p-5 bg-gray-200">
        <div>
            <label>Product Name</label>
            <div>
                <input type="text" 
                placeholder="Product Name" 
                v-model="productName"
            />
            </div>
        </div>

        <div>
            <label>Price</label>
            <div>
                <input 
                    type="text" 
                    placeholder="Price" 
                    v-model="productPrice"
                />
            </div>
        </div>

        <div>
            <button class="bg-green-500 px-4 py-2 rounded text-white"
                @click="saveProduct"
            >CREATE</button>
        </div>
    </div>
</div>
</template>

<script>
// import axios
import axios from "axios"

export default {
    name: "AddProduct",
    data() {
        return {
            productName: "",
            productPrice: ""
        }
    },
    methods: {
        // Create New Product
        async saveProduct() {
            try {
                await axios.post("http://localhost:5000/products", {
                    product_name: this.productName,
                    product_price: this.productPrice
                })
                
                this.productName = ""
                this.productName = ""
                this.$router.push("/")
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>