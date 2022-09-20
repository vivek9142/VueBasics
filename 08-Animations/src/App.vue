<template>
  <div class="container">
    <div class="block" :class="{animate:animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
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
/* let me show you how we could add this with this transition wrapper component.
So on this paragraph, I mentioned that view would add these special CSS classes v-enter-from and 
so on. 

Now, if you don't want to use this transition way, because maybe you have a more complex animation 
with different steps, you can do this as well. Now we don't need all classes in that case though,
we don't need v-enter-from because we have no starting state
and we have no end state. 

Instead, it's all defined in the animation. So in the end, we just have animation in v-enter-active.
Then I point at the slide-scale animation to find the duration which you will read as you 
learned and ease-out. You don't even need forwords here, because you need to keep in mind
that all those special classes are being removed once the animation is over. 

Now we can do the same for a leaving though.Don't need a from state, don't need a to state
but for v-leave-active of instead of transition. We can use animations slide-scale .3 seconds 
ease-out.
*/

/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

.v-enter-active {
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

.v-leave-active {
  animation: slide-scale 0.3s ease-out;
}

/* .v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
} */

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