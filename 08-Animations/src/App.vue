1 -There's one specific kind of thing which you might want to navigate,
which we haven't seen thus far though. And that would be changes between two routes.

For that, I'll quickly add routing here, simply by adding a new pages folder

2 - but we actually see that router-view can no longer be used directly inside of transition.
Now, it says no longer, because previously with older versions of Vue, that did work.
So maybe if you learned that, you are still used to this old way of doing it.

With Vue 3 this is no longer possible. And we actually get the solution
here in the warning as well. We need to restructure our code. Transition now needs to go inside of 
our router-view.

So we should move transition inside there. But this alone now all the won't do it
because while router-view supports getting content that will be rendered inside of it,
now we also need to tell it where to actually render the actual page,
the actual component that should be rendered based on the route that is active.

And for that, we can use the scoped slots syntax router-view uses under the hood.
Normally we don't need it, but for transitions with routes, you do need it.
You can use this v-slot directive, which I introduced earlier in the course when we talked about slots,
to extract the slotProps you're getting here. You get those by the router-view component,
which is built in. And you can then use the dynamic component component
to bind it to slotProps.Component.

So slotProps have a property named Component with a capital C, which holds the component
that should be loaded for the currently selected route. And this strange looking syntax is what 
you need to animate switches between these components.

3 - And now this kind of works, but of course this looks really stupid here, right?
I mean, it's just moving around and we got two components on the page at the same time.
So this is not fully what we want, but technically this is correct at least.
But one thing we want to change here is something we already saw earlier
when we switched between two buttons. We want to make sure that only one component
is shown on the page at the same time.

And you might remember that we can achieve this by adding the mode prop to the transition component.
And there we add out-in and in-out. And if we use out-in, we ensure that first,
the leaving component is animated before then the entering component is animated.

4 -  one thing you might have noticed before is that when you used that other animation
which looked a bit strange, the route animation here, we even saw that animation when we loaded the page
for the first time.

The reason for data's that with the vue-router, technically the first act of route is an empty route.
And then when your page starts, when your page is loaded for the first time,
it immediately switches to the route that should be used for the given path in your URL.
That means that technically when the app starts, the vue-router goes from no route
to the chosen route for to given path. And hence it plays an animation
because we go from one component, nothing, to the to be loaded component.

To avoid this behavior, you can go to main.js


<template>
  <!-- 1-adding router-view and transition and its classes -->
  <!-- <transition name="route">
    <router-view></router-view>
  </transition> -->

  <!-- 2- changing router-transition setup-->
  <router-view v-slot="slotProps">
    <!-- 3- mode part -->
    <transition name="route" mode="out-in">
    <!-- <transition name="fade-button" mode="out-in"> -->
        <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

  <!-- <div class="container">
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
  </div> -->
</template>  

<script>
// import UsersList from './components/UsersList.vue';

export default {
  // components:{UsersList},
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

.route-enter-from {}
.route-enter-active {
  animation: slide-scale 0.4s ease-in;
}
.route-enter-to {}

.route-leave-active {
  animation: slide-scale 0.4s ease-in;
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