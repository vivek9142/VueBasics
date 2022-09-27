<template>
    <!-- <button @click="increment">Add 2</button> -->
    <button @click="inc">Add 2</button>
    <button @click="increase({value:11})">Add 11</button>
</template>

<script>


import {mapActions} from 'vuex';

export default {
  methods:{
    // addOne(){
    // this.$store.dispatch('increment');
    // }

    //...mapActions(['increment','increase'])


    // ...mapActions({
    //   inc: 'increment',
    //   increase:'increase'
    // })

    /*
    Map actions takes name space as a first argument
    and then your action names as before.
    */
    ...mapActions('numbers',{
      inc: 'increment',
      increase:'increase'
    })
  }
};
</script>