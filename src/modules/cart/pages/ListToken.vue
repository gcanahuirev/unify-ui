<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { useMarketStore } from '~/store/market.store'

  export default defineComponent({
    setup() {
      const store = useMarketStore()

      const NFTs = ref<any>([])

      onMounted(() => {
        store.fetchMyNFTs().then((nfts) => {
          NFTs.value = nfts
        })
      })

      /* const createNFTMarket = async (token_id: string, event: Event) => {
        const { target } = event as any
        const price = target[0].value
        await store.createNFTMarket(token_id, price)
        store.fetchMyNFTs().then((nfts) => {
          NFTs.value = nfts
        })
      } */

      return { NFTs }
    },
  })
</script>

<template>
  <section class="flex flex-col justify-center">
    <ul class="w-full">
      <li
        v-for="nft in NFTs"
        :key="nft.itemId"
        class="flex justify-between mt-6 p-4 rounded-lg bg-white"
      >
        <div>
          <p>ID: {{ nft.itemId }}</p>
          <p>TokenID: {{ nft.tokenId }}</p>
          <p>Description: {{ nft.description }}</p>
          <p>Price: {{ nft.price }}</p>
          <p>Owner: {{ nft.owner }}</p>
        </div>
        <!-- <form
          @submit.prevent="(e) => createNFTMarket(nft.tokenId, e)"
          class="flex flex-col justify-between"
        >
          <input
            type="string"
            name="price"
            class="border border-gray-400 p-2 rounded-lg"
            placeholder="Price"
          />
          <button
            type="submit"
            class="bg-primary text-white font-bold py-2 px-4 rounded"
          >
            Subir al market
          </button>
        </form> -->
      </li>
    </ul>
  </section>
</template>
