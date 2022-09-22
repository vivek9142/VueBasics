import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const app = createApp(App);
// 1- added router , paths ,pages , commented rest of code in app.vue and
//added router-view,transition
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals },
  ],
});

app.use(router);

app.component('base-modal', BaseModal);

/*
4- go where you register the router and there you can actually use the router to call the is ready method on it. 
This method will let you know when the router successfully evaluated which page should be loaded.
This gives you a promise and hence you can call then on it. And in the function you pass to this then block,
in this function the router will now not go from the empty to the to be selected page.

But instead, at this point of time, it is aware of the page that should be loaded
and it will therefore not make this initial transition. So you can then mount your app inside of this 
function to only mount and therefore render your app once the router is fully set up and aware of 
the page that should be loaded.

And if you do that and reload, you don't have this initial animation.
*/

router.isReady().then(function () {
  app.mount('#app');
});

// app.mount('#app');
