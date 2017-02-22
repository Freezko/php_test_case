import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import Notes from './components/notes.vue';
import NewNote from './components/new-note.vue';

Vue.use(VueRouter);

const routes = [
	{path: '', component: Notes},
	{path: '/new-note', component: NewNote}	
];

const router = new VueRouter({
	mode: 'history',
	routes: routes
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
