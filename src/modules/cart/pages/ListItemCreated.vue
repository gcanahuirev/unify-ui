<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { useMarketStore } from '~/store/market.store'

  export default defineComponent({
    setup() {
      const store = useMarketStore()

      const NFTs = ref<any>([])

      onMounted(() => {
        store.fetchMarketItems().then((nfts) => {
          NFTs.value = nfts
        })
      })
      console.log(NFTs.value)

      return { NFTs }
    },
  })
</script>

/* <template>
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
          <p>Price: {{ nft.price }}</p>
          <p>Owner: {{ nft.owner }}</p>
          <p>Seller: {{ nft.seller }}</p>
          <p>Path: {{ nft.path }}</p>
        </div>
      </li>
    </ul>
  </section>
</template> */
