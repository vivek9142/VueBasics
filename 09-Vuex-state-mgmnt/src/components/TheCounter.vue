<template>
    <h3>{{ counter }}</h3>
</template>

<script>
export default {
    computed:{
    counter(){
      /*
      Here in this computed property, which we keep,
      we now access this $store, but no longer the state but instead
      store.getters. And then the name of your getter.
      Which in this case was FinalCounter. So here it's also FinalCounter.
      
      And you don't call it, you don't execute it,you just point at it.
      Like this. Like a property. And Vuex will execute this getter method 
      for you then, passing into current state into the getter.

      with that if we ever decide that the counter should be lets say the 
      Value times three, we just need to do this in one place,
      instead of in two places.
      */ 

      // return this.$store.state.counter * 2;
      return this.$store.getters.finalCounter;
    }
  },
}
</script>