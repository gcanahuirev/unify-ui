import { defineStore } from 'pinia'
import ky from 'ky'
import { ethers as Ethers, utils } from 'ethers'
import detectEthereumProvider from '@metamask/detect-provider'
import { useToast } from 'vue-toastification'

import type { NFTMarket, NFT } from '~/contracts'
import { NFTMarket__factory, NFT__factory } from '~/contracts'

const NFT_ADDRESS = '0x5bACE38662A1Ded6aDa20DcA6C78D8ae25B4140d'
const NFT_MARKET_ADDRESS = '0xAa77d2A8b60A6Be34EF06365F7CE28E7853306a2'
const CLIENT_IPFS =
  'https://ipfs.iuzepe.codes/api/v0/add?stream-channels=true&progress=false'

const requestAccount = async () => {
  const metamask: any = await detectEthereumProvider()
  await metamask.request({ method: 'eth_requestAccounts' })
}

const getContracts = async () => {
  const metamask: any = await detectEthereumProvider()
  const provider = new Ethers.providers.Web3Provider(metamask)
  const signer = provider.getSigner()
  const contractNFT = new Ethers.Contract(
    NFT_ADDRESS,
    NFT__factory.abi,
    signer
  ) as NFT
  const contractNFTMarket = new Ethers.Contract(
    NFT_MARKET_ADDRESS,
    NFTMarket__factory.abi,
    // provider
    signer
  ) as NFTMarket
  return { contractNFT, contractNFTMarket }
}

export interface Product {
  itemId: string
  tokenId: string
  seller: string
  owner: string
  price: string
  path: string
}

const toast = useToast()

export const useMarketStore = defineStore('market', {
  state: () => {
    return {
      products: [] as Array<Product>,
    }
  },

  actions: {
    async getNFTMarket() {
      const metamask: any = await detectEthereumProvider()
      // await metamask.send('eth_requestAccounts')
      if (typeof metamask !== 'undefined') {
        const { contractNFT, contractNFTMarket } = await getContracts()
        try {
          const data = await contractNFTMarket.fetchMarketItems()

          const items = (await Promise.all(
            data.map(async (i) => {
              const tokenUri = await contractNFT.tokenURI(i.tokenId)
              const price = utils.formatUnits(i.price.toString(), 'ether')
              const obj = {
                itemId: i.itemId.toNumber(),
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                price,
                path: tokenUri,
              }
              return obj
            })
          )) as unknown as Array<Product>

          this.products = items
        } catch (err) {
          console.log('Error: ', err)
        }
      }
    },

    async buyNFT(nft_price: string, itemId: number) {
      const metamask: any = await detectEthereumProvider()
      if (typeof metamask !== 'undefined') {
        await requestAccount()
        const { contractNFTMarket } = await getContracts()
        try {
          const price = utils.parseUnits(nft_price.toString(), 'ether')
          const transaction = await contractNFTMarket.createMarketSale(
            NFT_ADDRESS,
            itemId,
            {
              value: price,
            }
          )
          console.log('Hash Buy Item', transaction.hash)
          await transaction.wait()
        } catch (err: any) {
          if (err.code === 4001) {
            toast.info('Firma denegada')
          }
          if (err.code === 'INSUFFICIENT_FUNDS') {
            toast.warning('Fondos insuficientes', {
              timeout: 3000,
            })
          }
          console.log('Error: ', err.code)
        }
      }
    },

    async createTokenNFT(token_uri: string) {
      const metamask: any = await detectEthereumProvider()
      if (typeof metamask !== 'undefined') {
        await requestAccount()
        const { contractNFT } = await getContracts()
        try {
          const transaction = await contractNFT.createToken(token_uri)
          const tx = await transaction.wait()
          let tokenId = 0
          let event = tx!.events![0]
          let value = event.args![2]
          tokenId = value.toNumber()
          return { message: `New NFT created with tokenID N°${tokenId}`, tx }
        } catch (err) {
          console.log('Error: ', err)
        }
      }
    },

    async createNFTMarket(
      token_id: string,
      price_item: string,
      list_price: string
    ) {
      const metamask: any = await detectEthereumProvider()
      if (typeof metamask !== 'undefined') {
        await requestAccount()
        const { contractNFTMarket } = await getContracts()
        try {
          const transaction = await contractNFTMarket.createMarketItem(
            NFT_ADDRESS,
            token_id,
            utils.parseUnits(price_item, 'ether'),
            { value: list_price }
          )
          const tx = await transaction.wait()
          console.log('Values: ', tx)
          return { message: `NFT N°${token_id} put up for sale `, tx }
        } catch (err) {
          console.log('Error: ', err)
        }
      }
    },

    async getListingPrice() {
      const metamask: any = await detectEthereumProvider()
      if (typeof metamask !== 'undefined') {
        const { contractNFTMarket } = await getContracts()
        try {
          const price = await contractNFTMarket.getListingPrice()
          return price.toString()
        } catch (err) {
          console.log('Error: ', err)
        }
      }
    },

    async fileToIPFS(file: File | Blob) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        const { Hash } = await ky
          .post(CLIENT_IPFS, {
            body: formData,
          })
          .json<{ Name: string; Hash: string; Size: string }>()

        return `https://ipfs.iuzepe.codes/ipfs/${Hash}`
      } catch (error) {
        console.log('Error uploading file: ', error)
      }
    },

    async fetchMyNFTs() {
      const metamask: any = await detectEthereumProvider()
      if (typeof metamask !== 'undefined') {
        const { contractNFTMarket, contractNFT } = await getContracts()
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

          return items;
        } catch (err) {
          console.log('Error: ', err)
        }
      }
    },

    async fetchMarketItems() {
      const metamask: any = await detectEthereumProvider()
      if (typeof metamask !== "undefined") {
        const { contractNFT, contractNFTMarket } = await getContracts();
        try {
          const data = await contractNFTMarket.fetchMarketItems();
          let count = 0;

          const items = await Promise.all(
            data.map(async (i) => {
              count++
              console.log(`i[${count}]:`, i);
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
          return items;
        } catch (err) {
          console.log("Error: ", err);
        }
      }
    },

    async fetchItemsCreated() {
      const metamask: any = await detectEthereumProvider()
      if (typeof metamask !== "undefined") {
        const { contractNFT, contractNFTMarket } = await getContracts();
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
    }
  },
})
