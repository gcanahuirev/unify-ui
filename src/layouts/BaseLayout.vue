<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
  import { computed, defineComponent } from 'vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'BaseLayout',
    setup() {
      const route = useRoute();

      const layout = computed(() => {
        return route.meta.layout || 'LayoutDefault';
      });

      return { layout };
    },
  });
</script>
