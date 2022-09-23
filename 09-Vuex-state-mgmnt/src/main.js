import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

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
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },

    increase(context, payload) {
      //logging conext to see what we get in there
      /*
      you get dispatch
      -----------------
        You can also dispatch a number action from inside an action.
        This can be helpful if you're sending an HTTP request,
        and if it succeeds, you wanna trigger a success action,
        if you get an error, you wanna trigger an error handling action.
        Then you could have one action that dispatches multiple other actions
        in reaction to different results of HTTP request.

      You can also access getters
      -----------------
        in case your action needs some calculated value, which would arrive in 
        some getter. And you can also directly tap into the state,
        in case getting access to the getters might not be enough.
        You should not manipulate the state from inside the action though.
        Always use a mutation for that.
      */

      console.log(context);
      context.commit('increase', payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },

    // normalizedCounter(state) {
    //   const finalCounter = state.counter * 3;
    //   if (finalCounter < 0) return 0;
    //   if (finalCounter > 100) return 100;

    //   return finalCounter;
    // },

    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) return 0;
      if (finalCounter > 100) return 100;

      return finalCounter;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
