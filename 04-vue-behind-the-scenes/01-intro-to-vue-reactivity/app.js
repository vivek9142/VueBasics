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
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

// ....
// How vue reactivity works behind the scene
/*
So here we built our own reactive system for tracking one property
and updating another property when that one property, the message property 
here, changed. And in a nutshell, and of course, with a couple of 
simplifications, that is what Vue does under the hood.

It keeps track of all your data properties here and whenever such a 
property changes, it updates the part of your app where that property was 
used. For example, it knows that it needs to update this paragraph
where you're using the message. And it does that by wrapping your 
properties with proxies so that it has a chance of finding out
when you're setting a new value. That is how Vue works.
*/
const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!!";

console.log(proxy.longMessage);
