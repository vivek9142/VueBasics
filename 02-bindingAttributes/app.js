const app = Vue.createApp({
  data: function () {
    return {
      courseGoal: "Finished the course and learn Vue!",
      vueLink: "https://vuejs.org/",
    };
  },
});

app.mount("#user-goal");
