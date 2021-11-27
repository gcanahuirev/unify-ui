<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import { ethers as Ethers, utils } from 'ethers'

  import { NFTMarket__factory, NFTMarket, NFT__factory, NFT } from './contracts'

  export default defineComponent({
    setup() {
      const NFT_ADDRESS = process.env.NFT_ADDRESS
      const NFT_MARKET_ADDRESS = process.env.NFT_MARKET_ADDRESS

      const urlFile = ref<string>('asfsafwerw345asdasfdasd')
      // const hashFile = ref<string>('')
      const listingPrice = ref<string>('')
      const priceItem = ref<string>('0.5')
      const tokenId = ref<number>(0)

      const requestAccount = async () => {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
      }

      const createTokenNFT = async () => {
        if (typeof window.ethereum !== 'undefined') {
          await requestAccount()
          const provider = new Ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()
          const contract = new Ethers.Contract(
            NFT_ADDRESS,
            NFT__factory.abi,
            signer
          ) as NFT
          try {
            const transaction = await contract.createToken(urlFile.value)
            const values = await transaction.wait()
            console.log('Hash Create TOKEN', transaction.hash);
            if (values.events && values.events.length > 0) {
              const { args } = values.events[0]
              tokenId.value = args?.tokenId.toNumber()
              console.log('token', tokenId.value);
            }
          } catch (err) {
            console.log('Error: ', err)
          }
        }
      }

      // save to local storage
      const getListingPriceNFTMarket = async () => {
        if (typeof window.ethereum !== 'undefined') {
          const provider = new Ethers.providers.Web3Provider(window.ethereum)
          const contract = new Ethers.Contract(
            NFT_MARKET_ADDRESS,
            NFTMarket__factory.abi,
            provider
          ) as NFTMarket
          try {
            const price = await contract.getListingPrice()
            console.log('Price: ', price)
            console.log('Price String: ', price.toString())

            listingPrice.value = price.toString()
          } catch (err) {
            console.log('Error: ', err)
          }
        }
      }

      const createNFTMarket = async () => {
        if (typeof window.ethereum !== 'undefined') {
          await requestAccount()
          const provider = new Ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()
          const contract = new Ethers.Contract(
            NFT_MARKET_ADDRESS,
            NFTMarket__factory.abi,
            signer
          ) as NFTMarket
          try {
            const transaction = await contract.createMarketItem(
              NFT_ADDRESS,
              tokenId.value,
              utils.parseUnits(priceItem.value, 'ether'),
              { value: listingPrice.value }
            )
            console.log('Hash Create Item', transaction.hash)
            const values = await transaction.wait()
            console.log('Values: ', values)
          } catch (err) {
            console.log('Error: ', err)
          }
        }
      }

      onMounted(() => {
        getListingPriceNFTMarket()
      })

      return {
        createTokenNFT,
        getListingPriceNFTMarket,
        createNFTMarket,
      }
    },
  })
</script>

<template>
  <div>
    <div>
      <button @click="createTokenNFT">Create Token NFT</button>
      <button @click="getListingPriceNFTMarket">Get Listin Price</button>
      <button @click="createNFTMarket">Create NFTMarket</button>
      <!-- <button @click="setGreeting">Set Greeting</button> -->
      <!-- <input type="text" v-model="greeting" placeholder="Set greeting" /> -->
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { ethers as Ethers, utils } from "ethers";

import { NFTMarket__factory, NFTMarket, NFT__factory, NFT } from "./contracts";
declare global {
  interface Window {
    ethereum: any;
  }
}

