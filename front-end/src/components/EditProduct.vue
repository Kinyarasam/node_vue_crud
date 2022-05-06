<template>
  <div>
      <div>
            <label for="">Product Name</label>
            <div>
                <input 
                    type="text"
                    placeholder="Product Name"
                    v-model="productName"
                />
            </div>
        </div>

        <div>
            <label for="">Price</label>
            <div>
                <input 
                    type="text" 
                    placeholder="Price"
                    v-model="productPrice"
                />
            </div>
        </div>

        <div>
            <button 
                class="px-4 py-2 rounded bg-green-500"
                @click="updateProduct"
            >UPDATE</button>
        </div>
  </div>
</template>

<script>
// Import Axios
import axios from 'axios'

export default {
    name: "EditProduct",
    data() {
        return {
            productName: "",
            productPrice: ""
        }
    },
    created: () => {
        this.getProductById()
    },
    methods: {
        // Get Product By Id
        async getProductById() {
            try {
                const response = await axios.get(
                    `http://localhost:5000/${this.$route.params.id}`
                )
                this.productName = response.data.product_name
                this.productPrice = response.data.product_price
            } catch (err) {
                console.log(err)
            }
        },

        // UpdateProduct
        async updateProduct() {
            try {
                await axios.patch(
                    `http://localhost:5000/${this.$route.params.id}`,
                    {
                        product_name: this.productName,
                        product_price: this.productPrice
                    }
                )
                this.productName = ""
                this.productPrice = ""
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