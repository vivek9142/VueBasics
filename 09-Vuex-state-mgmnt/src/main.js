import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

/*
Now some mutations might require arguments. Here, we got the increment mutation
and the value by which we increment this is hard coded into this code.

We could add and increase mutation, which also gets to state and say that in 
here, we also want to change the counter, but we actually want to increase 
it by a value which can be defined when this mutation is committed.

And you also allow for this scenario, your mutations actually also take a 
second argument, a payload, so a data package that can be a pendant.
And I'm going to name the argument payload here
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
    increase(state, payload) {
      state.counter += payload.value;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
