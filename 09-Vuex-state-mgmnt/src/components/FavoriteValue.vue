<template>
    <h3>{{ counter }}</h3>
</template>

<script>
export default {
    computed:{
    counter(){
    //   return this.$store.state.counter * 2;
    // return this.$store.getters.finalCounter;

    // return this.$store.getters.normalizedCounter;

    /*
    In favorite value, I access my normalized counter getter. Now you don't access dot 
    normalized counter but instead a special property name,
    which contains a special character, in which you hence have to access
    with this square bracket notation.

    this is now the property name of the normalized counter,name space, slash and then 
    your getter name, action name, whatever it is.
    In this case, it's a getter.
    */

    return this.$store.getters['numbers/normalizedCounter'];
    }
  },
}
</script>

