import './reset';

//App Dependecies
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);


Vue.http.interceptors.push(() => {
  let token = window.storage.getItem('token');

  return {
  	request: (requset) => {

	  request.headers = {
	  	'Authorisation': token
	  }

  	},
  	response: (response) => {

  		console.log(response.data);
  	}


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
