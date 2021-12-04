<script lang="ts">
  import { defineComponent } from 'vue'
  import { useRoute } from 'vue-router'

  import OContainer from '~/components/objects/OContainer.vue'
  import OHeader from '~/components/objects/base/OHeader.vue'

  export default defineComponent({
    name: 'LayoutPage',
    components: { OContainer, OHeader },

    setup() {
      const route = useRoute()

      return { route }
    },
  })
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray">
    <o-header></o-Header>
    <!-- overflow-hidden -->
    <o-container>
      <h1 class="text-3xl font-bold color=" style="color: #003188;" >{{ route.name }}</h1>
      <slot />
    </o-container>
    
  </div>
</template>
