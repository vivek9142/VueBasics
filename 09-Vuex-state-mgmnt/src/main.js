import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

/*
A pretty nice feature provided by Vuex as your store and your state and zone grows
is the possibility to set up modules.

To split your store into multiple modules. You may only have one store per application,
but this store can be made up of multiple modules To keep your code more manageable.
You automatically, if you don't set up any modules, have one module, you could say,
the root module, the root state, but you can then add as many other modules as you want.

For example one module for the counter and another module for authentication.
Or you leave authentication in the root state, in the root module and outsource the counter
into an extra module. That would also be possible.

so we can create new variable and add state related to its purpose in it
*/

const counterModule = {
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

/*
With that, our global store, our main store, is way leaner. It now has only the Authlogic 
left. And we could put this logic into a separate module as well, if we wanted to.

But how do we now get the module back into the store? Well, createStore, this object here
also takes a modules option. And modules is an object. And here you now add all the modules
you wanna merge together into one store. You give every module an identifier of your choice,

for example, counter or numbers or whatever the name should be, this is up to you.
Here I'll go with numbers and then point at the module object that should be merged.
In this case, the counter module.Like this. And now this will be merged into this store.

If you save this now, everything will work as before, because by default, modules merged 
into a store are all merged on the same level, so to say. So if you merge a module into 
this store, it is as if you would have to find all the getters and so on
directly in the store, as we had it before a couple of minutes ago. That's why we can still 
dispatch all the actions and use all the getters as before even though we're now using a 
module.
*/

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
