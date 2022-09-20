<template>
  <div class="container">
    <div class="block" :class="{animate:animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <!-- There is a built in component, which you can wrap around the elements
    where you wanna control the appearance and removal animation with Vue.
    And that's the TRANSITION component. You can wrap the element, which should be animated, 
    
     transition must only contain one element, one direct child.-->
  <div class="container">
    <transition>
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
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
    return { animatedBlock:false,dialogIsVisible: false,paraIsVisible:false };
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

/* the default class names Vue will add are v-enter-from, v-enter-active and v-enter-to.
Vue, by default, will add these three CSS classes at different times as explained

when the element is first added to the DOM. when the paragraph is appearing on the DOM for the first time. Now we can define different 
class styles here. We can define different properties. And we should include at least one transition
or animation so that Vue is able to read the duration time from these classes because I mentioned
that this would be another key thing it does behind the scenes. 

You have similar classes for removing. There we have the v-leave-from class.
We have the v-leave-active class and we have the v-leave-to class.
And it's the same concept as for entering. We define our starting state,
which for me here is the same state as the end state for entering
*/

.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/*
You don't need transition comp if you're not having this v-if or v-show case
because if you just have something like the block in the first example,
in the last lectures,

you can just conditionally add and remove CSS classes as you learned it.
It's just this added to the DOM or removed to the DOM case where you can't do that
because the element is just not there and that's where transition then helps you.
*/

.animate{
  animation: slide-fade 0.3s ease-out forwards;
}

@keyframes slide-fade {
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