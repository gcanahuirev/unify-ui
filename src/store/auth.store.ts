import { defineStore } from 'pinia'
import { useHttp } from '~/hooks/useHttp'
import { useToken } from '~/hooks/useToken'

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

      useToken.set(data.access_token)
    },
  },
})
