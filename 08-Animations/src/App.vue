<template>
  <div class="container">
    <div class="block" :class="{animate:animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- Sometimes you'll also want to run some JavaScript code, either as part of the transition,
    maybe to even control the entire transition and the style changes Fruit JavaScript,
    or maybe because you want to do something when an animation starts or when it ends.
    And vue gives you an opportunity to do that as well. It gives you various events,
    which are emitted by this transition component during a transition. 
    
    before-enter  - triggers when the enter animation starts, so in the end, you could say,
                    this runs whenever this enter from CSS class is being added.so right at the 
                    beginning, when the element is added and the animation starts.

    before-leave  - we can also listen to that event or the point of time when that element that is 
                    wrapped is leaving the Dom.

    enter         - We also have an @enter event to which we can listen. This is basically the 
                    equivalent to the Active CSS Class. The enter event is triggered as a next step
                    then beforeEnter is done, you could say.
    after-enter   - This will fire whenever the animation is done,actually it waits for the animation .
                    to finish until afterEnter gets called.
    
    leave         - which is called when the "leave" transition finished,
    after-leave   - after leave method is done executing
    -->

    <transition 
      name="para" 
      @before-enter="beforEnter" 
      @before-leave="beforeLeav" 
      @enter="entr"
      @after-enter="aftrEntr"
      @leave="leav"
      @after-leave="afterLeav">
      
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  
   <div class="container">

    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
   </div>


    <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { animatedBlock:false,dialogIsVisible: false,paraIsVisible:false,usersAreVisible:true };
  },
  methods: {
    beforEnter(el){
      console.log('beforeEnter')
      console.log(el);
    },
    beforeLeav(el){
      console.log('beforeLeave' )
      console.log(el);
    },
    entr(el){
      console.log('enter' )
      console.log(el);
    },
    aftrEntr(el){
      console.log('after enter' )
      console.log(el);
    },
    leav(el){
      console.log('leave' )
      console.log(el);
    },
    afterLeav(el){
      console.log('after leave' )
      console.log(el);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock(){
      this.animatedBlock = true;
    },
    toggleParagraph(){
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers(){
      this.usersAreVisible = true;
    },
    hideUsers(){
      this.usersAreVisible = false;
    }
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;

  transition:transform 0.3s ease-out;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}


/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

.para-enter-active {
  animation: slide-scale 0.3s ease-out;
}

/* .v-enter-to {
  opacity: 1;
  transform: translateY(0);
} */
/* .v-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

.para-leave-active {
  animation: slide-scale 0.3s ease-out;
}

/* .v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
} */

.fade-button-enter-from,.fade-button-leave-to{
  opacity: 0;
}

.fade-button-enter-active{
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active{
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,.fade-button-leave-from{
  opacity: 1;
}

.animate{
  animation: slide-fade 0.3s ease-out forwards;
}



@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>