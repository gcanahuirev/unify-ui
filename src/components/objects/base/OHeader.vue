<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {},
  })
</script>

<template>
  <header>
    <nav class="bg-primary shadow">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a class="flex-shrink-0" href="/">
            <strong>Unify dapp music</strong>
              <!-- <img class="h-8 w-8" src="/icons/rocket.svg" alt="Workflow" /> -->
            </a>
          </div>
          <div class="block">
            <div class="ml-4 flex items-center md:ml-6">
              <div class="ml-3 relative">
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      class="
                        flex
                        items-center
                        justify-center
                        w-full
                        rounded-md
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-gray-700
                        hover:bg-gray-50
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-offset-gray-100
                        focus:ring-gray-500
                      "
                      id="options-menu"
                    >
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-800"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    class="
                      origin-top-right
                      absolute
                      right-0
                      mt-2
                      w-56
                      rounded-md
                      shadow-lg
                      bg-white
                      ring-1 ring-black ring-opacity-5
                    "
                  >
                    <div
                      class="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        class="
                          block block
                          px-4
                          py-2
                          text-md text-gray-700
                          hover:bg-gray-100 hover:text-gray-900
                        "
                        role="menuitem"
                      >
                        <span class="flex flex-col">
                          <span> Dashboard </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