export default defineComponent({
  setup() {
    const NFT_ADDRESS = "0x5bACE38662A1Ded6aDa20DcA6C78D8ae25B4140d";
    const NFT_MARKET_ADDRESS = "0xAa77d2A8b60A6Be34EF06365F7CE28E7853306a2";

    const urlFile = ref<string>("songs/1/p-Vlt7SvtuDXdOm3.mp3");
    // const hashFile = ref<string>('')
    const listingPrice = ref<string>("");
    const priceItem = ref<string>("0.5");
    const tokenId = ref<number>(0);

    const requestAccount = async () => {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    };

    const getContracts = () => {
      const provider = new Ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractNFT = new Ethers.Contract(
        NFT_ADDRESS,
        NFT__factory.abi,
        signer
      ) as NFT;
      const contractNFTMarket = new Ethers.Contract(
        NFT_MARKET_ADDRESS,
        NFTMarket__factory.abi,
        provider
      ) as NFTMarket;
      return { contractNFT, contractNFTMarket };
    };

    const createTokenNFT = async () => {
      if (typeof window.ethereum !== "undefined") {
        await requestAccount();
        const { contractNFT } = getContracts();
        try {
          const transaction = await contractNFT.createToken(urlFile.value);
          const values = await transaction.wait();
          console.log("Hash Create TOKEN", transaction.hash);
          if (values.events && values.events.length > 0) {
            const { args } = values.events[0];
            tokenId.value = args?.tokenId.toNumber();
            console.log("token", tokenId.value);
          }
        } catch (err) {
          console.log("Error: ", err);
        }
      }
    };

    // save to local storage
    const getListingPriceNFTMarket = async () => {
      if (typeof window.ethereum !== "undefined") {
        const { contractNFTMarket } = getContracts();
        try {
          const price = await contractNFTMarket.getListingPrice();
          console.log("Price: ", price);
          console.log("Price String: ", price.toString());

          listingPrice.value = price.toString();
        } catch (err) {
          console.log("Error: ", err);
        }
      }
    };

    const createNFTMarket = async () => {
      if (typeof window.ethereum !== "undefined") {
        await requestAccount();
        const { contractNFTMarket } = getContracts();
        try {
          const transaction = await contractNFTMarket.createMarketItem(
            NFT_ADDRESS,
            tokenId.value,
            utils.parseUnits(priceItem.value, "ether"),
            { value: listingPrice.value }
          );
          console.log("Hash Create Item", transaction.hash);
          const values = await transaction.wait();
          console.log("Values: ", values);
        } catch (err) {
          console.log("Error: ", err);
        }
      }
    };

    const fetchMyNFTs = async () => {
      if (typeof window.ethereum !== "undefined") {
        const { contractNFT, contractNFTMarket } = getContracts();
        try {
          const data = await contractNFTMarket.fetchMyNFTs();
          const items = await Promise.all(
            data.map(async (i) => {
              const tokenUri = await contractNFT.tokenURI(i.tokenId);
              const price = utils.formatUnits(i.price.toString(), "ether");
              const obj = {
                itemId: i.itemId.toNumber(),
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                price: price,
                path: tokenUri,
              };
              return obj;
            })
          );

          console.log("Items: ", items);
        } catch (err) {
          console.log("Error: ", err);
        }
      }
    };

    const fetchItemsCreated = async () => {
      if (typeof window.ethereum !== "undefined") {
        const { contractNFT, contractNFTMarket } = getContracts();
        try {
          const data = await contractNFTMarket.fetchItemsCreated();
          const items = await Promise.all(
            data.map(async (i) => {
              const tokenUri = await contractNFT.tokenURI(i.tokenId);
              const price = utils.formatUnits(i.price.toString(), "ether");
              const obj = {
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                sold: i.sold,
                price: price,
                path: tokenUri,
              };
              return obj;
            })
          );

          console.log("Items: ", items);
        } catch (err) {
          console.log("Error: ", err);
        }
      }
    };

    const fetchMarketItems = async () => {
      if (typeof window.ethereum !== "undefined") {
        const { contractNFT, contractNFTMarket } = getContracts();
        try {
          const data = await contractNFTMarket.fetchMarketItems();

          const items = await Promise.all(
            data.map(async (i) => {
              const tokenUri = await contractNFT.tokenURI(i.tokenId);
              const price = utils.formatUnits(i.price.toString(), "ether");
              const obj = {
                itemId: i.itemId.toNumber(),
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                price,
                path: tokenUri,
              };
              return obj;
            })
          );

          console.log("Items: ", items);
        } catch (err) {
          console.log("Error: ", err);
        }
      }
    };

    const buyNFT = async (nft_price: string, itemId: number) => {
      if (typeof window.ethereum !== "undefined") {
        await requestAccount();
        const { contractNFTMarket } = getContracts();
        try {
          const price = utils.parseUnits(nft_price.toString(), "ether");
          const transaction = await contractNFTMarket.createMarketSale(
            NFT_ADDRESS,
            itemId,
            {
              value: price,
            }
          );
          console.log("Hash Buy Item", transaction.hash);
          await transaction.wait();
        } catch (err) {
          console.log("Error: ", err);
        }
      }
    };

    onMounted(() => {
      getListingPriceNFTMarket();
    });

    return {
      createTokenNFT,
      getListingPriceNFTMarket,
      createNFTMarket,
      fetchMyNFTs,
      fetchItemsCreated,
      fetchMarketItems,
      buyNFT,
    };
  },
});
</script>

<template>
  <div>
    <div>
      <button @click="createTokenNFT">Create Token NFT</button>
      <button @click="getListingPriceNFTMarket">Get Listin Price</button>
      <button @click="createNFTMarket">Create NFTMarket</button>
      <button @click="fetchMyNFTs">Get items in NFTMarket</button>
      <button @click="fetchItemsCreated">Get items created NFTMarket</button>
      <button @click="fetchMarketItems">Get items Market</button>
      <button @click="fetchMarketItems">Buy NFT</button>
    </div>
  </div>
</template>