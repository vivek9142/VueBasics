<template>
    <h3>{{ finalCounter }}</h3>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed:{
    // counter(){
    //   return this.$store.getters.finalCounter;
    // }
    
    //...mapGetters(['finalCounter'])

    /*
    Now if you are using map getters, you pass a first argument to map getters,
    which is your name space, in this case numbers, and then there after you still 
    add your array with the getter names as before.
    So with that if we save this, the second counter is back as well.
    */

    ...mapGetters('numbers',['finalCounter'])
  },
}
</script>