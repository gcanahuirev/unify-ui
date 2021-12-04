import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import Toast from 'vue-toastification'
import App from '~/App.vue'
import { router } from '~/routers'
import layouts from '~/plugins'
import { createPinia } from 'pinia'

const app = createApp(App)

/* ======= PLUGINS ======= */
app.use(router)
app.use(createPinia())

/* ======= COMPONENTS ======= */
app.use(layouts)
app.use(Toast, {})

/* ======= MOUNTED APP ======= */
app.mount('#app')
