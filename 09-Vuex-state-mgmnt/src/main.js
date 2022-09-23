import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

/*
Now of course both comp will work. We got the counter twice now,
and it updates in both components. Now lets say we decide that actually we 
always want our output to counter times two.

So we update it here in FavoriteValue and we update it in the counter.
Do you see the problem? We are again replicating logic here.
We do have duplicate code. And again in bigger more realistic applications,
this might absolutely happen.

That we need the same kind of data in different components, and then we decide 
that we want to format or calculate the data differently. And therefore we 
suddenly need to change it in all the different places.

This is why we might not want to directly talk to the state. Instead we can use 
a concept called Getters. Which in the end are, you could say computer 
properties defined directly in the store, which we then can use from inside 
any component of our choice.

So here is how we add a getter to our Vuex store. Next to mutations,
doesn't matter where exactly but in the same place as State and Mutations,
you add getters. This takes an object, and every getter is a method in this 
object now.

So basically just like computer properties are methods in the computed option 
of components. Here we could have the final counter getter
lets say. 

And the final Counter Getter method like all getter method in Vuex,
gets two arguments.The current State, which we need to get a value out of it,
and other getters.
Getting other getters in a getter can be helpful if the value you wanna 
calculate here, depends on the result of an another getter.
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
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    /*
     I mentioned that you can't have multiple getters, and that getters can 
     also depend on each other. Lets say, besides our FinalCounter getter,
     we have another getter which is called normalizedCounter.
    
     And the idea here is simple, I wanna use my counter value,
     to be precise the FinalCounter value, but I want to make sure it's 
     greater than zero and smaller than 100.
     And I either output zero or 100 if one of this boundaries is crossed.
    */

    // normalizedCounter(state) {
    //   const finalCounter = state.counter * 3;
    //   if (finalCounter < 0) return 0;
    //   if (finalCounter > 100) return 100;

    //   return finalCounter;
    // },

    /*
     And with that you would see that as soon as we exceed 100, the bottom 
     counters stays at 100. Because of the logic we just added.
     Now this works but it's not great. We are calculating something,
     which we've already calculate in another getter. And that's why we get 
     this getters second argument here. With that we can refer to our getters,
     and get our FinalCounter, simply by calling getters.FinalCounter
     and imagine we had more code in there.
     
     Replicating that all in another getter, is just unnecessary if we already 
     do have a getter for that.
     */
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
