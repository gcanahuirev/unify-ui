<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import OModal from '~/components/objects/OModal.vue'
  import { useAuthStore } from '~/store/auth.store'

  export default defineComponent({
    components: {
      OModal,
    },
    setup() {
      const menuRef = ref<HTMLElement | undefined>()
      const menuActive = ref<boolean>(false)
      const menuToggle = () => (menuActive.value = !menuActive.value)
      const showModalLogin = ref<boolean>(false)

      const store = useAuthStore()

      const login = async (e: Event) => {
        const target = e.target as unknown as HTMLInputElement[]
        await store.login({
          email: target[0].value,
          password: target[1].value,
        })
        showModalLogin.value = false
      }

      return {
        menuRef,
        menuActive,
        menuToggle,
        showModalLogin,
        login,
      }
    },
  })
</script>

<template>
  <header>
    <nav class="bg-primary shadow" style="background:#03254C;">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a class="flex-shrink-0" href="/">
              <article>
                <strong style="font-size:30px">Unify dapp music</strong>
              </article>
            </a>
            <div class="horizontalgap" style="width:10px"></div>
            <img src="src/assets/music_note.png" height=50 width=50>
          </div>

          <li class="nav-item" style="list-style-type: none;color: white;font-weight: bold;">
            <router-link to="/" exact class = "nav-link" active-class="active">
            Tienda
            </router-link>
          </li>
          <li class="nav-item" style="list-style-type: none;color: white;font-weight: bold;">
            <router-link to="/ranking" exact class = "nav-link" active-class="active">
            Ranking
            </router-link>
          </li>
          <li class="nav-item" style="list-style-type: none;color: white;font-weight: bold;">
            <router-link to="/create-token" exact class = "nav-link" active-class="active">
            Create Token
            </router-link>
          </li>
          <li class="nav-item" style="list-style-type: none;color: white;font-weight: bold;">
            <router-link to="/list-token" exact class = "nav-link" active-class="active">
            List Token
            </router-link>
          </li>
          <li class="nav-item" style="list-style-type: none;color: white;font-weight: bold;">
            <router-link to="/legal" exact class = "nav-link" active-class="active">
            Términos y condiciones
            </router-link>
          </li>
          <div class="block">
            <div class="ml-4 flex items-center md:ml-6">
              <div class="ml-3 relative">
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      @click="menuToggle"
                      class="
                        focus:outline-none
                        flex
                        items-center
                        justify-center
                        rounded-full
                        h-9
                        w-9
                        text-sm
                        font-medium
                        text-gray-700
                        bg-white
                        hover:bg-secondary hover:text-white
                      "
                    >
                      <i class="icon-user"></i>
                    </button>
                  </div>
                  <div
                    ref="menuRef"
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
                    :class="menuActive ? '' : 'hidden'"
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
                          hover:bg-primary hover:text-white
                        "
                        role="menuitem"
                        @click="showModalLogin = true"
                      >
                        <span class="flex flex-col">
                          <span> Login </span>
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
    <OModal :show="showModalLogin" @close="showModalLogin = false">
      <h3>Ingresar</h3>
      <form @submit.prevent="login" class="flex flex-col pt-8">
        <input type="email" placeholder="Email"  class="rounded-md mb-4"/>
        <input type="password" placeholder="Password" class="rounded-md mb-4" />
        <button
          class="px-3 py-2 bg-primary text-sm text-black font-bold rounded"
          type="submit"
        >
          Login
        </button>
      </form>
      <span class="text-sm italic font-medium"><a href="#">Olvidaste la contraseña</a></span>
    </OModal>
  </header>
</template>
<style>
article {
  background: linear-gradient(
    to right,
    hsl(98 100% 62%),
    hsl(204 100% 59%)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
</style>