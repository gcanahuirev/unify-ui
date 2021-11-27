import type { App } from 'vue';

import BaseLayout from '~/layouts/BaseLayout.vue';
import LayoutDefault from '~/layouts/LayoutDefault.vue';
import LayoutPage from '~/layouts/LayoutPage.vue';

export default {
  install: (app: App) => {
    app.component('BaseLayout', BaseLayout);

    // Register layouts
    app.component('LayoutDefault', LayoutDefault);
    app.component('LayoutPage', LayoutPage);
  },
};
