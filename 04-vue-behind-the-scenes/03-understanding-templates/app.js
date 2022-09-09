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
The official term is template by mounting your app,
your Vue app to a certain place in the DOM in the HTML code,
you make that part of the HTML code the template of that Vue app.
So this section is the template of our first Vue app which is mounted 
with this selector to this section, and that other section is the template
of our second Vue app.
*/
