<template>
  <div class="backdrop" @click="$emit('close')"></div>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default {
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;

  animation: modal 0.3s ease-out forwards;
}

@keyframes modal{
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  } 
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  } 
}
</style>

So whenever this selector finds something on the page and it will find something when the dialogue 
is added to the page, which I do in app Vue in the end with v-if on my custom component, the whole 
component is only added if dialog is visible as true and therefore the dialogue element in the 
component is only added under that circumstances.

And therefore whenever that is the case.
this animation will be played thanks to that key, but the problems start if we all do want to 
animate the removal of the element, if I wanna do that, currently it disappears instantly.

The problem we'll have is that the element is detached from the DOM.
And that means there is no way to animate it with CSS. It's removed instantly.
You can't play an animation and then tell the browser to only remove it once that animation is 
finished, but that is what you would need to do in order to animate the disappearance.

And that's exactly what Vue is able to help us with. Vue can help us with animating the appearance
and also the disappearance of elements by for example,delaying the disappearance
until a certain animation has finished. 

WE'RE USING TRANSITION FOR ANIMATING THE REMOVING OF DOM ELEMENTS in app.vue