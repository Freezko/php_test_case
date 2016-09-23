import './reset';

//App Dependecies
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

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
