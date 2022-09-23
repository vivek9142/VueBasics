<template>
    <button @click="addOne">Add 1</button>
</template>

<script>

export default {
  methods:{
    addOne(){
    //   this.$store.state.counter++;
    /*
    Here, to trigger a mutation, we access this.$store
    but now there we've got a commit method. It's a built-in method,
    which Vuex gives you on its store. And commit takes the name
    of the mutation you want to perform. In this case, that's increment
    and the name should be provided as a string.
    */

    this.$store.commit('increment');
    }
  }
};
</script>