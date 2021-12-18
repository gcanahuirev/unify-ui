import { defineStore } from 'pinia'
import { useHttp } from '~/hooks/useHttp'
import { useToken, useUser } from '~/hooks/useToken'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: {},
    }
  },

  actions: {
    async login({ email, password }: { [key: string]: string }) {
      const { data } = await useHttp
        .post('auth/login', {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        })
        .then((res) => res.json())

      useUser.set(data.user)
      useToken.set(data.access_token)
      const router = useRouter()
      router.push('/')
    },
  },
})
