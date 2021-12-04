import ky from 'ky'

import { useToken } from '~/hooks/useToken'

const BASE_URL_API = import.meta.env.VITE_APP_API
console.log(BASE_URL_API)

const useHttp = ky.extend({
  prefixUrl: String(BASE_URL_API),
  hooks: {
    beforeRequest: [
      (request: Request) => {
        if (useToken.get()) {
          request.headers.set('Authorization', `Bearer ${useToken.get()}`)
        }
      },
    ],
  },
})

export { useHttp }
