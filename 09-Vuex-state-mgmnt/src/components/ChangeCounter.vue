<template>
    <button @click="addOne">Add 2</button>
</template>

<script>

export default {
  methods:{
    addOne(){
        // dispatch increment action here
    this.$store.dispatch('increment');
    }
  }
};
</script>