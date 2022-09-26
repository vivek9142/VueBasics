<template>
    <!-- <button @click="increment">Add 2</button> -->
    <button @click="inc">Add 2</button>
    <button @click="increase({value:11})">Add 11</button>
</template>

<script>
/*
Let's say in change counter, we don't manually want to define methods,
which in the end also just drill into the store to dispatch some action here.

Instead, we could just as with getters, import mapActions from Vuex,
Now, just as with mapGetters we call mapActions. Now inside of methods though,
not inside of computed, but inside of methods.
We call mapActions, like this. And again get back an object which we merge
with the methods object by using the spread operator. MapActions now also takes an array.
And now here we define all the action names, which we wanna have as methods in this component.

So in this case, increment. But of course, we could also add the increase action here
to map both actions to methods in this component. And these methods will be created 
for you by mapActions.
*/

import {mapActions} from 'vuex';

export default {
  methods:{
    // addOne(){
    // this.$store.dispatch('increment');
    // }

    //...mapActions(['increment','increase'])

    /*
    There also is an alternative way of mapping actions,in case you're not happy with 
    the default names,you can also call mapActions and not pass an array to it but an 
    object instead. And then you can define the method names
    you want to have in your component as keys.
    */

    ...mapActions({
      inc: 'increment',
      increase:'increase'
    })
  }
};
</script>