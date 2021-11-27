import 'virtual:windi.css'
import 'virtual:windi-devtools'

import { createApp } from 'vue'
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

/* ======= MOUNTED APP ======= */
app.mount('#app')
