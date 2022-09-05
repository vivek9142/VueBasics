const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    addCount() {
      this.counter++;
    },
    decrementCount(val) {
      this.counter -= val;
    },
    changeHandler(ev) {
      console.log(ev);
      this.name = ev.target.value;
    },
    ccchangeHandler(ev, lastName) {
      this.name = ev.target.value + " " + lastName;
    },
    submitHandler(event) {
      console.log(event);
      alert("Submitted form");
    },
  },
});

app.mount("#events");
