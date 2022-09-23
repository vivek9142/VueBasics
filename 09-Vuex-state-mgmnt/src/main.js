/*
Let's say, in the increment mutation, we don't wanna increment immediately.
Instead, we wanna wait two seconds and then increment. Now this might be a 
dumb example, but a better example could be an app where you send an HTTP 
request and you wait for the response. And only once the response is there,
you wanna change your state.

Put in other words, you sometimes have code, which runs asynchronously,
which doesn't finish immediately, but sometimes in the future.
The problem is that Mutations must be synchronous. You're not allowed to have 
any asynchronous code in there. So if you run a Mutation,
it needs to execute step-by-step-by-step without any pause and immediately 
change the state. It's not allowed to do anything that may take a bit longer.

The reason for that simply is that if multiple Mutations execute,
every mutation should get the latest state.And if another mutation was 
committed, but didn't finish yet, that is unexpected and will lead to 
errors in your program.That's why a key requirement of Mutations
is that they have to be synchronous. But what if I do want to wait for two 
seconds?

We could do it as we've set timeout. There, we could wait two seconds,
and then the function here, which then executes after two seconds,
we update our state. But this is actually not allowed.
It will work if you try it, but it is a very bad practice and nothing 
you should do.

Instead Vuex has a better concept in place for working with asynchronous code.
Besides Mutations and Getters, it also has Actions. And Components should 
trigger Actions,which then in turn commit Mutations.
Because Actions can now use asynchronous code. And because of that,
it's actually considered a good practice in general, to always put Actions 
between Components and Mutations, even though Components could commit 
Mutations themselves.And that wouldn't be a problem if you only had 
synchronous code.

But even with that fact that directly committing Mutations from inside 
Components often would not be a problem. Even with that, it is considered a 
good practice to always put Actions in between to ensure that you never 
accidentally put asynchronous code into Mutations.
*/

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
    /*
  In main js, besides Mutations and Getters and State,
  we can add Actions. And I'm doing this here, I'll add Actions here.
  And Action also takes an object just like Getters and Mutations did.
  
  An action again is just a method. For example, increment: You can use the 
  same name here as you do in your Mutations. So here I've got an increment 
  mutation. I'm also using an increment action. You don't have to use the 
  same name,but often you will because often you just have an action
  in between a component and a mutation. So using the same name makes sense.

  this action will get an object as a argument, a context object.
  And this context object is full of interesting things. The actual get this 
  argument automatically by Vuex,
  */

    increment(context) {
      /*
    Now context, for example, has a commit method, which you can call.
    And it's does what you think, it commits a mutation, just like you could 
    commit it from inside a component. You can pass a second argument as a 
    payload and you can pass an object alternatively
    to the two argument way of using it. But here I only need one argument
    and that will be the name of the mutation that should be committed.
    
    Now we'll have a look at the other things inside of context in a second,
    but for the moment, let's leave it like this. And now we got an action 
    which commits increment. The interesting thing is that Actions,
    unlike Mutations are allowed to run asynchronous code. So we can take our 
    timeout here and wrap context commit with it. With that, the mutation is 
    synchronous again, but the action is asynchronous,
    which is allowed by Veux. 
    
    It simply commits the mutation only once the two seconds have passed.
    And now we need to change our component code and make sure that we don't 
    commit from inside the component, but that we use the action instead.
    */
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },

    increase(context, payload) {
      // here's where we can do the payload integration with actions
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
