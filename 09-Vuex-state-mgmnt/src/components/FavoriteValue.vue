<template>
    <h3>{{ counter }}</h3>
</template>

<script>
export default {
    computed:{
    counter(){
    //   return this.$store.state.counter * 2;
    // return this.$store.getters.finalCounter;

    //we can use normalizedConuter here
    return this.$store.getters.normalizedCounter;
    }
  },
}
</script>

