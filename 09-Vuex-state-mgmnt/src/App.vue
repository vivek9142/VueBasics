<template>
  <base-container title="Vuex">  
    <TheCounter/>
    <button @click="addOne">Add 10</button>
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
    I want to increase TheCounter by 10. Now, I still don't want to manipulate 
    the state from insight this component. I still want to use a mutation,
    but I want to pass this data package to this mutation so that we have some 
    flexibility.
    
    For that commit, takes a second argument, which will be the payload,
    which then later is received in your mutation. So the second argument here,
    indeed is also the second argument you can pass to commit.
    And this can be anything as I mentioned, a number, a string, but here it 
    should be an object with a value property because that is what 
    I'm expecting here.

    you just commit mutations from inside your components, so you never, and 
    that's really important. You never directly add the state from inside 
    components. This is not considered a good practice.
    You should instead use mutations.
    
    */
    
    // this.$store.commit('increase',{value:10});

      //you can also commit like this 
      this.$store.commit({
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