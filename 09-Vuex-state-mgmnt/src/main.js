import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

/*
the state inside of a module, is actually treated as a local state,
inside of the module. Mutations actions and getters are global,
you can access them as before on the main store. But the state is local to this module.

So anything you do on this state inside of this module refers just
to this state module. So for example, in a getter,
I would not be able to get the auth status. If I add new getter,
in the counter module, getters object, TestAuth and I try to return state is locked in,
this will not work.

you notice there's nothing below the button. And if we change it, there's still nothing
because it doesn't find is locked in the getter here. In the state of this getter.
Because this getter is in the counter module. And as As I mentioned, the state is local.

So here we only have access to the state that belongs to this module.
So that's important to keep in mind. And it's similar for actions
and mutations there in context, for example, where you learned earlier,
that you all have access to the state, 

in case you needed it, you also only have access to the state of this module.
Now in case you need to work around that, there are ways though.
For example, in getters inside of a module, you now don't just get state
and getters as before, but you can now also get access to a root state and root getters.
And you might remember, that we saw similar properties on this context object earlier 
in the module. 
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
    /*
    This is your way of getting access to the main state,
    the main getters of the entire store instead of just the state of this specific module.

    So this is your fallback way of getting access to state that's not part
    of this module, in case you needed. Typically, though, of course,
    inside of a module, you tend to just work with the state that belongs to the module.

    So you probably don't need this too often, but there can definitely be situations
    where you do need it.
    */
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
