<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        v-show="showModal"
        ref="modal-backdrop"
        class="fixed z-10 inset-0 overflow-y-auto bg-black/50">
        <div
          class="
            flex
            items-start
            justify-center
            min-h-screen
            pt-24
            text-center
          ">
          <transition
            enter-active-class="transition ease-out duration-300 transform "
            enter-from-class="opacity-0 translate-y-10 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95">
            <div
              v-show="showModal"
              ref="modal"
              class="
                relative
                bg-white
                rounded-lg
                text-left
                overflow-hidden
                shadow-xl
                p-4
                w-4/5
                md:w-1/2 md:max-w-100
              "
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline">
              <button
                class="absolute top-4 right-4 focus:outline-none"
                @click="closeModal">
                <i class="icon-close"></i>
              </button>
              <slot>
                <!-- @slot Use this slot body -->
              </slot>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
  import { onClickOutside } from '@vueuse/core';
  import { defineComponent, ref, watch } from 'vue';
  export default defineComponent({
    props: {
      show: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['close'],
    setup(props, { emit }) {
      const showModal = ref(false);
      const modal = ref<HTMLElement | undefined>();
      const closeModal = () => emit('close');
      onClickOutside(modal, () => {
        if (showModal.value === true) closeModal();
      });
      watch(
        () => props.show,
        (show) => {
          showModal.value = show;
        },
      );
      return { closeModal, showModal, modal };
    },
  });
</script>