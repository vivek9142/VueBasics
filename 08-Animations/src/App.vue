<template>
  <div class="container">
    <div class="block" :class="{animate:animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="para">
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <!-- 
     I always emphasized that transition must only have one direct child element,
     and because of that, we had to change our Base Modal a little bit here,
     to ensure that transition has only one direct child element.
     Well, actually there are exceptions to that rule, there is a scenario where you might
     have more than one direct child element, and here it is.
    In App Vue, I'm going to add a new Div with a class of container, simply to show you a new example
    inside of that Div. And here, I'll add a good, old button, but now we'll animate the button itself,
    and I'll have a button here,
   -->
   <div class="container">
    <!-- 
        There is one exception, where you are allowed to have more than one
        direct child element inside of your transition component,and that is the exception here.
        The exception is, if of the child elements you have in your transition,
        you're guaranteed that at most one is added to the real dom at the same time,
        and that's the case here. We got 2 alternatives If statements, and therefore we guarantee
        that only one of these 2 buttons will be added to the real dom at a time. 
    -->

    <!-- 
      We want this fade transition, but we don't want both buttons at the same time on the screen.
      Instead, one button should fade out, and then the other button should fade in,
      that's the idea, and that's also something that you can control.
  
      You can add the "mode" prop here to the transition component,
      and "mode" knows two values, "in-out", and "out-in",
      and this controls whether first, the leaving element should be animated, or the new element. 
      So if I set this to "in-out",and reload, we got the same behavior as before,or a similar behavior.
      
      Now, the addition of the button is animated first, and then the button is removed.We can switch 
      this to "out-in",and now we will have a better behavior  without in, if we reload,
      Vue will first animate the removal of the button, and then animate the addition of the new button.
      So, this allows you to control which element should be animated first,instead of animating both 
      at the same time,which gave us this undesirable output.
     -->
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