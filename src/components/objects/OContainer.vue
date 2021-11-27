<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'OContainer',
  });
</script>

<template>
  <section class="max-w-7xl mx-auto  w-full px-8 py-6">
    <slot />
  </section>
</template>
