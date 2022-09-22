<template>
  <div class="container">
    <UsersList/>
  </div>
  <div class="container">
    <div class="block" :class="{animate:animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">

    <transition 
      name="para" 
      :css="false"
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
import UsersList from './components/UsersList.vue';

export default {
  components:{UsersList},
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