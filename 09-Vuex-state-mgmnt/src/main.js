import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

/*
where we create our store, we don't just have the state here,
we also have mutations. Mutations takes an object and in this object, you can 
define methods.

For example, I addOne method or increment.Whatever you wanna call it.
And this method should contain the logic to change this state.
Now, this method will automatically get the current state as a argument.
This is guaranteed by Vuex. Vuex will give us the current state
whenever this method is triggered
*/

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
