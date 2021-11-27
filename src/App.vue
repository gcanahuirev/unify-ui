<template>
  <base-layout>
    <router-view v-slot="{ Component }">
      <div class="h-full">
        <component :is="Component" />
      </div>
    </router-view>
  </base-layout>
</template>
