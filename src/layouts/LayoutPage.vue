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
      <h1 class="text-3xl font-bold">{{ route.name }}</h1>
    </o-container>
    <slot />
  </div>
</template>
