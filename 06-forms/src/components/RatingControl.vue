<template>
    <ul>
        <li :class="{active:activeOption === 'poor'}"><button type='button' @click="activate('poor')">Poor</button></li>
        <li :class="{active:activeOption === 'average'}"><button type='button' @click="activate('average')">Average</button></li>
        <li :class="{active:activeOption === 'great'}"> <button type='button' @click="activate('great')">Great</button></li>
    </ul>
</template>
/*
02- So therefore, if we accept this 
prop in our component and emit this event, we can use v-model on our component
and therefore back rating control. All we got to do here is we have to emit
this update model value event in our activate method. And forward this option to v-model,
and also initialize our active option with the model value we get on the prop here,
so that the form component. So this component here is able to set our initial value
so that this rating initial value here, which we bind to v-model is the initial value 
reflected in our component.
*/
<script>
export default {
    props:['modelValue'],
    emits:['update:modelValue'],
    data(){
        return {activeOption:this.modelValue}
    },
    methods:{
        activate(option){
            this.activeOption = option;
            this.$emit('update:modelValue',option);
        }
    }
}
</script>

<style scoped>
.active{
  border-color: #a00078;
}
.active buttn{
  color: #a00078;
}

ul{
    list-style: none;
    margin: 0.5rem 0;
    padding:0;
    display: flex;
}

li{
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding:1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button{
    font:inherit;
    border: none;
    background-color: transparent;
    cursor:pointer;
}
</style>