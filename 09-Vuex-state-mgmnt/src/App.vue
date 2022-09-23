<template>
  <base-container title="Vuex">

    <!-- 
      there now is a new property, which we can access in every component.
      And that's the dollar sign store property, which points at the vuex store.
      This then has a state property, which points at the state managed by the 
      store. 
      
      we can also store this value in computed function property
      -->
    <!-- <h3>{{$store.state.counter}}</h3> -->
    <!-- <h3> {{ counter }}</h3> -->
    
    <TheCounter/>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
//register TheCounter here
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter
  },
  //copy this value and h3 tag into theCounter comp
  // computed:{
  //   counter(){
  //     return this.$store.state.counter;
  //   }
  // },
  methods:{
    addOne(){
      this.$store.state.counter++;
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