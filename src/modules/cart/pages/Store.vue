<script lang="ts">
  import { storeToRefs } from 'pinia'
  import { defineComponent, onMounted, ref } from 'vue'
  import OContainer from '~/components/objects/OContainer.vue'
  import OModal from '~/components/objects/OModal.vue'
  import ProductItem from '~/modules/cart/components/ProductItem.vue'
  import { useMarketStore, Product } from '~/store/market.store'
  import TermsConditions from '~/modules/cart/components/TermsConditions.vue'

  export default defineComponent({
    components: { OContainer, OModal, ProductItem, TermsConditions },
    setup() {
      const store = useMarketStore()
      const { products } = storeToRefs(store)

      onMounted(async () => {
        await store.getNFTMarket()
      })

      const showModalLogin = ref<boolean>(false)
      const product = ref<Product>()

      const openModal = (_product: Product) => {
        product.value = _product
        showModalLogin.value = true
      }

      const closeModal = () => {
        showModalLogin.value = false
      }

      const buyProduct = async () => {
        if (product.value) {
          await store.buyNFT(product.value.price, Number(product.value.itemId))
          await store.getNFTMarket()
          showModalLogin.value = false
        }
      }

      return {
        showModalLogin,
        products,
        openModal,
        closeModal,
        buyProduct,
      }
    },
  })
</script>

<template>
  <o-container class="grid grid-cols-1/3 gap-4">
    <o-modal :show="showModalLogin" @close="showModalLogin = false">
      <div class="mt-7">
        <h1 class="font-bold text-2xl">Terms and Conditions</h1>
        <div class="h-80 overflow-y-auto">
          <terms-conditions />
        </div>
        <div class="mt-4 flex justify-end">
          <button
            class="px-3 py-1 text-sm text-black font-bold rounded"
            @click.stop="closeModal"
          >
            Cancelar
          </button>
          <button
            class="px-3 ml-4 py-1 bg-primary text-sm text-black font-bold rounded"
            @click.stop="buyProduct"
          >
            Aceptar
          </button>
        </div>
      </div>
    </o-modal>
    <product-item
      v-for="product in products"
      :key="product.itemId"
      :name="`product-${product.itemId}`"
      :description="product.seller"
      :price="product.price"
      image="https://cdn.pixabay.com/photo/2020/12/10/15/28/vinyl-5820582_960_720.jpg"
      sound="product.sound"
      @action="openModal(product)"
    />
    <!-- @action="buyProduct(product)" -->
  </o-container>
</template>
