<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      sound: {
        type: String,
        required: true,
      },
    },

    emits: ['action'],
  })
</script>

<template>
  <div class="bg-white shadow-md rounded-lg">
    <div class="px-4 py-2">
      <h1 class="text-gray-900 font-bold text-3xl uppercase">{{ name }}</h1>
      <p class="text-gray-600 text-sm mt-1">
        {{ description }}
      </p>
    </div>
    <img class="h-56 w-full object-cover mt-2" :src="image" :alt="name" />
    <div class="p-3">
      <audio controls class="w-full">
      <source
        src="https://raw.githubusercontent.com/gcanahuirev/unify/dev/test/Cybersdf%20Dolling.mp3"
        type="audio/mp3"
      />
    </audio>
    </div>
    <div class="flex items-center justify-between px-4 py-2 text-black">
      <h1 class="text-gray-200 font-bold text-xl">{{ price }}</h1>
      <button
        class="px-3 py-1 bg-primary text-sm text-black font-bold rounded"
        @click.stop="$emit('action')"
      >
        Comprar
      </button>
    </div>
  </div>
</template>
