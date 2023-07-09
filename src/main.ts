import { createApp } from 'vue';
import { createPinia } from "pinia";
import { Quasar } from 'quasar';
import i18next from "i18next";
import I18NextVue from "i18next-vue";
import Backend from 'i18next-http-backend';

import { router } from "./router/router";

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css';

import './style.css'
import App from './App.vue';

i18next
  .use(Backend)
  .init({
    fallbackLng: "en"
  });

const store = createPinia();

const appInstance = createApp(App);
appInstance.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
appInstance.use(store);
appInstance.use(I18NextVue, { i18next });
appInstance.use(router);
appInstance.mount('#app');
