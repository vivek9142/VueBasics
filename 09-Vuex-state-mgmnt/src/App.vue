<template>
  <base-container title="Vuex" v-if="isAuth">  
    <TheCounter/>
    <FavoriteValue/>
    <button @click="addOne">Add 10</button>
    <ChangeCounter/>
  </base-container>
  
  <base-container>
    <UserAuth/>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

//----- Added new Component UserAuth added state management methods,actions,getters in store 
// and based on condition it is allowed access ------
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  methods:{
    addOne(){
    // this.$store.commit('increase',{value:10});
      // this.$store.commit({
      //   type:'increase',
      //   value:10
      // })
      
      // this.$store.dispatch('increase', {value:10});
      this.$store.dispatch({
        type:'increase',
        value:10
      })
    }
  },
  computed:{
        isAuth(){
            return this.$store.getters.userIsAuthenticated;
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