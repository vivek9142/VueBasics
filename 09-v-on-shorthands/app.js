const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    fullName() {
      console.log("running again");
      if (this.name === "") return "";

      return this.name + " " + "Misha";
    },
  },
  watch: {
    // name1(value) {
    //   if (this.name === "") return "";
    //   this.name = value + " " + "Mishaaa";
    // },

    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      if (this.name === "") return "";

      return this.name + " " + "Misha";
    },
  },
});

app.mount("#events");
