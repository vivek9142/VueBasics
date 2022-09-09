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
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");

/*
you might have wondered if you can only have one view app per page,
and maybe you already tried out working with multiple apps because yes, 
you can have multiple apps.

So if we add a second section here with an idea of app two, we can 
absolutely create a second app,maybe name it app two here with View 
Create App,which we mount to this app two ID section.

Each of the two apps are standalone app. Both apps have no access to other 
variables and functions.
*/
