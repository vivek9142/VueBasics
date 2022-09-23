import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

//createStore to create global store in app
const store = createStore({
  state() {
    // this object will hold the application-wide data
    return {
      counter: 0,
    };
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
