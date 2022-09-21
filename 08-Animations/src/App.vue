<template>
  <div class="container">
    <div class="block" :class="{animate:animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
   <!-- 
    now we'll try to add animation in transitions with js 
    we'll make use of these methods to create animation
   -->

    <transition 
      name="para" 
      @before-enter="beforEnter" 
      @before-leave="beforeLeav" 
      @enter="entr"
      @after-enter="aftrEntr"
      @leave="leav"
      @after-leave="afterLeav"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled">
      
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
    return { 
    animatedBlock:false,
    dialogIsVisible: false,
    paraIsVisible:false,
    usersAreVisible:true,
    enterInterval:null,
    leaveInterval:null
    };
  },
  methods: {
    enterCancelled(){
      clearInterval(this.enterInterval)
    },
    leaveCancelled(){
      clearInterval(this.leaveInterval);
    },
    beforEnter(el){
      console.log('beforeEnter')
      console.log(el);
      el.style.opacity = 0;
    },
    entr(el,done){
      console.log('enter' )
      console.log(el);
      let round=1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if(round>100) {
          clearInterval(this.enterInterval);
          done();
        }
      },20);
    },
    /*
    I click Toggle Paragraph and afterEnter is called right away.
    This might or might not matter to you.But actually the order is wrong as you can tell;
    it's called too early. And in some cases this might matter. And this is not a bug.
    
    But instead Vue has no chance of knowing when it should call afterEnter.
    To us it's obvious. I mean, we're done with enter, once we in the end
    make it into this if condition. But that's something view doesn't really understand.
    That's way too logical. It doesn't parse and try to understand our code
    and our reasons behind writing that code. Instead, we have to tell you when we're done here.
    And for that, enter, actually receives a second argument automatically.
    
    And that's a done function, which you can call whenever you want to signal to Vue that you are 
    done in this hook. You don't need to call it if you're having CSS-based animations
    because then Vue is able to read the duration in the CSS code. But if you're not using CSS, 
    if you have your own logic and the duration is simply just made up by incrementing round and 
    checking this condition and having a certain interval time here, then you need to call done 
    explicitly to let Vue know when you're done.
    
    So here after clearInterval, we call done. We call this done argument as a function
    to let you know when we're done.

     you'll also see it flickers a little bit. And it's flickering, because in the end
     it's playing two animations at the same time.If we cancel the first animation that effectively 
     just means that the leave animation starts before the entering animation finished or the other 
     way around.So then both animations are playing at the same time resulting in that flickering 
     which you saw here. And that's also something we can prevent.

      Because there is another useful event which is emitted by the transition component.
      And that is the enter dash canceled event and the leave canceled event.
      And here we can execute methods which are called whenever the animation is canceled.
      And by the way, those events are always emitted
      when it's canceled, no matter if you are writing your logic with JavaScript as we're doing it 
      here. Or if you would be using CSS as we did before. Whenever one transition isn't finished,
      when you start a new a transition,the respective canceled event will be emitted.
    */ 
    aftrEntr(el){
      console.log('after enter' )
      console.log(el);
    },
    beforeLeav(el){
      console.log('beforeLeave' )
      console.log(el);
      el.style.opacity=1;
    },
    leav(el,done){
      console.log('leave' )
      console.log(el);
      let round=1;
      this.leaveInterval =  setInterval(() =>{
        el.style.opacity = 1 - round * 0.01;
        round++;
        if(round>100) {
          clearInterval(this.leaveInterval);
          done();
        }
      },20);
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

/* .para-enter-active {
  animation: slide-scale 0.3s ease-out;
} */

/* .v-enter-to {
  opacity: 1;
  transform: translateY(0);
} */
/* .v-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

/* .para-leave-active {
  animation: slide-scale 0.3s ease-out;
} */

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