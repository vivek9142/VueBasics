Vue always adds the same CSS classes to all elements, which basically means you will use the same 
animations and transitions for all elements. Maybe that is your requirement. Maybe that is what you 
want, but maybe you want different transitions for different transition components on your page.

And that's why you can customize those names here.
We could, for example name this para-enter-from para-enter-active, para-enter-two,
and the same for the leave classes instead of the v- thing at the beginning.
But with that Vue of course wouldn't know that these are the CSS classes it should add and analyze
instead with just the names changed here, we have no animation because Vue will stick to its default
v-enter-from, v-enter-to and so on class names. We need to tell Vue that for this transition component here,
it should add the para-classes and we do so by adding a special name prop
to the transition component.

Here you add your custom prefix, which in my case is para, but which can be anything you want.
And if you do that now these para-enter-from, enter-active, enter-to.
And so on classes will be added and managed and analyzed by Vue.

<template>
  <div class="container">
    <div class="block" :class="{animate:animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- we can also  add custom class names such as-->
    <!-- <transition enter-to-class="para" enter-active-class="..."> -->
    <!-- added name para to recognise para-enter,utility classes -->
    <transition name="para">
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