import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

/*
Now besides this local state, you can also make the entire module local.
You can make it name spaced, as it's called, to make sure that multiple modules
are clearly separated from each other.

Now why might you wanna do that?

Well, as you're application grows,you could of course have name clashes.
You might be using the same getter or the same action name in different modules 
of the same store.

So in bigger apps, you could have such clashes and to avoid that you can name space modules.

You do that by adding an extra option, inside of your object here,
and that's the name spaced option which you can set to true.
If you add name spaced true, you tell vuex that now the entire module
and not just the state should be kinda detached from the rest of the store.

If you do that though, you will now notice that our getters and our action dispatchers 
no longer work. Because now these actions and getters are no longer available on the 
main store. Instead now we have to access them by specifying the correct name space.
*/

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
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
      //   console.log(context);
      context.commit('increase', payload);
    },
  },
  getters: {
    testAuth(
      state
      // getters, rootState, rootGetters
    ) {
      return state.isLoggedIn;
    },
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
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {},
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
