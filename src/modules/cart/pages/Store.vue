<script lang="ts">
  import { storeToRefs } from 'pinia'
  import { defineComponent, onMounted } from 'vue'
  import OContainer from '~/components/objects/OContainer.vue'
  import ProductItem from '~/modules/cart/components/ProductItem.vue'
  import { useMarketStore, Product } from '~/store/market.store'

  export default defineComponent({
    components: { OContainer, ProductItem },
    setup() {
      const store = useMarketStore()
      const { products } = storeToRefs(store)

      onMounted(async () => {
        await store.getNFTMarket()
      })

      const buyProduct =  async (product: Product) => {
        await store.buyNFT(product.price, Number(product.itemId))
        await store.getNFTMarket()
      }

      return {
        products,
        buyProduct
      }
    },
  })
</script>

<template>
  <o-container class="grid grid-cols-1/3 gap-4">
    <product-item
      v-for="product in products"
      :key="product.itemId"
      :name="`product-${product.itemId}`"
      :description="product.seller"
      :price="product.price"
      image="https://cdn.pixabay.com/photo/2020/12/10/15/28/vinyl-5820582_960_720.jpg"
      sound="product.sound"
       @action="buyProduct(product)"
    />
  </o-container>
</template>
