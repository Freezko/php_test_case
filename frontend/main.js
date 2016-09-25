import './reset';

//App Dependecies
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);


window.isAuth = window.localStorage.getItem('token') && window.localStorage.getItem('user_id')
window.user_id = window.localStorage.getItem('user_id');


Vue.http.interceptors.push((request, next)  => {

  let token = window.localStorage.getItem('token');
  if(token) {

    request.headers.set('Authorization', 'Bearer ' + token)
    
  }


  // continue to next interceptor
  next((response) => {

    console.log(JSON.parse(JSON.stringify(response.data)));

  });
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
    })


