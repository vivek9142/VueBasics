const app = Vue.createApp({
  data() {
    return {
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
  methods: {},
});
// <li v-for="friend in friends" :key="friend.id">
app.component("friend-contact", {
  template: `
  <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
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
Components are a great,if you have certain pieces of HTML.
Certain HTML blocks like here, which you reuse in different parts 
of your page,like here, where we create multiple list items.
Where you then have a certain functionality that should be enclosed 
in that HTML block. And that should be specific to this HTML block.


Components can also be great to splitting your big application
into multiple smaller chunks.A component is the official feature 
Vue.js knows, and we can create one on an app. So on an app we 
create it with create app,by using that app which in my case here
is stored in that app constant and calling the component method on it.

This tells Vue that we want to create a new component. Now this 
component method needs two things. 

The first thing is an identifier for example,user dash contact
A simple rule is that you should use multi word component names, 
so custom HTML tags, because all built in HTML elements
are a single word elements.

The second argument you pass to this component method, is a conflict 
object just as you pass it to create app.A Vue component is 
essentially just another Vue app, just an app that belongs to 
another app.an app which will be connected to our main app.
So components are like mini apps you could say.
So therefore they can also have data,they can have methods and 
therefore our component can have its own data,


So now we got our component, friend contact and how do we now use 
this component? And how does it work?
Well, this component misses one important thing before we can use it.
And that's a template since this is a new app, it needs its own 
template.Our main app has a template, this whole section,
which we mounted the app to, but our component now is a mini app
and it needs its own template. Now, here we don't mount this 
component, we don't call mount on it,so that's not how we will 
connect it to HTML. Instead here for the moment,
we'll add this template option,
*/
