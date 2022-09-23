Well, actually, the way we're using Vuex at the moment works
but it's not fully following the Vuex philosophy. We're directly tapping into 
our store.state to change something from inside a component and whilst this 
works technically here, this is not ideal.

We can change the state from anywhere in the application and it's up to us if 
we add one or if we set it equal to state.counter + 10 or we have a typo and 
accidentally type one twice and hence add 11 every time we increment this. 
So what I wanna say is that here, we still can introduce errors
because we're not having a clearly defined state-changing mechanism.
We can change the state from anywhere. That is why we should use Vuex a bit 
differently. We have this app-wide, central Data Store, this State Store,
and we communicate with it from inside our components.

Now, I have a dashed arrow here because yes, we want to communicate
but not directly. What we're doing at the moment is not ideal.
Instead, Vuex has a built-in concept called mutations.Mutations are clearly 
defined methods, which have the logic to update the state.

And from inside our components, we should, in the end, just trigger those 
mutations instead of directly manipulating the state. By triggering mutations,
all components that want to edit a state do it in the same way.
And it's guaranteed that they do it in the same way.

We wouldn't have that stupid mistake of having 11 here, even if we would have 
one, if we ever decide that we want to add two, we have to change that in two 
components. We have to go to two components and change our logic in two places
and in bigger applications, we might have even more places
where we need to change the logic. Now, that's a lot of code duplication
and that's exactly why we have this mutations concept.

<template>
  <base-container title="Vuex">  
    <TheCounter/>
    <button @click="addOne">Add 1</button>
    <ChangeCounter/>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter
  },
  methods:{
    addOne(){
      /*
       with help of mutations, which is the more elegant
       and more predictable way of updating our state.
      */ 
      this.$store.commit('increment');
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>