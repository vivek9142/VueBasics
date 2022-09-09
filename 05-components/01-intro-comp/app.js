const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");

/*
the problem is no matter on which friend we press the button, we always showed a details
or hide the details of all friends and it should be obvious why that happens
with v-for we output multiple list items here, one for every friend,
but the button always points at the same method. So every button for every friend
gets the same event handler it points at the same method.

So no matter which button on which friend we press, we always call the same method
and we just have details are visible here, which is just one property that controls
the visibility of the details in both contacts. Now there would be work arounds we could pass the 
ID here to toggle details. I also don't even wanna get started with having a ABC and whatever 
a here because this list may grow dynamically. It doesn't in this application because it's a 
simple one but if you allow users to add new friends, you can't anticipate how many properties 
you will need to toggle the visibility of the details.

So this will lead nowhere and therefore I'll reverts this here, this is not how I wanna solve that.
Instead, that's exactly the kind of problem we can solve with components.
*/
