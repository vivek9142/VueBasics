<template>
    <h3>{{ finalCounter }}</h3>
</template>

<script>
/*
So we have this code here just to get access to our getter. Now, this is obviously not a lot 
of code, but we're not doing anything besides drilling into our store.
This is not horrible. But in case you're not happy with that

Vuex has a helper which you can use. You can import something from Vuex,known as
mapGetters function. You can use it inside of this computed object.
Instead of defining a computed property on your own, you can call mapGetters here.
And this will return an object which you can then spread with the free.spread operator
into your computed property object.

So mapGetters gives you an object, which we now merge into the computed properties object.
Because the object mapGetters will give you is an object full of computed properties,
which are defined automatically for you.

Well, now, which computed properties do we get here? Well, mapGetters takes an array 
as an argument. And in here, you list all getter names as strings,
which you want to have as computed properties in this component.

So in this case, for example, the final counter, but of course, we could have multiple 
getters here. And now this will give us a final counter computed property in this component,
which automatically points at the finalCounter getter. And with that,
we just need to change this here to finalCounter, because that will be the 
computed property name.
*/

import {mapGetters} from 'vuex';

export default {
    computed:{
    // counter(){
    //   return this.$store.getters.finalCounter;
    // }
    ...mapGetters(['finalCounter'])
  },
}
</script>