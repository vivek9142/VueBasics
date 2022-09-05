//create app initializes vue app and takes an obj of data and methods
//data take a function which always returns a obj of initial vlaues we need to change by using vue.
//anything you return as part of data can be used dynamically inside vue app
const app = Vue.createApp({
  data: function () {
    return {
      courseGoal: "Finished the course and learn Vue!",
      v1: [1, 2, 3, 4],
      g1: { name: "Name" },
    };
  },
});

//vue integrate vue in some div or section part of html page.
app.mount("#user-goal");
