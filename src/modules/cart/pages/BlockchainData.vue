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

<template>
  <section class="flex flex-col justify-center">
    <ul class="w-full">
      <li
        v-for="nft in NFTs"
        :key="nft.itemId"
        class="flex justify-between mt-6 p-4 rounded-lg bg-white"
        style="width: 70%;"
      >
        <table class="items-table" style="width: 20%;">
          <tbody>
            <tr>

              <td class="items-td"><strong>ID</strong></td>
              <td>{{ nft.itemId }}</td>
            </tr>
            <tr>
              <td class="items-td"><strong>TokenID</strong></td>
              <td>{{ nft.tokenId }}</td>
            </tr>
            <tr>
              <td class="items-td"><strong>Precio</strong></td>
              <td>{{ nft.price }}</td>
            </tr>
            <tr>
              <td class="items-td"><strong>Comprador</strong></td>
              <td>{{ nft.owner }}</td>
            </tr>
            <tr>
              <td class="items-td"><strong>Artista</strong></td>
              <td>{{ nft.seller }}</td>
            </tr>
             <tr>
              <td class="items-td"><strong>Path</strong></td>
              <td>{{ nft.path }}</td>
            </tr>
          </tbody>
        </table>
        <!--<div>
          <p>ID: {{ nft.itemId }}</p>
          <p>TokenID: {{ nft.tokenId }}</p>
          <p>Price: {{ nft.price }}</p>
          <p>Owner: {{ nft.owner }}</p>
          <p>Seller: {{ nft.seller }}</p>
          <p>Path: {{ nft.path }}</p>
        </div>-->
      </li>
    </ul>
  </section>
</template> 

<style>
.items-table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

.items-td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
.items-td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

</style>