import './reset';

//App Dependecies
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);


Vue.http.interceptors.push((request, next) => {

  let token = window.storage.getItem('token');

  request.headers = {
  	'Authorisation': token
  }

  // continue to next interceptor
  next();
});

//Root Element
import rootElement from './app';
let root = Vue.extend(rootElement);

//Router Config
import routerMap from './router-map';

let router = new VueRouter({
    history: true
})

.map(routerMap)
    .start(root, '#application', () => {
        console.log('Роутер активен');
    });
