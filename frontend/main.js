/*import './view/style.scss';

//App Dependecies
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

//Root Element
import rootElement from './view/root.vue';
let root = Vue.extend(rootElement);

//Router Config
import routerMap from './router';

let router = new VueRouter({
    history: false
})

.map(routerMap)
    .start(root, '#root', () => {
        console.log('Приложение работает');
        //счетчикпосетителей таблица guests
        postData.post('/api/guest/new', {
            user_agent: navigator.userAgent
        })
        .then(data => {
            console.log(`${data} загрузок!`);
        });

    });*/


 alert(123);