<template>
  <base-container title="Vuex">  
    <TheCounter/>
    <FavoriteValue/>
    <button @click="addOne">Add 10</button>
    <ChangeCounter/>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue
  },
  methods:{
    addOne(){
    // this.$store.commit('increase',{value:10});
      // this.$store.commit({
      //   type:'increase',
      //   value:10
      // })

      /*
      inside of the component where we previously committed,
      we can now dispatch an action. And the cool thing is the syntax for 
      dispatching is pretty much the same as for committing.
      You can either dispatch with two arguments where the first argument 
      is the action name. So in my case increments here.
      And the second argument is a potential payload you want, or you use the 
      one argument syntax.Here however, I'm dispatching increase, 
      which doesn't exist as an action yet.
      */
      // this.$store.dispatch('increase', {value:10});
      this.$store.dispatch({
        type:'increase',
        value:10
      })
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