import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import VueApexCharts from 'vue3-apexcharts'

library.add(faTrash)
library.add(faEdit)

createApp(App)
  .use(store)
  .use(router)
  .component('apexchart', VueApexCharts)
  .mount('#app')
