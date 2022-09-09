const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");

/*
we're listening to the input event, and therefore, with every keystroke, 
saveInput is fired, and in the saveInput method, INDN just saved the 
current value of the input to the current user input data property,
so that we can eventually use that property later to assign the entered 
value to our message. Alternatively, as you learned before,

we could also use v-model and bind that to our current user input property 
like this. Sometimes that is what you need, for example, because you want 
to validate the user input with every keystroke, but sometimes that's all 
just overkill, and in such cases, Vue has a feature

that allows you to retrieve values from DOM elements when you need them, 
instead of all the time. And that feature is called, refs.
Instead of adding this event listener, which you still could add in addition,
but which we simply won't need any more now, instead of having that,
you add a special attribute to this element, the ref attribute.

here we get is the inspectable object, and this is really the JavaScript 
object representation of this input element, with all the properties that 
has. So this is not Vue specific, that is the vanilla JavaScript object
we could use and work with in any JavaScript code.
*/
