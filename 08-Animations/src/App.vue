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

  <!-- adding transition for modal -->
  <!-- But if we have both root elements here, which you of course want, then this does not work.
    And it doesn't work because as I mentioned before, this transition component wants one direct 
    child element. Yes, it has just one child element here, just one base-model.
    
    But of course the base-model here, is really just a wrapper around its template,
    where we have two root elements. So these two root elements, this div and this dialogue,
    these are the actual direct child elements inside of this transition component.
    Well, and two elements are more than one. That's why this set-up here does not work. 
    
    
    Well, there are various ways of solving this. We can, for example, split this into two components
    and manage the backdrop separately. But we could also bring this transition component
    over to base-model and try using it in there to transition to style log.
    And that's the route I will take here. so we'll move the animation and transition to the dialog 
    in base-modal in dialog comp 
    -->


    <!-- Now, after changing the concept however, we need to change the logic, how this base-model 
    opens.At the moment, I'm adding the base-model component in App.vue with v-if.
    And this won't work, if I want to use transition inside of the base-model template
    to animate the addition and remove of dialogue.If transition is part of that template,
    which has added and removed with v-if, it won't have any effect.
    
    Therefore I'll now open and close the modal differently.I'll add a new open prop, to my 
    base-model component and point at dialogue is visible there. So forward, the dialogue is 
    visible property through the open prop to the base-model component.And now in the base-model 
    component, we can accept this prop here. in BaseModal -->
  
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